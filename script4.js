//55
{
    let A = { a: 1 }
    let B = { p: 2 }

    console.log('61-', Object.assign(A, B))
    // console.log('61-',Object.assign([], A, B))
    // console.log('61-', {...A ,...B})
}

//56
{
    let C = {
        a: 1,
        b: 2
    }
    let { a, b } = C;
    console.log('62-', { a }, { b })
}

//57
{
    let D = {
        a: 1,
        c: 3
    }
    for (let i in D) {
        D[i] = D[i] * 3
    }
    console.log('63-', D)
}

//58
{
    let A = {
        a: 1,
        c: 3
    }
    delete A.a
    console.log('64-', A)
}

//59
{
    let B = {
        a: 1,
    }
    B.a = '1 abc'
    console.log('65-', B)
}

//60
{
    let C = { a: [1, 2, 3] }
    C.a[1] = 'a'
    console.log('66-', C)
}

//61
{
    let D = { a: [1, 2, 3], b: [3, 4, 5] }
    D.a[2] = 'a'
    D.b[2] = 'b'
    console.log('67-', D)
}

//62
{
    let C = { a: [1, 1, 1], b: [2, 2, 2] }
    C = Object.assign(C, { c: [3, 3, 3] }, { d: [4, 4, 4] }, { e: [5, 5, 5] })
    console.log('68-', C)
}

//63
{
    let D = {
        a: 'abc',
        b: [1, 1, 1]
    }
    D.b.push(D.a)
    delete D.a
    console.log('69-', D)
}

//64
{
    let E = {
        a: [1, 2, 3],
        b: [3, 4, 5]
    }
    console.log('70- Index of 5 is', E.b.indexOf(5))
}

//65
{
    let A = { b: [3, 4, 5] }
    let main = A.b
    let total = 1
    main.map((res) => {
        total *= res;
    })
    main.unshift(total)
    main.splice(1, main.length)
    console.log('71-', A)
}

//66
{
    let B = {
        a: 2,
        b: [3, 4, 5]
    }
    console.log('72- Index of 4 in b is', B.b.indexOf(4))
}

//67
{
    let C = {
        soft: 'top'
    }
    let string = '';
    for (let i in C) {
        string += i + C[i]
    }
    string = string.replace('t', 't-')
    console.log('73-', string)
}

//68
{
    let A = {
        a: [1, 2, 3],
        b: [3, 4, 5],
        c: [8, 9, 10]
    }
    let main = A.a
    let main3 = A.c
    let main2 = main3
    main.unshift(...main2)
    main2.unshift(...main)
    main.splice(3, main.length - 1)
    main2.splice(0, 3)
    main3 = main2.splice(3, 3)
    console.log('74-', A)
}

//69
{
    let B = {
        a: [1, 2, 3, 4, 5]
    }
    B.a = Object.assign({}, B.a.toString().split(' , '))
    console.log('75-', B)
}

//70
{
    let C = {
        abc: [{ id: 1, abc: 1, xyz: 2 },
        { id: 2, abc: 2, xyz: 3 }]
    }
    C.abc[0].xyz = 3
    console.log('76-', C)
}

//71
{
    let D = {
        abc: [{ id: 1, abc: 1, xyz: 2 },
        { id: 2, abc: 2, xyz: 3 }]
    }
    D.abc[1].abc = 3
    console.log('77-', D)
}

//72
{
    let E = {
        abc: [{ id: 1, abc: 1, xyz: 2 },
        { id: 2, abc: 2, xyz: 3 }]
    }
    E.abc[1].abc = 'ABC'
    console.log('78-', E)
}

//73
{
    let F = {
        abc: [{ id: 1, abc: 1, xyz: 2 },
        { id: 2, abc: 2, xyz: 3 }]
    }

    F.abc.push({ id: 3, abc: 5, xyz: 7 })
    console.log('79-', F)
}