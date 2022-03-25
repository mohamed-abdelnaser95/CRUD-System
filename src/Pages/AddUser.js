import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useState, useContext } from 'react'
import { UsersContext } from '../Modules/UserModules';
import { useNavigate } from "react-router-dom";

const AddNewUser = (props) => {
    const navigate = useNavigate();

    const { addUser } = useContext(UsersContext)

    const [newUser, setNewUser] = useState({
        name: '',
        phone: '',
        email: '',
        website: '',
        username: '',
        city: '',
        street: '',
        
    }) 

    const handleSubmit = (event) => {
        event.preventDefault()
        addUser(newUser)
        navigate('/users')
    };

    const handleChange = (event) => {
        const {name, value} = event.target
        console.log(newUser)
        setNewUser(currnetUsers => ({...currnetUsers, [name]: value}))
    }

    return ( 
        <Container style ={{marginTop: '10px', padding: '10px' , border: '1px solid #9e9e9e'}}>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={newUser.name} onChange={handleChange} name='name' type="text" placeholder="User Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={newUser.email} onChange={handleChange} name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control value={newUser.phone} onChange={handleChange} name='phone' type="text" placeholder="user phone number" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridWebsite">
                        <Form.Label>Website</Form.Label>
                        <Form.Control value={newUser.website} onChange={handleChange} name='website' type="text" placeholder="User Name" />
                    </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control value={newUser.city} onChange={handleChange} type='text' name='city' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridStreet">
                        <Form.Label>Street</Form.Label>
                        <Form.Control value={newUser.street} onChange={handleChange} type='text' name='street' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={newUser.username} onChange={handleChange} type='text' name='username' />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="dark" type="submit">Add User</Button>
                
            </Form>
        </Container>
    );
};

export default AddNewUser;
