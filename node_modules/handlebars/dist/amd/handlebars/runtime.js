define(['exports', './utils', './exception', './base', './helpers', './internal/wrapHelper', './internal/createNewLookupObject'], function (exports, _utils, _exception, _base, _helpers, _internalWrapHelper, _internalCreateNewLookupObject) {
  'use strict';

  exports.__esModule = true;
  exports.checkRevision = checkRevision;
  exports.template = template;
  exports.wrapProgram = wrapProgram;
  exports.resolvePartial = resolvePartial;
  exports.invokePartial = invokePartial;
  exports.noop = noop;
  // istanbul ignore next

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Exception = _interopRequireDefault(_exception);

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = _base.COMPILER_REVISION;

    if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
      return;
    }

    if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _Exception['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _Exception['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }

  function template(templateSpec, env) {
    /* istanbul ignore next */
    if (!env) {
      throw new _Exception['default']('No environment passed to template');
    }
    if (!templateSpec || !templateSpec.main) {
      throw new _Exception['default']('Unknown template object: ' + typeof templateSpec);
    }

    templateSpec.main.decorator = templateSpec.main_d;

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as pseudo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);

    // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
    var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

    function invokePartialWrapper(partial, context, options) {
      if (options.hash) {
        context = _utils.extend({}, context, options.hash);
        if (options.ids) {
          options.ids[0] = true;
        }
      }
      partial = env.VM.resolvePartial.call(this, partial, context, options);

      var extendedOptions = _utils.extend({}, options, {
        hooks: this.hooks,
        allowedProtoMethods: this.allowedProtoMethods,
        allowedProtoProperties: this.allowedProtoProperties
      });

      var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

      if (result == null && env.compile) {
        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
        result = options.partials[options.name](context, extendedOptions);
      }
      if (result != null) {
        if (options.indent) {
          var lines = result.split('\n');
          for (var i = 0, l = lines.length; i < l; i++) {
            if (!lines[i] && i + 1 === l) {
              break;
            }

            lines[i] = options.indent + lines[i];
          }
          result = lines.join('\n');
        }
        return result;
      } else {
        throw new _Exception['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
      }
    }

    // Just add water
    var container = {
      strict: function strict(obj, name, loc) {
        if (!obj || !(name in obj)) {
          throw new _Exception['default']('"' + name + '" not defined in ' + obj, {
            loc: loc
          });
        }
        return obj[name];
      },
      lookupProperty: function lookupProperty(parent, propertyName) {
        var result = parent[propertyName];
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return result;
        }
        var whitelist = typeof result === 'function' ? container.allowedProtoMethods : container.allowedProtoProperties;

        if (whitelist[propertyName] === true) {
          return result;
        }
        return undefined;
      },
      lookup: function lookup(depths, name) {
        var len = depths.length;
        for (var i = 0; i < len; i++) {
          var result = depths[i] && container.lookupProperty(depths[i], name);
          if (result != null) {
            return depths[i][name];
          }
        }
      },
      lambda: function lambda(current, context) {
        return typeof current === 'function' ? current.call(context) : current;
      },

      escapeExpression: _utils.escapeExpression,
      invokePartial: invokePartialWrapper,

      fn: function fn(i) {
        var ret = templateSpec[i];
        ret.decorator = templateSpec[i + '_d'];
        return ret;
      },

      programs: [],
      program: function program(i, data, declaredBlockParams, blockParams, depths) {
        var programWrapper = this.programs[i],
            fn = this.fn(i);
        if (data || depths || blockParams || declaredBlockParams) {
          programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = wrapProgram(this, i, fn);
        }
        return programWrapper;
      },

      data: function data(value, depth) {
        while (value && depth--) {
          value = value._parent;
        }
        return value;
      },
      mergeIfNeeded: function mergeIfNeeded(param, common) {
        var obj = param || common;

        if (param && common && param !== common) {
          obj = _utils.extend({}, common, param);
        }

        return obj;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),

      noop: env.VM.noop,
      compilerInfo: templateSpec.compiler
    };

    function ret(context) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var data = options.data;

      ret._setup(options);
      if (!options.partial && templateSpec.useData) {
        data = initData(context, data);
      }
      var depths = undefined,
          blockParams = templateSpec.useBlockParams ? [] : undefined;
      if (templateSpec.useDepths) {
        if (options.depths) {
          depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
        } else {
          depths = [context];
        }
      }

      function main(context /*, options*/) {
        return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
      }
      main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
      return main(context, options);
    }
    ret.isTop = true;

    ret._setup = function (options) {
      if (!options.partial) {
        var mergedHelpers = _utils.extend({}, env.helpers, options.helpers);
        wrapHelpersToPassLookupProperty(mergedHelpers, container);
        container.helpers = mergedHelpers;

        if (templateSpec.usePartial) {
          // Use mergeIfNeeded here to prevent compiling global partials multiple times
          container.partials = container.mergeIfNeeded(options.partials, env.partials);
        }
        if (templateSpec.usePartial || templateSpec.useDecorators) {
          container.decorators = _utils.extend({}, env.decorators, options.decorators);
        }

        container.hooks = {};
        container.allowedProtoProperties = _internalCreateNewLookupObject.createNewLookupObject(options.allowedProtoProperties);
        container.allowedProtoMethods = _internalCreateNewLookupObject.createNewLookupObject(options.allowedProtoMethods);

        var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
        _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
        _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
      } else {
        container.allowedProtoProperties = options.allowedProtoProperties;
        container.allowedProtoMethods = options.allowedProtoMethods;
        container.helpers = options.helpers;
        container.partials = options.partials;
        container.decorators = options.decorators;
        container.hooks = options.hooks;
      }
    };

    ret._child = function (i, data, blockParams, depths) {
      if (templateSpec.useBlockParams && !blockParams) {
        throw new _Exception['default']('must pass block params');
      }
      if (templateSpec.useDepths && !depths) {
        throw new _Exception['default']('must pass parent depths');
      }

      return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
  }

  function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    function prog(context) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var currentDepths = depths;
      if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
        currentDepths = [context].concat(depths);
      }

      return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
    }

    prog = executeDecorators(fn, prog, container, depths, data, blockParams);

    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
  }

  /**
   * This is currently part of the official API, therefore implementation details should not be changed.
   */

  function resolvePartial(partial, context, options) {
    if (!partial) {
      if (options.name === '@partial-block') {
        partial = options.data['partial-block'];
      } else {
        partial = options.partials[options.name];
      }
    } else if (!partial.call && !options.name) {
      // This is a dynamic partial that returned a string
      options.name = partial;
      partial = options.partials[partial];
    }
    return partial;
  }

  function invokePartial(partial, context, options) {
    // Use the current closure context to save the partial-block if this partial
    var currentPartialBlock = options.data && options.data['partial-block'];
    options.partial = true;
    if (options.ids) {
      options.data.contextPath = options.ids[0] || options.data.contextPath;
    }

    var partialBlock = undefined;
    if (options.fn && options.fn !== noop) {
      (function () {
        options.data = _base.createFrame(options.data);
        // Wrapper function to get access to currentPartialBlock from the closure
        var fn = options.fn;
        partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          // Restore the partial-block from the closure for the execution of the block
          // i.e. the part inside the block of the partial call.
          options.data = _base.createFrame(options.data);
          options.data['partial-block'] = currentPartialBlock;
          return fn(context, options);
        };
        if (fn.partials) {
          options.partials = _utils.extend({}, options.partials, fn.partials);
        }
      })();
    }

    if (partial === undefined && partialBlock) {
      partial = partialBlock;
    }

    if (partial === undefined) {
      throw new _Exception['default']('The partial ' + options.name + ' could not be found');
    } else if (partial instanceof Function) {
      return partial(context, options);
    }
  }

  function noop() {
    return '';
  }

  function initData(context, data) {
    if (!data || !('root' in data)) {
      data = data ? _base.createFrame(data) : {};
      data.root = context;
    }
    return data;
  }

  function executeDecorators(fn, prog, container, depths, data, blockParams) {
    if (fn.decorator) {
      var props = {};
      prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
      _utils.extend(prog, props);
    }
    return prog;
  }

  function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
    Object.keys(mergedHelpers).forEach(function (helperName) {
      var helper = mergedHelpers[helperName];
      mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
    });
  }

  function passLookupPropertyOption(helper, container) {
    var lookupProperty = container.lookupProperty;
    return _internalWrapHelper.wrapHelper(helper, function (options) {
      return _utils.extend({ lookupProperty: lookupProperty }, options);
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVlPLFdBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxRQUFNLGdCQUFnQixHQUFHLEFBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSyxDQUFDO1FBQzdELGVBQWUsU0FYakIsaUJBQWlCLEFBV29CLENBQUM7O0FBRXRDLFFBQ0UsZ0JBQWdCLFVBWmxCLGlDQUFpQyxBQVlzQixJQUNyRCxnQkFBZ0IsVUFmbEIsaUJBQWlCLEFBZXNCLEVBQ3JDO0FBQ0EsYUFBTztLQUNSOztBQUVELFFBQUksZ0JBQWdCLFNBbEJwQixpQ0FBaUMsQUFrQnVCLEVBQUU7QUFDeEQsVUFBTSxlQUFlLEdBQUcsTUFsQjFCLGdCQUFnQixDQWtCMkIsZUFBZSxDQUFDO1VBQ3ZELGdCQUFnQixHQUFHLE1BbkJ2QixnQkFBZ0IsQ0FtQndCLGdCQUFnQixDQUFDLENBQUM7QUFDeEQsWUFBTSwwQkFDSix5RkFBeUYsR0FDdkYscURBQXFELEdBQ3JELGVBQWUsR0FDZixtREFBbUQsR0FDbkQsZ0JBQWdCLEdBQ2hCLElBQUksQ0FDUCxDQUFDO0tBQ0gsTUFBTTs7QUFFTCxZQUFNLDBCQUNKLHdGQUF3RixHQUN0RixpREFBaUQsR0FDakQsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUNmLElBQUksQ0FDUCxDQUFDO0tBQ0g7R0FDRjs7QUFFTSxXQUFTLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFOztBQUUxQyxRQUFJLENBQUMsR0FBRyxFQUFFO0FBQ1IsWUFBTSwwQkFBYyxtQ0FBbUMsQ0FBQyxDQUFDO0tBQzFEO0FBQ0QsUUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7QUFDdkMsWUFBTSwwQkFBYywyQkFBMkIsR0FBRyxPQUFPLFlBQVksQ0FBQyxDQUFDO0tBQ3hFOztBQUVELGdCQUFZLENB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QUN2QyxtQkFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztLQUN6RSxDQUFDLENBQUM7R0FDSjs7QUFFRCxXQUFTLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUU7QUFDbkQsUUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQztBQUNoRCxXQUFPLG9CQXhiQSxVQUFVLENBd2JDLE1BQU0sRUFBRSxVQUFBLE9BQU8sRUFBSTtBQUNuQyxhQUFPLE9BQU0sTUFBTSxDQUFDLEVBQUUsY0FBYyxFQUFkLGNBQWMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2xELENBQUMsQ0FBQztHQUNKIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHtcbiAgQ09NUElMRVJfUkVWSVNJT04sXG4gIGNyZWF0ZUZyYW1lLFxuICBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04sXG4gIFJFVklTSU9OX0NIQU5HRVNcbn0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IG1vdmVIZWxwZXJUb0hvb2tzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHdyYXBIZWxwZXIgfSBmcm9tICcuL2ludGVybmFsL3dyYXBIZWxwZXInO1xuaW1wb3J0IHsgY3JlYXRlTmV3TG9va3VwT2JqZWN0IH0gZnJvbSAnLi9pbnRlcm5hbC9jcmVhdGVOZXdMb29rdXBPYmplY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZXZpc2lvbihjb21waWxlckluZm8pIHtcbiAgY29uc3QgY29tcGlsZXJSZXZpc2lvbiA9IChjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdKSB8fCAxLFxuICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChcbiAgICBjb21waWxlclJldmlzaW9uID49IExBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiAmJlxuICAgIGNvbXBpbGVyUmV2aXNpb24gPD0gQ09NUElMRVJfUkVWSVNJT05cbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04pIHtcbiAgICBjb25zdCBydW50aW1lVmVyc2lvbnMgPSBSRVZJU0lPTl9DSEFOR0VTW2N1cnJlbnRSZXZpc2lvbl0sXG4gICAgICBjb21waWxlclZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArXG4gICAgICAgIHJ1bnRpbWVWZXJzaW9ucyArXG4gICAgICAgICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArXG4gICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgK1xuICAgICAgICAnKS4nXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgK1xuICAgICAgICBjb21waWxlckluZm9bMV0gK1xuICAgICAgICAnKS4nXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHNldWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciBwcmVjb21waWxlZCB0ZW1wbGF0ZXMgd2l0aCBjb21waWxlci12ZXJzaW9uIDcgKDw0LjMuMClcbiAgY29uc3QgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3ID1cbiAgICB0ZW1wbGF0ZVNwZWMuY29tcGlsZXIgJiYgdGVtcGxhdGVTcGVjLmNvbXBpbGVyWzBdID09PSA3O1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgbGV0IGV4dGVuZGVkT3B0aW9ucyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgICAgaG9va3M6IHRoaXMuaG9va3MsXG4gICAgICBhbGxvd2VkUHJvdG9NZXRob2RzOiB0aGlzLmFsbG93ZWRQcm90b01ldGhvZHMsXG4gICAgICBhbGxvd2VkUHJvdG9Qcm9wZXJ0aWVzOiB0aGlzLmFsbG93ZWRQcm90b1Byb3BlcnRpZXNcbiAgICB9KTtcblxuICAgIGxldCByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgIHBhcnRpYWwsXG4gICAgICBjb250ZXh0LFxuICAgICAgZXh0ZW5kZWRPcHRpb25zXG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUoXG4gICAgICAgIHBhcnRpYWwsXG4gICAgICAgIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsXG4gICAgICAgIGVudlxuICAgICAgKTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBleHRlbmRlZE9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmluZGVudCkge1xuICAgICAgICBsZXQgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICghbGluZXNbaV0gJiYgaSArIDEgPT09IGwpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpbmVzW2ldID0gb3B0aW9ucy5pbmRlbnQgKyBsaW5lc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXG4gICAgICAgICdUaGUgcGFydGlhbCAnICtcbiAgICAgICAgICBvcHRpb25zLm5hbWUgK1xuICAgICAgICAgICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZSdcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgbGV0IGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uKG9iaiwgbmFtZSwgbG9jKSB7XG4gICAgICBpZiAoIW9iaiB8fCAhKG5hbWUgaW4gb2JqKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdcIicgKyBuYW1lICsgJ1wiIG5vdCBkZWZpbmVkIGluICcgKyBvYmosIHtcbiAgICAgICAgICBsb2M6IGxvY1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpbbmFtZV07XG4gICAgfSxcbiAgICBsb29rdXBQcm9wZXJ0eTogZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIGxldCByZXN1bHQgPSBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBjb25zdCB3aGl0ZWxpc3QgPVxuICAgICAgICB0eXBlb2YgcmVzdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBjb250YWluZXIuYWxsb3dlZFByb3RvTWV0aG9kc1xuICAgICAgICAgIDogY29udGFpbmVyLmFsbG93ZWRQcm90b1Byb3BlcnRpZXM7XG5cbiAgICAgIGlmICh3aGl0ZWxpc3RbcHJvcGVydHlOYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIGxvb2t1cDogZnVuY3Rpb24oZGVwdGhzLCBuYW1lKSB7XG4gICAgICBjb25zdCBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZGVwdGhzW2ldICYmIGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eShkZXB0aHNbaV0sIG5hbWUpO1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIGxldCBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGZuLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgZGVjbGFyZWRCbG9ja1BhcmFtcyxcbiAgICAgICAgICBibG9ja1BhcmFtcyxcbiAgICAgICAgICBkZXB0aHNcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoIXByb2dyYW1XcmFwcGVyKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24odmFsdWUsIGRlcHRoKSB7XG4gICAgICB3aGlsZSAodmFsdWUgJiYgZGVwdGgtLSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLl9wYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBtZXJnZUlmTmVlZGVkOiBmdW5jdGlvbihwYXJhbSwgY29tbW9uKSB7XG4gICAgICBsZXQgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG4gICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIHBhcmFtICE9PSBjb21tb24pIHtcbiAgICAgICAgb2JqID0gVXRpbHMuZXh0ZW5kKHt9LCBjb21tb24sIHBhcmFtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIC8vIEFuIGVtcHR5IG9iamVjdCB0byB1c2UgYXMgcmVwbGFjZW1lbnQgZm9yIG51bGwtY29udGV4dHNcbiAgICBudWxsQ29udGV4dDogT2JqZWN0LnNlYWwoe30pLFxuXG4gICAgbm9vcDogZW52LlZNLm5vb3AsXG4gICAgY29tcGlsZXJJbmZvOiB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJcbiAgfTtcblxuICBmdW5jdGlvbiByZXQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgICByZXQuX3NldHVwKG9wdGlvbnMpO1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsICYmIHRlbXBsYXRlU3BlYy51c2VEYXRhKSB7XG4gICAgICBkYXRhID0gaW5pdERhdGEoY29udGV4dCwgZGF0YSk7XG4gICAgfVxuICAgIGxldCBkZXB0aHMsXG4gICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcbiAgICAgICAgZGVwdGhzID1cbiAgICAgICAgICBjb250ZXh0ICE9IG9wdGlvbnMuZGVwdGhzWzBdXG4gICAgICAgICAgICA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpXG4gICAgICAgICAgICA6IG9wdGlvbnMuZGVwdGhzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwdGhzID0gW2NvbnRleHRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1haW4oY29udGV4dCAvKiwgb3B0aW9ucyovKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAnJyArXG4gICAgICAgIHRlbXBsYXRlU3BlYy5tYWluKFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIGNvbnRhaW5lci5oZWxwZXJzLFxuICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGJsb2NrUGFyYW1zLFxuICAgICAgICAgIGRlcHRoc1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnMoXG4gICAgICB0ZW1wbGF0ZVNwZWMubWFpbixcbiAgICAgIG1haW4sXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcHRpb25zLmRlcHRocyB8fCBbXSxcbiAgICAgIGRhdGEsXG4gICAgICBibG9ja1BhcmFtc1xuICAgICk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuICByZXQuX3NldHVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBsZXQgbWVyZ2VkSGVscGVycyA9IFV0aWxzLmV4dGVuZCh7fSwgZW52LmhlbHBlcnMsIG9wdGlvbnMuaGVscGVycyk7XG4gICAgICB3cmFwSGVscGVyc1RvUGFzc0xvb2t1cFByb3BlcnR5KG1lcmdlZEhlbHBlcnMsIGNvbnRhaW5lcik7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG1lcmdlZEhlbHBlcnM7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuICAgICAgICAvLyBVc2UgbWVyZ2VJZk5lZWRlZCBoZXJlIHRvIHByZXZlbnQgY29tcGlsaW5nIGdsb2JhbCBwYXJ0aWFscyBtdWx0aXBsZSB0aW1lc1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2VJZk5lZWRlZChcbiAgICAgICAgICBvcHRpb25zLnBhcnRpYWxzLFxuICAgICAgICAgIGVudi5wYXJ0aWFsc1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gVXRpbHMuZXh0ZW5kKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIGVudi5kZWNvcmF0b3JzLFxuICAgICAgICAgIG9wdGlvbnMuZGVjb3JhdG9yc1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuaG9va3MgPSB7fTtcbiAgICAgIGNvbnRhaW5lci5hbGxvd2VkUHJvdG9Qcm9wZXJ0aWVzID0gY3JlYXRlTmV3TG9va3VwT2JqZWN0KFxuICAgICAgICBvcHRpb25zLmFsbG93ZWRQcm90b1Byb3BlcnRpZXNcbiAgICAgICk7XG4gICAgICBjb250YWluZXIuYWxsb3dlZFByb3RvTWV0aG9kcyA9IGNyZWF0ZU5ld0xvb2t1cE9iamVjdChcbiAgICAgICAgb3B0aW9ucy5hbGxvd2VkUHJvdG9NZXRob2RzXG4gICAgICApO1xuXG4gICAgICBsZXQga2VlcEhlbHBlckluSGVscGVycyA9XG4gICAgICAgIG9wdGlvbnMuYWxsb3dDYWxsc1RvSGVscGVyTWlzc2luZyB8fFxuICAgICAgICB0ZW1wbGF0ZVdhc1ByZWNvbXBpbGVkV2l0aENvbXBpbGVyVjc7XG4gICAgICBtb3ZlSGVscGVyVG9Ib29rcyhjb250YWluZXIsICdoZWxwZXJNaXNzaW5nJywga2VlcEhlbHBlckluSGVscGVycyk7XG4gICAgICBtb3ZlSGVscGVyVG9Ib29rcyhjb250YWluZXIsICdibG9ja0hlbHBlck1pc3NpbmcnLCBrZWVwSGVscGVySW5IZWxwZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmFsbG93ZWRQcm90b1Byb3BlcnRpZXMgPSBvcHRpb25zLmFsbG93ZWRQcm90b1Byb3BlcnRpZXM7XG4gICAgICBjb250YWluZXIuYWxsb3dlZFByb3RvTWV0aG9kcyA9IG9wdGlvbnMuYWxsb3dlZFByb3RvTWV0aG9kcztcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gb3B0aW9ucy5oZWxwZXJzO1xuICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcbiAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gb3B0aW9ucy5kZWNvcmF0b3JzO1xuICAgICAgY29udGFpbmVyLmhvb2tzID0gb3B0aW9ucy5ob29rcztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGksXG4gICAgICB0ZW1wbGF0ZVNwZWNbaV0sXG4gICAgICBkYXRhLFxuICAgICAgMCxcbiAgICAgIGJsb2NrUGFyYW1zLFxuICAgICAgZGVwdGhzXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBQcm9ncmFtKFxuICBjb250YWluZXIsXG4gIGksXG4gIGZuLFxuICBkYXRhLFxuICBkZWNsYXJlZEJsb2NrUGFyYW1zLFxuICBibG9ja1BhcmFtcyxcbiAgZGVwdGhzXG4pIHtcbiAgZnVuY3Rpb24gcHJvZyhjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgY3VycmVudERlcHRocyA9IGRlcHRocztcbiAgICBpZiAoXG4gICAgICBkZXB0aHMgJiZcbiAgICAgIGNvbnRleHQgIT0gZGVwdGhzWzBdICYmXG4gICAgICAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpXG4gICAgKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNvbnRleHQsXG4gICAgICBjb250YWluZXIuaGVscGVycyxcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyxcbiAgICAgIG9wdGlvbnMuZGF0YSB8fCBkYXRhLFxuICAgICAgYmxvY2tQYXJhbXMgJiYgW29wdGlvbnMuYmxvY2tQYXJhbXNdLmNvbmNhdChibG9ja1BhcmFtcyksXG4gICAgICBjdXJyZW50RGVwdGhzXG4gICAgKTtcbiAgfVxuXG4gIHByb2cgPSBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKTtcblxuICBwcm9nLnByb2dyYW0gPSBpO1xuICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG4gIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG4gIHJldHVybiBwcm9nO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgY3VycmVudGx5IHBhcnQgb2YgdGhlIG9mZmljaWFsIEFQSSwgdGhlcmVmb3JlIGltcGxlbWVudGF0aW9uIGRldGFpbHMgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICBpZiAoIXBhcnRpYWwpIHtcbiAgICBpZiAob3B0aW9ucy5uYW1lID09PSAnQHBhcnRpYWwtYmxvY2snKSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV07XG4gICAgfVxuICB9IGVsc2UgaWYgKCFwYXJ0aWFsLmNhbGwgJiYgIW9wdGlvbnMubmFtZSkge1xuICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljIHBhcnRpYWwgdGhhdCByZXR1cm5lZCBhIHN0cmluZ1xuICAgIG9wdGlvbnMubmFtZSA9IHBhcnRpYWw7XG4gICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbcGFydGlhbF07XG4gIH1cbiAgcmV0dXJuIHBhcnRpYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgLy8gVXNlIHRoZSBjdXJyZW50IGNsb3N1cmUgY29udGV4dCB0byBzYXZlIHRoZSBwYXJ0aWFsLWJsb2NrIGlmIHRoaXMgcGFydGlhbFxuICBjb25zdCBjdXJyZW50UGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICBvcHRpb25zLnBhcnRpYWwgPSB0cnVlO1xuICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICBvcHRpb25zLmRhdGEuY29udGV4dFBhdGggPSBvcHRpb25zLmlkc1swXSB8fCBvcHRpb25zLmRhdGEuY29udGV4dFBhdGg7XG4gIH1cblxuICBsZXQgcGFydGlhbEJsb2NrO1xuICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XG4gICAgb3B0aW9ucy5kYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAvLyBXcmFwcGVyIGZ1bmN0aW9uIHRvIGdldCBhY2Nlc3MgdG8gY3VycmVudFBhcnRpYWxCbG9jayBmcm9tIHRoZSBjbG9zdXJlXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcbiAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGZ1bmN0aW9uIHBhcnRpYWxCbG9ja1dyYXBwZXIoXG4gICAgICBjb250ZXh0LFxuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgKSB7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBpZiAoZm4ucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gaW5pdERhdGEoY29udGV4dCwgZGF0YSkge1xuICBpZiAoIWRhdGEgfHwgISgncm9vdCcgaW4gZGF0YSkpIHtcbiAgICBkYXRhID0gZGF0YSA/IGNyZWF0ZUZyYW1lKGRhdGEpIDoge307XG4gICAgZGF0YS5yb290ID0gY29udGV4dDtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcykge1xuICBpZiAoZm4uZGVjb3JhdG9yKSB7XG4gICAgbGV0IHByb3BzID0ge307XG4gICAgcHJvZyA9IGZuLmRlY29yYXRvcihcbiAgICAgIHByb2csXG4gICAgICBwcm9wcyxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGRlcHRocyAmJiBkZXB0aHNbMF0sXG4gICAgICBkYXRhLFxuICAgICAgYmxvY2tQYXJhbXMsXG4gICAgICBkZXB0aHNcbiAgICApO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG5cbmZ1bmN0aW9uIHdyYXBIZWxwZXJzVG9QYXNzTG9va3VwUHJvcGVydHkobWVyZ2VkSGVscGVycywgY29udGFpbmVyKSB7XG4gIE9iamVjdC5rZXlzKG1lcmdlZEhlbHBlcnMpLmZvckVhY2goaGVscGVyTmFtZSA9PiB7XG4gICAgbGV0IGhlbHBlciA9IG1lcmdlZEhlbHBlcnNbaGVscGVyTmFtZV07XG4gICAgbWVyZ2VkSGVscGVyc1toZWxwZXJOYW1lXSA9IHBhc3NMb29rdXBQcm9wZXJ0eU9wdGlvbihoZWxwZXIsIGNvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXNzTG9va3VwUHJvcGVydHlPcHRpb24oaGVscGVyLCBjb250YWluZXIpIHtcbiAgY29uc3QgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHk7XG4gIHJldHVybiB3cmFwSGVscGVyKGhlbHBlciwgb3B0aW9ucyA9PiB7XG4gICAgcmV0dXJuIFV0aWxzLmV4dGVuZCh7IGxvb2t1cFByb3BlcnR5IH0sIG9wdGlvbnMpO1xuICB9KTtcbn1cbiJdfQ==
