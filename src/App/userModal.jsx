import { Modal, Button, Form } from 'react-bootstrap'
const UserModal = ({ show, setShow, user, setUser }) => {
    function handleSubmit() {
        setShow(false)
    }
    function handleChange(e, player) {
        setUser(prevState => ({
            ...prevState,
            [player]: e.target.value
        }));
    }
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className="text-primary">
                    Welcome to Tic Tac Toe !!!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >

                <h6 className="text-secondary">Enter player names and select X and O</h6>
                <p className="text-warning"> * Player 1 gets the x and first chance</p>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Player 1</Form.Label>
                    <Form.Control type="text" placeholder="Enter player 1 here" value={user.p1} onChange={e => handleChange(e, 'p1')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Player 2</Form.Label>
                    <Form.Control type="text" placeholder="Enter player 2 here" value={user.p2} onChange={e => handleChange(e, 'p2')} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
                    Start game
                </Button>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    )
}
export default UserModal;