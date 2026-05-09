const HAVEN_LIMIT = 1392   // Safe zone
const WILD_LIMIT = 1536    // Wild zone
const CHECK_INTERVAL = 100 // 5 seconds

let playerZones = {}

function getZone(x, z) {
    const maxCoord = Math.max(Math.abs(Math.floor(x)), Math.abs(Math.floor(z)))

    if (maxCoord < HAVEN_LIMIT) return "build"
    if (maxCoord < WILD_LIMIT) return "transition"
    return "wilderness"
}

PlayerEvents.tick(event => {
    const { server, player } = event

    if (server.tickCount % CHECK_INTERVAL !== 0) return
	if (player.level.dimension != 'minecraft:overworld') return
    
    const zone = getZone(player.x, player.z)

    if (!playerZones[player.uuid]) {
        playerZones[player.uuid] = zone
        return
    }

    if (playerZones[player.uuid] !== zone) {

        let titleData = {}

        if (zone === "build") {
            titleData = { text: "The Haven", color: "green" }
        }
        else if (zone === "transition") {
            titleData = { text: "The Divide", color: "gold" }
        }
        else {
            titleData = { text: "The Wild", color: "dark_red" }
        }

        player.server.runCommandSilent(
            `title ${player.username} title ${JSON.stringify(titleData)}`
        )

        playerZones[player.uuid] = zone
    }
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;

    event.register(
        Commands.literal("zone")
            .executes(ctx => {
                const player = ctx.source.player
                if (player.level.dimension != 'minecraft:overworld') return 1;

                const zone = getZone(player.x, player.z)

                let titleData = {}

                if (zone === "build") {
                    titleData = { text: "The Haven", color: "green" }
                }
                else if (zone === "transition") {
                    titleData = { text: "The Divide", color: "gold" }
                }
                else {
                    titleData = { text: "The Wild", color: "dark_red" }
                }

                player.server.runCommandSilent(
                    `title ${player.username} title ${JSON.stringify(titleData)}`
                )

                return 1
            })
    )
})

