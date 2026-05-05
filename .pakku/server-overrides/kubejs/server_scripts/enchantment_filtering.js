MoreJS.enchantmentTableChanged(event => {
    const data = event.get(2)

    const blocked = [
        "enchantencore:phantom_menace",
        "enchantencore:moonwalk",
        "enchantencore:safe_landing",
        "nova_structures:wax_wings"
    ]

    data.removeEnchantments((enchantment, level) => {
        const id = enchantment.getKey().location()
        return blocked.includes(id)
    })

    data.randomClue()
})