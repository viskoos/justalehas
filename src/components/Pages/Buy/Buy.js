import React, {Component} from 'react';
import {Form, Button, Toast, Row, Col} from "react-bootstrap";

class Buy extends Component {
    constructor(){
        super()
        this.state = {
            val: '',
            num: '',
            showA: false,
            showB: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            val: e.target.value
        })
    }

    handleChangeNum = (e) => {
        this.setState({
            num: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: '',
            num: ''
        })
        alert(`Приветик, ${this.state.val}! Нет-нет. Мы не спиздили данные твоей карты. Это кстати не они? ${this.state.num}, кто-то обранил походу, но это ладно.`)
    }

    toggleShowA = () => {
        this.setState({
            showA: false
        })
    }

    toggleShowB = () => {
        this.setState({
            showB: false
        })
    }

    toggleShow = () => {
        this.setState({
            showA: true,
            showB: true,
        })
    }

    render() {
        return (
            <div>
                <div style={{width: '600px', margin: '0 auto'}}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Ваше Имя</Form.Label>
                        <Form.Control
                            onChange={this.handleChange}
                            placeholder="введите имя"
                            value={this.state.val}
                        />
                        <Form.Text className="text-muted">
                            Мы не отдадим эти данные кому-то другому
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Ваша фамилия</Form.Label>
                        <Form.Control placeholder="введите фамилию" />
                        <Form.Text className="text-muted">
                            Мы не отдадим эти данные кому-то другому
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Ваша страна</Form.Label>
                        <Form.Control as="select">
                            <option>Казахстан</option>
                            <option>Россия</option>
                            <option>Украина(Не страна)</option>
                            <option>Внимательно посмотрите первый пункт списка</option>
                            <option>Ещё раз. ВНИМАТЕЛЬНО посмотрите первый пункт списка</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Номер карты, дата действия и цифры с обратной стороны</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="xxxx xxxx xxxx xxxx, xx/xx, xxx"
                            onChange={this.handleChangeNum}
                            value={this.state.num}
                        />
                        <Form.Text className="text-muted">
                            Мы никогда в жизни не будем использовать эти данные в своих коварных, корысных, мошеннических целях
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Мне уже исполнилось 32 и я согласен со всеми условиями" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.toggleShow}>
                        Оформить заказ
                    </Button>
                </Form>
                </div>
                <div style={{top: '-50%'}}>
                    <Row>
                        <Col xs={6}>
                            <Toast show={this.state.showA} onClose={this.toggleShowA} >
                                <Toast.Header>
                                    <strong className="mr-auto">Admin</strong>
                                    <small>just now</small>
                                </Toast.Header>
                                <Toast.Body>Ты вообще в своём уме?</Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Toast show={this.state.showB} onClose={this.toggleShowB} >
                                <Toast.Header>
                                    <strong className="mr-auto">Admin</strong>
                                    <small>just now</small>
                                </Toast.Header>
                                <Toast.Body>Зачем тебе нужен Лёха? Cходи проспись или протрезвей, потом возращайся.</Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}

export default Buy;