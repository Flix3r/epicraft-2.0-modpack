ServerEvents.tags('entity_type', event => {
  event.add('irons_spellbooks:cant_root', [
    'darkdoppelganger:dark_doppelganger',
    'minecraft:warden',
    /cataclysm:.*/,
    /iceandfire:.*/,
  ])
})