import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { generateHeader } from 'vis-dev-utils';
import { terser } from "rollup-plugin-terser";

const banner = generateHeader();

export default [{
	input: 'index.js',
	output: {
		banner,
		file: 'dist/esm.js',
		format: 'esm',
		sourcemap: true
	},
	plugins: [
		commonjs(),
		nodeResolve(),
		babel({ runtimeHelpers: true })
	],
},
{
	input: 'index.js',
	output: {
		banner,
		file: 'dist/vis-graph3d.min.js',
		format: 'umd',
		exports: 'named',
		name: 'vis',
		extend: true,
		sourcemap: true
	},
	plugins: [
		commonjs(),
		nodeResolve(),
		babel({ runtimeHelpers: true }),
		terser({
			output: {
				comments: (_node, { value }) => /@license/.test(value)
			}
		})
	],
}]
