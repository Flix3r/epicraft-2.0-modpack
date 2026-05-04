// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!

    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    // ENDERIUM

    event.shaped(
        Item.of('immersiveores:enderium_chestplate', 1),
        [
            'ABA',
            'AAA',
            'AAA'
        ],
        {
            A: 'immersiveores:enderium_ingot',
            B: 'minecraft:netherite_chestplate',
        }
    )

    event.shaped(
        Item.of('immersiveores:enderium_boots', 1),
        [
            '   ',
            'ABA',
            'A A'
        ],
        {
            A: 'immersiveores:enderium_ingot',
            B: 'minecraft:netherite_boots',
        }
    )

    event.shaped(
        Item.of('immersiveores:enderium_leggings', 1),
        [
            'AAA',
            'ABA',
            'A A'
        ],
        {
            A: 'immersiveores:enderium_ingot',
            B: 'minecraft:netherite_leggings',
        }
    )

    event.shaped(
        Item.of('immersiveores:enderium_helmet', 1),
        [
            'AAA',
            'ABA',
            '   '
        ],
        {
            A: 'immersiveores:enderium_ingot',
            B: 'minecraft:netherite_helmet',
        }
    )


    // VULPUS

    event.shaped(
        Item.of('immersiveores:vulpus_chestplate', 1),
        [
            'ABA',
            'AAA',
            'AAA'
        ],
        {
            A: 'immersiveores:vulpus_ingot',
            B: 'minecraft:netherite_chestplate',
        }
    )

    event.shaped(
        Item.of('immersiveores:vulpus_boots', 1),
        [
            '   ',
            'ABA',
            'A A'
        ],
        {
            A: 'immersiveores:vulpus_ingot',
            B: 'minecraft:netherite_boots',
        }
    )

    event.shaped(
        Item.of('immersiveores:vulpus_leggings', 1),
        [
            'AAA',
            'ABA',
            'A A'
        ],
        {
            A: 'immersiveores:vulpus_ingot',
            B: 'minecraft:netherite_leggings',
        }
    )

    event.shaped(
        Item.of('immersiveores:vulpus_helmet', 1),
        [
            'AAA',
            'ABA',
            '   '
        ],
        {
            A: 'immersiveores:vulpus_ingot',
            B: 'minecraft:netherite_helmet',
        }
    )

    event.remove({ input: 'immersiveores:vulpus_helmet' })
    event.remove({ input: 'immersiveores:vulpus_chestplate' })
    event.remove({ input: 'immersiveores:vulpus_leggings' })
    event.remove({ input: 'immersiveores:vulpus_boots' })

    event.remove({ input: 'immersiveores:vibranium_helmet' })
    event.remove({ input: 'immersiveores:vibranium_chestplate' })
    event.remove({ input: 'immersiveores:vibranium_leggings' })
    event.remove({ input: 'immersiveores:vibranium_boots' })


})