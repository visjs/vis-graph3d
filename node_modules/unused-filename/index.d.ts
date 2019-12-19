declare const unusedFilename: {
	/**
	Get an unused filename by appending a number if it exists: `file.txt` → `file (1).txt`.

	@param filePath - The path to check for filename collision.
	@returns Either the original `filename` or the `filename` appended with a number.
	*/
	(filePath: string): Promise<string>;

	/**
	Synchronously get an unused filename by appending a number if it exists: `file.txt` → `file (1).txt`.

	@param filePath - The path to check for filename collision.
	@returns Either the original `filename` or the `filename` appended with a number.
	*/
	sync(filePath: string): string;

	// TODO: Remove this for the next major release
	default: typeof unusedFilename;
};

export = unusedFilename;
