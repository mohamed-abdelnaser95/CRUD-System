import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthContext from "../Modules/AuthProvider"; 
import { useContext } from 'react';

const Header = () => {
    const styles = {color : 'white', textDecoration: 'none', marginRight: '20px'}
    const { setAuth } = useContext(AuthContext);
    // let certain;
    const getAuth = JSON.parse(localStorage.getItem('auth'))
    const handleSignOut = ()=> {
        const certain = window.confirm('Are you sure to sign out ...?')
        if(certain){
            console.log(certain)
            setAuth({user:'', pwd: ''});
            localStorage.removeItem("auth")
        }
    }
    return (
    <Navbar bg="dark" variant="dark" >
        <Container>
            <Navbar.Brand href="/">Task</Navbar.Brand>
            {getAuth?.user? 
                <Nav>
                    <Link style={styles} to="/">Home</Link>
                    <Link style={styles} to="/users">Landing</Link>
                    <Link style={styles} to="users/adduser">Add User</Link>
                    <Link style={styles} onClick={handleSignOut} to='/users'>SignOut</Link> :
                </Nav> : 
                <Nav>
                    <Link style={styles} to="/">Home</Link>
                    <Link style={styles} to="/users">Landing</Link>
                    <Link style={styles} to="/signin">SignIn</Link>
                    <Link style={styles} to="/signup">SignUp</Link>
            </Nav> }
            
        </Container>
    </Navbar>
    )
}

export default Header;