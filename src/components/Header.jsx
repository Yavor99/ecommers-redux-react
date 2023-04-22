import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';


const Header = () => {
    const { cart } = useSelector(state => state.updateCart);


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
                            <NavLink className='w-100 text-decoration-none text-white'><Badge style={{ float: "right" }} badgeContent={cart.length} color="primary"> <ShoppingCartIcon onClick={handleClick} /></Badge></NavLink>
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
                    {
                        cart.length === 0 ?
                            (
                                <div>
                                    Your Cart is empty
                                </div>
                            )
                            :
                            (
                                <div style={{ width: "30rem" }}>
                                    <div>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>


                                                    <th>
                                                        Photo
                                                    </th>
                                                    <th>
                                                        Details
                                                    </th>
                                                </tr>
                                            </thead>
                                            {
                                                cart.map(product => {
                                                    return (
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <img style={{ width: "5rem", height: "5rem" }} src={product.image} alt='' />
                                                                </td>
                                                                <td>
                                                                    <p>{product.title}</p>
                                                                    <p>Price: ${product.price}</p>
                                                                    <p>Rating: {product.rating.rate}</p>
                                                                    <p>Num of product</p>
                                                                    <div className='d-flex justify-content-between w-50'>
                                                                        <p>-</p>
                                                                        <p>x{product.rating.count}</p>
                                                                        <p>+</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })
                                            }
                                            <tfoot>
                                                <tr>
                                                    <div className='text-center'>Total Price</div>
                                                </tr>
                                            </tfoot>
                                        </Table>
                                    </div>
                                </div>
                            )
                    }
                </MenuItem>

            </Menu>
        </div>
    )
}

export default Header

