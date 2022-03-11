// Modules imported
import events from './config.mjs'
import EventEmitter from 'events';

// Initialized Emitter in a new variable.
var emtr = new EventEmitter();

// Testing Emitter functions / ON functions allows to add properties to that variable initialized
emtr.on(events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

// Testing Emitter functions / ON functions allows to add properties to that variable initialized
emtr.on(events.GREET, () => {
    console.log('A greeting ocurred');
});

// Testing Emitter functions / EMIT functions allows to show properties to that variable initialized
console.log('Hello');
emtr.emit('greet');

// Testing Emitter functions / ON functions allows to add properties to that variable initialized
emtr.on(events.JUMP, () => {
    console.log('Someone jumped!');
});

// Testing Emitter functions / EMIT functions allows to show properties to that variable initialized
console.log(emtr);
emtr.emit('jump');