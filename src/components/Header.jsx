import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container className='text-white'>
                    <Navbar.Brand href="#home">Shoping Deal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className={"text-decoration-none text-white"}>Products</NavLink>
                            <NavLink className='w-100 text-decoration-none text-white'><ShoppingCartIcon onClick={handleClick} style={ {float: "right" }} /></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <div>
                        Your Cart is empty
                    </div>
                </MenuItem>
                
            </Menu>
        </div>
    )
}

export default Header

