const EventEmitter = require("events")

const emitter = new EventEmitter()

emitter.on(
    "why", () => {
        console.log("监听事件")
    }
)
setTimeout(() => {
    emitter.emit("why")
}, 1000)
