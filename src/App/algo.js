const Algo = (a) => {
    let data = { res: "no winner" }
    a.forEach(e => {
        if (e[0] && e[1] && e[2]) {
            data['res'] = "p1"
            return data
        }
        if (e[0] === false && e[1] === false && e[2] === false) {
            data['res'] = "p2"
            return data
        }
    });
    let cnt = 0
    for (let i = 0; i < 3; i++) {
        if (a[cnt][i] && a[cnt + 1][i] && a[cnt + 2][i]) {
            data['res'] = "p1"
            return data
        }
        if (a[cnt][i] === false && a[cnt + 1][i] === false && a[cnt + 2][i] === false) {
            data['res'] = "p2"
            return data
        }
    }
    if (a[0][0] && a[1][1] && a[2][2]) {
        data['res'] = "p1"
        return data
    }

    if (a[0][0] === false && a[1][1] === false && a[2][2] === false) {
        data['res'] = "p2"
        return data
    }

    if (a[2][0] && a[1][1] && a[0][2]) {
        data['res'] = "p1"
        return data
    }

    if (a[2][0] === false && a[1][1] === false && a[0][2] === false) {
        data['res'] = "p2"
        return data
    }
    return data
}

export default Algo;