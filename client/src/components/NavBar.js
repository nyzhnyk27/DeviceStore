import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import { SHOP_ROUTE } from "../utils/consts";
import {Button} from "react-bootstrap"
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:"white", textDecoration:"none"}} to={SHOP_ROUTE}>Device-Store</NavLink>  
          {user.isAuth ?
            <Nav className="ml-auto" style={{color: "white"}}>
              <Button variant={"outline-light"}>Адмін панель</Button>
              <Button variant={"outline-light"} className="ml-2">Увійти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color: "white"}}>
              <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизація</Button>
            </Nav>
          }
        </Container>
      </Navbar>
    );
});

export default NavBar;