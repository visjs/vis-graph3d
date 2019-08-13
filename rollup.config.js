import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import banner from 'rollup-plugin-banner';
import genHeader from './lib/header';

export default [{
	input: 'index.js',
	output: {
		file: 'dist/esm.js',
		format: 'esm',
	},
	plugins: [
		commonjs(),
		nodeBuiltins(),
		nodeResolve(),
		babel(),
		banner(genHeader('data'))
	],
},
{
	input: 'index.js',
	output: {
		file: 'dist/vis-graph3d.min.js',
		format: 'umd',
		exports: 'named',
		name: 'vis',
		extend: true
	},
	plugins: [
		commonjs(),
		nodeBuiltins(),
		nodeResolve(),
		babel(),
		uglify(),
		banner(genHeader('graph3d'))
	],
}]
