const FLAMINGO = 'artifacts:helium_flamingo'
const CurioChangeEvent = Java.loadClass('top.theillusivec4.curios.api.event.CurioChangeEvent')

NativeEvents.onEvent(CurioChangeEvent, event => {
  if (event.to.is(FLAMINGO)) event.entity.addItemCooldown(FLAMINGO, 140) // 7s
})

const flamingoDisabled = {}

PlayerEvents.tick(event => {
  const { server, player } = event
  if (flamingoDisabled[player.uuid]) player.addItemCooldown(FLAMINGO, 50)

  if (server.tickCount % 100 !== 0) return
  if (Math.max(Math.abs(player.x), Math.abs(player.z)) < 1536) 
    flamingoDisabled[player.uuid] = false
  else flamingoDisabled[player.uuid] = true
})