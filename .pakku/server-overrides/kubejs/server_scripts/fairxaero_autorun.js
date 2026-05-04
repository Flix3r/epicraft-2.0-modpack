ServerEvents.loaded(event => {
    const server = event.server

    server.scheduleInTicks(400, () => {
        server.runCommand('function xaero:autorun/set/silent/fairxaero')
    })

    server.scheduleInTicks(600, () => {
        server.runCommand('function xaero:silent/fairxaero')
    })
})