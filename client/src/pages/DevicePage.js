import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {id: 1, name: "iPhone 14 Pro Max", price: 67999, rating: 5, img: `https://content1.rozetka.com.ua/goods/images/big/284924170.jpg`}
    const description = [
        {id:1, title:"Оперативна пам'ять", description:"6 ГБ"},
        {id:1, title:"Камера", description:"12 МП"},
        {id:1, title:"Процесор", description:"Apple A16 Bionic"},
        {id:1, title:"Кількість ядер", description:"2+4"},
        {id:1, title:"Батарея", description:"4323 mAh"},
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{device.price} грн.</h3>
                        <Button variant={"outline-dark"}>Додати в кошик</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;