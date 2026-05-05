ServerEvents.loaded(event => {
    const server = event.server

    server.scheduleInTicks(400, () => {
        server.runCommandSilent('function xaero:autorun/set/silent/fairxaero')
    })

    server.scheduleInTicks(600, () => {
        server.runCommandSilent('function xaero:silent/fairxaero')
    })

    server.scheduleInTicks(440, () => {
        server.runCommandSilent('function xaero:autorun/set/silent/xaerowmnetherisfair')
    })

    server.scheduleInTicks(640, () => {
        server.runCommandSilent('function xaero:silent/xaerowmnetherisfair')
    })
})