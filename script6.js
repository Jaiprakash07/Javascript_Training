//84
{
    let A = {
        abc: [{ id: 1, name: 'Rohit', age: 26 },
        { id: 2, name: 'rituraj', age: 25 },
        { id: 3, name: 'gaurav', age: 18 }]
    }
    let Main = A.abc
    A.Arr = []

    Main.map(main => {
        A.Arr.push(main)
        // console.log(A, Arr)
    })
    // console.log('97-',A)
    console.log('97-', A)
}

//85
{
    let A = {
        abc: [
            { id: 1, name: 'Santa', age: 26 },
            { id: 2, name: 'banta', age: 25 },
            { id: 3, name: 'bhad me jaye janta', age: 18 }
        ],
        xyz: [
            { id: 4, name: 'Hum', age: 26 },
            { id: 5, name: 'tum', age: 25 }
        ]
    }

    let Main = A.abc
    let reMain = Main
    let Main2 = A.xyz

    reMain.map(remain => {
        // Main2.push(main)
        Main2.unshift(remain)
    })

    Main2.map(main2 => {
        // reMain.unshift(main2)
        reMain.push(main2)
    })

    Main = reMain.splice(3, 3)
    console.log('98-', 'Remain')
    console.log('99-', A)
}

//86
{
    let A = {
        abc: [
            { id: 1, name: 'Santa', age: 26 },
            { id: 2, name: 'banta', age: 25 },
            { id: 3, name: 'bhad me jaye janta', age: 18 }
        ],
        xyz: [
            { id: 4, name: 'Hum', age: 26 },
            { id: 5, name: 'tum', age: 25 }
        ]
    }
    A.xyz.pop()
    console.log('100-', A)
}

//87
{
    let A = {
        abc: [
            { id: 1, name: 'Santa', age: 26 },
            { id: 2, name: 'banta', age: 25 },
            { id: 3, name: 'bhad me jaye janta', age: 18 }
        ],
        xyz: [
            { id: 4, name: 'Hum', age: 26 },
            { id: 5, name: 'tum', age: 25 }
        ]
    }

    // for (let i in A) {
    //     for (let j in A.abc) {
    //         if (A.abc[j].name === 'Hum') {
    //             delete A.abc[j]
    //             // A.abc[j].pop()
    //             // A.abc.splice(A.abc[j]-1,1)
    //         }
    //     }
    //     for (let k in A.xyz) {
    //         if (A.xyz[k].name === 'Hum') {
    //             delete A.xyz[k]
    //             // A.xyz.splice(A.xyz[k]-1,1)
    //             // A.xyz.length -1
    //             // console.log(A.xyz.length)
    //         }
    //     }
    // }

    for (let key in A) {
        if (A.hasOwnProperty(key)) {
            A[key] = A[key].filter(item => item.name !== 'Hum')
        }
    }
    console.log('101-', A)
}

//88
{
    let A = {
        abc: [
            { id: 1, name: 'Santa', age: 26 },
            { id: 2, name: 'banta', age: 25 },
            { id: 3, name: 'bhad me jaye janta', age: 18 }
        ],
        xyz: [
            { id: 4, name: 'Hum', age: 26 },
            { id: 5, name: 'tum', age: 25 }
        ]
    }

    for (let key in A) {
        // console.log(A[key])
        if (A.hasOwnProperty(key)) {
            A[key] = A[key].filter(item => item.id !== 2)
            // console.log(A[key])
        }
    }
    console.log('102-', A)
}

//89
{
    let A = {
        abc: [
            { id: 1, name: 'Santa', age: 26 },
            { id: 2, name: 'banta', age: 25 },
            { id: 3, name: 'bhad me jaye janta', age: 18 }
        ],
        xyz: [
            { id: 4, name: 'Hum', age: 26 },
            { id: 5, name: 'tum', age: 25 }
        ]
    }

    for (let key in A) {
        if (A.hasOwnProperty(key)) {
            A[key] = A[key].filter(item => item.id <= 2)
        }
    }
    console.log('103-', A)
}

//90
{
    let A = {
        abc: [
            { id: 1, name: 'Santa', age: 26 },
            { id: 2, name: 'banta', age: 25 },
            { id: 3, name: 'bhad me jaye janta', age: 18 }
        ],
        xyz: [
            { id: 4, name: 'Hum', age: 26 },
            { id: 5, name: 'tum', age: 25 }
        ]
    }

    for (let key in A) {
        // console.log(A)
        if (A.hasOwnProperty(key)) {
            // console.log(A)
            A[key].map((item) => {
                if (item.id == 3) {
                    item.name = 'pqr'
                    // console.log(item)
                }
            })
        }
    }
    console.log('104-', A)
}

//91
{
    let A = {
        abc: [
            { id: 1, name: 'Santa', age: 26 },
            { id: 2, name: 'banta', age: 25 },
            { id: 3, name: 'bhad me jaye janta', age: 18 }
        ],
        xyz: [
            { id: 4, name: 'Hum', age: 26 },
            { id: 5, name: 'tum', age: 25 }
        ]
    }

    for (let key in A) {
        if (A.hasOwnProperty(key)) {
            A[key].map((item) => {
                if (item.id >= 3) {
                    item.name = 'pqr'
                    // console.log(item)
                }
            })
        }
    }
    console.log('105-', A)
}

//92
{
    let A = {
        abc: [
            { id: 1, name: 'Santa', age: 26 },
            { id: 2, name: 'banta', age: 25 },
            { id: 3, name: 'bhad me jaye janta', age: 18 }
        ],
        xyz: [
            { id: 4, name: 'Hum', age: 26 },
            { id: 5, name: 'tum', age: 25 }
        ]
    }

    for (let key in A) {
        if (A.hasOwnProperty(key)) {
            if (key == 'xyz') {
                A[key].push({ id: 6, name: 'Upr Ja', age: 2 })
                // console.log((key),A[key])
            }
        }
    }
    console.log('106-', A)
}