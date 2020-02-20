'use strict';

const regex = '[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*';

module.exports = ({exact} = {}) => exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');
