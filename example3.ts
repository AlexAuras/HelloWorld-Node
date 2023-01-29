import EventEmitter from 'events'

// Shows the usage of events

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('started');
});

eventEmitter.emit('start');
