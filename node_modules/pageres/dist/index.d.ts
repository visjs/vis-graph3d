/// <reference types="node" />
import EventEmitter = require('events');
export interface Options {
    readonly delay?: number;
    readonly timeout?: number;
    readonly crop?: boolean;
    readonly css?: string;
    readonly script?: string;
    readonly cookies?: ReadonlyArray<string | {
        [key: string]: string;
    }>;
    readonly filename?: string;
    readonly incrementalName?: boolean;
    readonly selector?: string;
    readonly hide?: readonly string[];
    readonly username?: string;
    readonly password?: string;
    readonly scale?: number;
    readonly format?: string;
    readonly userAgent?: string;
    readonly headers?: {
        [key: string]: string;
    };
    readonly transparent?: boolean;
}
export interface Source {
    readonly url: string;
    readonly sizes: string[];
    readonly options?: Options;
}
export declare type Destination = string;
export interface Viewport {
    readonly url: string;
    readonly sizes: string[];
    readonly keywords: string[];
}
export declare type Screenshot = Buffer & {
    filename: string;
};
export default class Pageres extends EventEmitter {
    private readonly options;
    private stats;
    private readonly items;
    private readonly sizes;
    private readonly urls;
    private readonly _source;
    private _destination;
    constructor(options?: Options);
    src(): Source[];
    src(url: string, sizes: readonly string[], options?: Options): this;
    dest(): Destination;
    dest(directory: Destination): this;
    run(): Promise<Screenshot[]>;
    successMessage(): void;
    private resolution;
    private viewport;
    private save;
    private create;
}
