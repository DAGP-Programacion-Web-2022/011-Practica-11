// Initialized Emitter function.
function Emitter() {
    this.events = {};
}

// Emitter prototype established with "on" function.
// This allows to add more than one property when used.
Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

// Emitter prototype established with "on" function.
// This allows to evoke / return more than one property previously added.
Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
}

// Expor module in new JS syntax
export default Emitter;