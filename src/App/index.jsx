import React, { useState, useEffect } from 'react'
import Algo from './algo'
import Result from './result'
import { Box } from './styled'
import UserModal from './userModal'

const App = () => {
    let initial = [[null, null, null], [null, null, null], [null, null, null]]
    const [user, setUser] = useState({ 'p1': 'player 1', 'p2': 'player 2' })
    const [val, setVal] = useState(true)
    const [win, setWin] = useState("")
    const [mat, setMat] = useState(initial)
    const [modalShow, setModalShow] = useState(false)
    const [userModalShow, setUserModalShow] = useState(true)

    useEffect(() => {
        async function algocall() {
            let res = await Algo(mat)
            if (res.res === "p1") {
                setWin("p1")
                setModalShow(true)
                console.log("result:", mat)
            }
            if (res.res === "p2") {
                setWin("p2")
                setModalShow(true)
            }
        }
        algocall()
    }, [mat])

    function XO(e, i, j) {
        e.target.setAttribute("style", "pointer-events: none;");
        if (val === true)
            e.target.innerHTML = "<p>X</p>"
        else
            e.target.innerHTML = "<p>O</p>"
        let newMat = [...mat]
        newMat[i][j] = val
        setMat(newMat)
        setVal(!val)
    }

    return (
        <>
            <UserModal setShow={setUserModalShow} show={userModalShow} user={user} setUser={setUser} />
            <h1 className="text-center mt-5">Tic Tak Toe</h1>
            <div className="container justify-content-center mt-5 d-grid">
                <div className="row mt-5">
                    <Box className="col" pos="top" side="left" onClick={e => XO(e, 0, 0)}></Box>
                    <Box className="col" pos="top" onClick={e => XO(e, 0, 1)}></Box>
                    <Box className="col" pos="top" side="right" onClick={e => XO(e, 0, 2)}></Box>
                </div>
                <div className="row">
                    <Box className="col" side="left" onClick={e => XO(e, 1, 0)}></Box>
                    <Box className="col" onClick={e => XO(e, 1, 1)}></Box>
                    <Box className="col" side="right" onClick={e => XO(e, 1, 2)}></Box>
                </div>
                <div className="row">
                    <Box className="col" side="left" pos="bottom" onClick={e => XO(e, 2, 0)}></Box>
                    <Box className="col" pos="bottom" onClick={e => XO(e, 2, 1)}></Box>
                    <Box className="col" side="right" pos="bottom" onClick={e => XO(e, 2, 2)}></Box>
                </div>
            </div>
            <div className="container text-center border border-2 mt-5">
                {
                    val ? <h4 className="text-success">{user.p1} Turn</h4> : <h4 className="text-danger">{user.p2} Turn</h4>
                }
            </div>
            <Result show={modalShow} user={user} win={win} handleClose={() => setModalShow(false)} />
        </>
    )
}

export default App;