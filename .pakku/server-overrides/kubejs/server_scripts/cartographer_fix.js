MoreJS.villagerTrades((event) => {
    // Remove trades from level 3 cartographer to prevent crashes
    event.removeVanillaTypedTrades("minecraft:cartographer", 3)
})