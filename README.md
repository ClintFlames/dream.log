# dream.log for cool log design.
dream.log will present you with two classes: log and logGenerator.

log has several ready-made templates for logGenerator but you will be able to add your own templates.

```javascript
//Declare a variable.
const DL = require('dream.log');

//Let's try to use the log class
//Declare a log class with text without ".".
const log = new DL.log('Wow, this is amazing text');
//Use log class.
log.progress();
log.app();
log.warn();
log.error();

//Let's make a new template right now.
const orange = (argument) => {
	new DL.logGenerator('38;5;214', 'HAPPY', argument).log();
};
//Let's take a look at this.
orange('Wow this is my own template');
```
![http://oldsss.7m.pl/dream.log.png](http://oldsss.7m.pl/dream.log.png)

[Discord.](https://discord.gg/d4rKqZs)
