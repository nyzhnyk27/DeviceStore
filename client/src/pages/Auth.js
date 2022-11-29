import React from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import {Button} from "react-bootstrap"
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

    return (
        <Container className="d-flex justify-content-center align-items-center "
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизація" : "Реєстрація"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш email"
                        type="email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш пароль"
                        type="password"
                    />                    
                    <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Немає акаунта? <NavLink to={REGISTRATION_ROUTE}>Зареєструватись</NavLink>
                            </div>
                            :
                            <div>
                                Є акаунт? <NavLink to={LOGIN_ROUTE}>Увійти</NavLink>
                            </div>
                        }
                        <Button className="mt-3 align-self-end" variant={"outline-success"}>
                            {isLogin ? "Увійти" : "Створити акаунт"}
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;