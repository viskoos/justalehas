import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://sun9-47.userapi.com/c855428/v855428930/14bdcf/XFVkkI0Dkrc.jpg"
                            alt="First Side"
                        />
                        <Carousel.Caption>
                            <h3>Искусственный интеллект</h3>
                            <p>Над искусственным интеллектом "Just a Lёha" трудились лучшие умы Китая.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://sun9-38.userapi.com/c855428/v855428930/14bdd8/i3Q_gejI4v8.jpg"
                            alt="Last Side"
                        />
                        <Carousel.Caption>
                            <h3>Душа компании и не только</h3>
                            <p>Планка коммунникабельности поднята выше чем у аналогов</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://sun9-72.userapi.com/c855428/v855428930/14bde1/8ptVcxO7e4A.jpg"
                            alt="Last Side"
                        />
                        <Carousel.Caption>
                            <h3>Повышенные навыки выживаемости</h3>
                            <p>Корпус испытывался 20 лет казахскими степями</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://sun9-57.userapi.com/c855428/v855428930/14bdc6/a-AGXhI_IcA.jpg"
                            alt="Last Side"
                        />
                        <Carousel.Caption>
                            <h3>КАК ЭТО СЮДА ПОПАЛО БЛЯТЬ?</h3>
                            <p>Отвечаю, найдем виноватых и НАКАЖЕМ</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h1 style={{textAlign: 'center', marginTop: '5rem'}}>Just a Lёha - best of its kind.</h1>
                <h5 style={{textAlign: 'center'}}>For only $ 999.</h5>
            </div>
        );
    }
}

export default Main;



