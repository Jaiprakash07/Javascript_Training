//40
{
    let A = 'SOFTOPS', X = '';
    for (let i = 0; i <= A.length - 1; i++) {
        for (let j = 0; j <= i; j++) {
            X += `${A[i]}`
        }
    }
    console.log(`45- ${X}`)
}

//41
{
    let B = 'ABC', C = ['D', 'E', 'F']
    let res = C.join('')
    console.log('46-', B.concat(res))
}

//42
{
    let D = 'JAVA', E = 'SCRIPT'
    D = D.padStart(11, `${E + ' '}`)
    console.log(`47- ${D} ${E}`)
}

//43
{
    let A = 'MAN', B = '';
    for (let i = A.length - 1; i >= 0; i--) {
        B += A[i]
    }
    console.log('48-', B)
}

//44
{
    function Both(value) {
        let A = '', B = '';
        for (let i = 0; i < value.length; i++) {
            A += value[i]
            // console.log(A)
        }

        for (let j = value.length - 1; j >= 0; j--) {
            B += value[j]
            // console.log(B)
        }

        if (A == B) {
            console.log('49-', true)
        }
        else {
            console.log('49-', false)
        }
    }
    Both('mom')
}

//45
{
    let D = '';
    for (let i = 0; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            D += i;
        }
    }
    console.log('50-', D.padStart(16, 0))
}

//46
{
    let A = {
        abc: 'abc'
    }
    console.log(`51- Value of abc Key is ${A.abc}`)
}

//47
{
    let B = {
        abc: 1
    }
    console.log(`52- Value of abc Key is ${B.abc}`)
}

//48
{
    let C = {
        abc: 'abcd'
    }
    console.log(`53- Value of abc Key is ${C.abc}`)
}

//49
{
    let D = {
        abc: 'abc',
        xyz: 'abc'
    }
    console.log(`54- Value of abc Key is ${D.abc} and Value of xyz Key is ${D.xyz}`)
}

//50
{
    let E = {
        abc: 'xyz',
        xyz: 'xyz'
    }
    E.abc = 'xyzabc'
    delete E.xyz
    console.log('55-', E)
}

//51
{
    let A = {
        a: 1,
        b: 2,
        c: 3
    }
    for (let i in A) {
        A[i] = A[i] * A[i]
    }
    console.log('56-', A)
}

//52
{
    let B = {
        a: 1,
        b: 2,
        c: 3
    }
    let C = [], D = []
    for (let key in B) {
        C.push(key)
        D.push(B[key])
    }
    console.log('57', C)
    console.log('58', D)
}

//53
{
    let A = {
        a: 2,
        b: 3,
        c: 4
    }
    console.log('59- Value of c key is', A.c)
}

//54
{
    let B = {
        a: 4,
        b: 2,
        c: 3
    }
    let C;
    for (let key in B) {
        if (key == 'a') {
            C = B[key]
            // console.log(4,C)
        }
        else if (key == 'b') {
            C = C * B[key]
            // console.log(2,C)
        }
        else {
            C = C * B[key]
            // console.log(3,C)
        }
    }
    console.log('60-', B.a * B.b * B.c, ',', C)
}