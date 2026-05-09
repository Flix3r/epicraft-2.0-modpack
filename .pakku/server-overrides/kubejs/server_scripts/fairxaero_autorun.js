ServerEvents.loaded(event => {
    const server = event.server

    server.scheduleInTicks(600, () => {
        server.runCommandSilent('function xaero:autorun/set/silent/fairxaero')
    })
    
    server.scheduleInTicks(800, () => {
        server.runCommandSilent('function xaero:autorun/set/silent/xaerowmnetherisfair')
    })

    server.scheduleInTicks(900, () => {
        server.runCommandSilent('function xaero:silent/fairxaero')
    })

    server.scheduleInTicks(1000, () => {
        server.runCommandSilent('function xaero:silent/xaerowmnetherisfair')
    })
})