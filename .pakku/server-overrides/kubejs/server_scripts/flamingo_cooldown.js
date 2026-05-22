// kubejs/server_scripts/flamingo_cooldown.js

ItemEvents.rightClicked('artifacts:helium_flamingo', event => {
  const player = event.player

  // 5 second cooldown
  player.addItemCooldown(event.item, 160)
})
