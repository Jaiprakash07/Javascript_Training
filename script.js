//1
{
    let D = 'Hello World'

    console.log('1-', D)

    // for (let i = D.length-1; i>=0; i--) {
    //     console.log(D[i])
    // }
    console.log('2-', D.split(' ').reverse().join(' '))
}

//2
{
    let D = 'H W H W H';
    let i, J = [];
    for (i = 0; i <= D.length - 1; i++) {
        if (D[i] == 'H')
            J.push(D[i])
    }
    console.log(`3- count of ${J[0]}: ${J.length}`)
}

//3
{
    let D = 'abc xyz'
    console.log('4-', D.length)
}

//4
{
    let E = "abcd xyz abc";
    console.log('5-', [E.split(' ')])
}

//5
{
    let F = 'abcd xyz'

    let re = F.split(' '), arr = []

    for (let i = 0; i < re.length; i++) {
        for (let j = 0; j < re[i].length - 1; j++) {
            arr.push(re[i])
        }
    }
    console.log('6-', arr)
}

//6
{
    let i, j, k = '';
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            k += i;
        }
    }
    console.log('7-', k)
}

//7
{
    let D = '1,2,3,4'
    let R = []
    let result = D.split(',').reverse()
    result.map(result => {
        R.push(parseInt(result))
    })
    console.log('8-', R)
}

//8
{
    function Data(Num) {
        if (Num == 2) {
            console.log('9-', Num * 8)
        }
        else if (Num == 4) {
            console.log('9-', Data * 4)
        }
        else {
            console.log('9- Pass only a number 2 or 4')
        }
    }
    Data(2)
}

//9
{
    let Y = [], i
    for (i = 1; i <= 10; i++) {
        // console.log('10-', i)
        Y.push(i)
    }
    console.log(`10- ${Y}`)
}

//10
{
    let Z = [], j
    for (j = 1; j <= 5; j++) {
        // console.log(`11- ${j * j}`)
        Z.push(j * j)
    }
    console.log(`11- ${Z}`)
}

//11
{
    let M = [], k
    for (k = 10; k >= 1; k--) {
        // console.log(`12- ${k}`)
        M.push(k)
    }
    console.log(`12- ${M}`)
}

//12
{
    let i, j = []
    for (i = 10; i >= 1; i--) {
        j.push(i, 11 - i)
    }
    console.log('13-', j.join(' '))
}

//13
{
    let a = 111, c = []
    for (let i = 1; i <= 5; i++) {
        c.push(a, a + a)
    }
    console.log(`14- ${c.join(' ')}`)
}

//14
{
    let D = [123, 456, 789]
    console.log(`15- Index of 789 is ${D.indexOf(789)}`)
}

//15
{
    let E = []
    console.log(`16- Index of 1 is ${E[1]}`)
}

//16
{
    let F = ['a', 'b', 'c', 'd']
    console.log(`17- ${F.join('')}`)
}

//17
{
    let G = ['hello, softops']
    let GG = G.join().replace(',', ' world')
    console.log(`18- ${GG}`)
}

//18
{
    let result = [], H = [1, 2, 7, 6]
    H.map((res, index) => {
        result.push(res ** (index + 1))
    })
    console.log('19-', result)
}