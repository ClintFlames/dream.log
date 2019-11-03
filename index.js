class gen {
	constructor(color, name, text) {
		const err = 'Specify the arguments:\n\tcolor : without "\\u001b[" and "m",\n\tname : without ">>>",\n\ttext : without "."';
		if(!color) { this.error = err; };
		if(!name) { this.error = err; };
		if(!text) { this.error = err; };
		if(this.error) {
			color = '38;5;196';
			name = 'error';
			text = this.error;
		};
		const begin = '\u001b[' + color + 'm',
			end = '\u001b[39m';
		this.output = '\n' + begin + '\u001b[1m' + name.toUpperCase() + '\u001b[22m' + end + ' >>> ' + begin + text + end + '.';
	}
	log() {
		console.log(this.output);
	};
};
//You can add your own 'logs';
class log {
	constructor(text) {
		this.text = text;
		};
	app() {
		new gen('38;5;51', 'app', this.text).log();
	};
	warn() {
		new gen('38;5;226', 'warn', this.text).log();
	};
	error() {
		new gen('38;5;196', 'error', this.text).log();
	};
	progress() {
		new gen('38;5;46', 'progress', this.text).log();
	};
};
module.exports = {
	log : log,
	logGenerator : gen
};
