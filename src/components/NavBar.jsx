import React, { useState ,Component} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button2,Modal,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//import logout from './logout.jsx'
import { VacList, VacInsert, VacUpdate,RecordList, RecordInsert,UserInsert } from '../pages'
import styled from 'styled-components'
import UserProfile from './loginsession';
import Logo from './VacLogo.svg'
import Links from './Links'
import Cookies from 'js-cookie';

const Container = styled.div.attrs({
    className: 'container',
})`
    height: 150px;
`


/*
const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-sm bg-secondary navbar-dark',
})`
    margin-bottom: 20 px;
`*/
/*logout = () => {
        console.log("removing cookie")
      const { cookies } = Cookies.get();
      document.cookie = "sloev_concerts_01=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

      this.props.logout()
    }*/

  /*<NavItem>
              <NavLink href="/family">Family</NavLink>
            </NavItem>

             <NavItem>
                                      <NavLink href="/register">Register</NavLink>
                                    </NavItem>*/

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
    var tmpuser = Cookies.get('username')

  const toggle = () => setIsOpen(!isOpen);
     const [modal, setModal] = useState(false);

  const toggle2 = () => setModal(!modal);
  const toggle3 = () => setModal(!modal);
  const change = (props) => {
        window.location.href = `/Home`
                               };
  return (
    <div>
      <Navbar style={{background: 'linear-gradient(160deg,#a2d9bf,#a4dbd6,#b4dbe2,#c8dae5,#cfd7e4,#ced1e3,#d2c9e0,#d9c1d9)'}}color="blue" light expand="md">
        <NavbarBrand href="/Home">
        <img
                src={Logo}
                width="90"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />

        </NavbarBrand>



        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Home" >Home</NavLink>
            </NavItem>

            <NavItem>
              {tmpuser ? (
                                                                   <div>
            <NavLink  href="/profile"  onClick={toggle3}  >User Profile
            </NavLink>
                                                                    </div>
                                                                   ) : (
            <NavLink  href="/login"  onClick={toggle3}  >Login to see User Profile
                        </NavLink>

                                                                   )}

            </NavItem>

            <NavItem>
                          {tmpuser ? (
                                                                               <div>
                        <NavLink  href="/family"  onClick={toggle3}  >Family
                        </NavLink>
                                                                                </div>
                                                                               ) : (
                        <NavLink  href="/login"  onClick={toggle3}  >Login to see your Family list
                                    </NavLink>

                                                                               )}

                        </NavItem>

            <NavItem>
              <NavLink href="/vaccines/list" >Vaccine Searcher</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/records/list" >Booklet</NavLink>
            </NavItem>

              <NavItem>
                                       <NavLink onClick={toggle2} >


                                       {tmpuser ? (
                                                       <div>
                                                         <Link ><h6>Log out</h6></Link>
                                                         <Modal isOpen={modal} toggle={toggle2}>
                                                                <ModalHeader toggle={toggle2}>Confirm to log out ?</ModalHeader>
                                                                    <ModalBody>
                                                                     <Row>

                                                                                <Col>  <Link to="/logout" ><Button size="lg" onClick={() => window.location.href='/logout'} block><h6>Log out</h6></Button></Link></Col>
                                                                                <Col><Link to="/Home" ><Button size="lg" onClick={toggle2} block><h6>Cancel</h6></Button></Link></Col>
                                                                              </Row>




                                                                    </ModalBody>
                                                         </Modal>  </div>
                                                       ) : (

                                                        <Link to="/login" ><h6>Login</h6></Link>
                                                       )}


                                                       </NavLink>

                                     </NavItem>
            <UncontrolledDropdown nav inNavbar>


            </UncontrolledDropdown>
          </Nav>



        </Collapse>
      </Navbar>
    </div>
  );
}
 // <NavbarText>Logged in as {Cookies.get('username')}</NavbarText>
export default NavBar;


