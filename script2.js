//19
{
    let A = [], B = [], D = [1, 'a', 3, 'b']
    D.map(D => {
        if (D === Number(D)) {
            A.push(D)
        }
        else {
            B.push(D)
        }
    })
    console.log('20-', A, B)
}

//20
{
    let D = [1, 2, 3, 4, 5]
    console.log('21-', D.reverse())

    let res = D.reverse()
    let value = 0;
    for (let i of res) {
        value += i
    }
    console.log(`22- Sum of number is ${value}`)
}

//21
{
    let A = [], D = [2, 2, 2, 1, 1, 1]
    D.map(D => {
        if (D == 2) {
            A.push(D)
        }
    })
    console.log('23- Count of 2 is', A.length, 'times')
}

//22
{
    let A = [0, 1, 0, 1, 0, 1]
    console.log('24-', A.sort(function (a, b) { return b - a }))
}

//23
{
    let B = [1, 2, 3, 4, 5], C = [6, 7, 8, 9]
    console.log('25-', B.concat(C).reverse())
}

//24
{
    let D = [1, 2, 3, 4, 5], E = [6, 7, 8]
    console.log('26-', D.concat(E))

    let F = [3, 9, 6, 10]
    console.log('27-', F.reverse())

    let G = [2, 1, 2, 1, 1, 2]
    console.log('28-', G.sort())

    let res = D.map(D => {
        return D + 2;
    })
    console.log('29-', res)
}

//25
{
    let H = [9, 4, 27, 6, 3]
    H.splice(2, 1, 0)
    console.log('30-', H)
}

//26
{
    let A = [10, 20, 30, 40, 50]
    let res = [A[1], A[0], A[2], A[4], A[3]]
    console.log('31-', res)
}

//27
{
    let B = [4, 3, 2, 1, 0]
    B.splice(3, 1, 4)
    console.log('32-', B)
}

//28
{
    let C = [6, 6, 6, 6], D = [7, 8, 9, 10], E = [6, 7, 8, 10]
    let result = C.concat(D)
    console.log('33-', result.concat(E))
}

//29
{
    let i = ['a'], j = ['b'], k = ['c']
    let r = i.concat(j).concat(k)
    console.log('34-', r.join(''))
}

//30
{
    let F = [2, 3, 4, 5]
    F.splice(1, 1, 6)
    console.log('35-', F)
}

//31
{
    let A = [4, 5, 6, 7], B = []
    for (let i = 0; i < A.length - 1; i += 2) {
        B.push('' + A[i] + A[i + 1])
    }
    console.log('36-', B)
}

//32
{
    let C = [4, 5, 6, 7, 8, 9], D = []
    for (let i = 0; i < C.length - 1; i += 2) {
        D.push('' + C[i] + C[i + 1])
    }
    console.log('37-', D)
}

//33
{
    let E = [7, 8, 9, 10, 11, 12]
    let F = E.pop()
    E.unshift(F)
    console.log('38-', E)
}

//34
{ 
    let G = []
    let H = -2
    for (let i = 3; i >= H; i--) {
        G.push(i)
    }
    console.log('39-', G)
}

//35
{
    let A = [1, 2, 3]
    for (let i = 0; i < 3; i++) {
        A.push(A[A.length - 1] + 1)
        console.log('40-', A)
    }
}

//36
{
    let B = ['abc', 'xyz', 'pqr']
    B.splice(1, 2, 'pqr', 'xyz')
    console.log('41-', B)
}

//37
{
    let C = [3, 2, 1, 0], D = [], E = []
    for (let i = 0; i < C.length; i++) {
        if (C[i] % 2 == 0) {
            D.push(C[i])
            // console.log(null)
        }
        else if (C[i] % 2 != 0) {
            E.push(C[i])
            // console.log(D)
        }
    }
    console.log('42-', D.reverse().concat(E.reverse()))
}

//38
{
    let A = ['I', 'Am', 'Dev']
    A.fill('Developer', 2, 3)
    console.log('43-', A)
}

//39
{
    let B = 'A B C D', C = []
    let res = B.split(' ')
    for (let i = 0; i < res.length-1; i+=2) {
        let pair = res[i] + (res[i+1] || '')
        C.push(pair)
    }
    console.log('44-',C)
}