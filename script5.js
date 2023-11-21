//74
{
    let A = {
        abc: [{ id: 1, abc: 1, xyz: 2 },
        { id: 2, abc: 2, xyz: 3 }]
    }

    A.abc.push({ id: 4, abc: 5, xyz: 7, value: 4 })
    console.log('80-', A)
}

//75
{
    let B = {
        abc: [{ id: 1, abc: 1, xyz: 2 },
        { id: 2, abc: 2, xyz: 3 }]
    }
    B.abc.pop()
    console.log('81-', B)
}

//76
{
    let C = {
        abc: [{ id: 1, abc: 1, xyz: 2 },
        { id: 2, abc: 2, xyz: 3 }]
    }
    C.abc.pop()
    console.log('82-', C)
}

//77
{
    let D = {
        abc: [{ id: 1, abc: 1, xyz: 2 },
        { id: 2, abc: 2, xyz: 3 }]
    }
    // D.abc.push({ xyz: 'abc' })
    D.xyz = [{ id: 1, abc: 1, xyz: 2 },
    { id: 2, abc: 2, xyz: 3 }]
    console.log('83-', D)
}

//78
{
    let A = {
        abc: [{ id: 1, name: 'Rohit', age: 26 },
        { id: 2, name: 'rituraj', age: 25 },
        { id: 3, name: 'gaurav', age: 18 }]
    }
    console.log('84-', A)
}

//79
{
    let B = {
        abc: [{ id: 1, name: 'Rohit', age: 26 },
        { id: 2, name: 'rituraj', age: 25 },
        { id: 3, name: 'gaurav', age: 18 }]
    }
    B.abc.push(Object.assign({}, { id: 4, name: 'abc', age: 25 }))
    console.log('85-', B)
    console.log('86-', B.abc[1])
    console.log('87-', B.abc[2].name)

    let main = B.abc
    for (let i in main) {
        // console.log(main[i].age)
        if (main[i].age >= 20) {
            console.log('88-', main[i].name)
        }
    }

    for (let j in main) {
        if (main[j].id == 3) {
            console.log('89-', main[j].name)
        }
    }
}

//80
{
    let A = {
        abc: [{ id: 1, name: 'Rohit', age: 26 },
        { id: 2, name: 'rituraj', age: 25 },
        { id: 3, name: 'gaurav', age: 18 }]
    }
    let main = A.abc
    for (let i in main) {
        if (main[i].name === 'gaurav') {
            main[i].age = 30
            // console.log('90-', A)
        }
    }
    console.log('90-', A)
}

//81
{
    let B = {
        abc: [{ id: 1, name: 'Rohit', age: 26 },
        { id: 2, name: 'rituraj', age: 25 },
        { id: 3, name: 'gaurav', age: 18 }]
    }
    let main2 = B.abc
    for (let j in main2) {
        if (main2[j].id == 1) {
            main2[j].name = 'Rituraj Mandloi'
        }
    }
    console.log('91-', B)
}

//82
{
    let C = {
        abc: [{ id: 1, name: 'Rohit', age: 26 },
        { id: 2, name: 'rituraj', age: 25 },
        { id: 3, name: 'gaurav', age: 18 }]
    }
    C.abc.unshift({ id: 4, abc: 5, xyz: 7, value: 4 })
    console.log('92-', C)
}

//83
{
    let A = {
        abc: [{ id: 1, name: 'Rohit', age: 26 },
        { id: 2, name: 'rituraj', age: 25 },
        { id: 3, name: 'gaurav', age: 18 }]
    }
    let main = A.abc
    for (let i in main) {
        delete main[i].age
    }
    console.log('93-', A)

    let item = { id: 4, name: 'Jai' }
    let random = Math.floor(Math.random() * main.length + 1)
    main.splice(random, 0, item)
    console.log('94-', A)

    main.map(main => {
        console.log('95-', main.name)
    })

    // main = A.abc[1]
    // console.log(main)
    // main.map(main => {
    //     // if (main.id === 2) {
    //         console.log('96-', main)
    //     // }

    // })
    // for (let i = 0; i < A.abc.length - 1; i++) {
    //     console.log(A.abc)
    // }
    Object.keys(main).map((value, index) => {
        console.log('96-', main[value], 'Remain')
    })
    // console.log(main)
}