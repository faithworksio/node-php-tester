
/**
* This method basically takes a file, executes the command line PHP and calls the passed callback with the result.
*/
class ExecPHP {
	/**
	*
	*/
	constructor() {
		this.phpPath = '/usr/bin/php';  // your local path to php executable- in command line: 'which php'
		this.phpFolder = '';
	}
	/**
	*
	*/
	parseFile(fileName,callback) {
		var realFileName = this.phpFolder + fileName;

		console.log('parsing file: ' + realFileName);

		var exec = require('child_process').exec;
		var cmd = this.phpPath + ' ' + realFileName;

		exec(cmd, function(error, stdout, stderr) {
			callback(stdout);
		});
	}
}
module.exports = function() {
	return new ExecPHP();
};
