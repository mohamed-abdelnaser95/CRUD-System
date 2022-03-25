import { Form, Button,Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UsersContext } from '../Modules/UserModules';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const EditeUser = (props) => {
    const navigate = useNavigate();
    let { users, editeUser } = useContext(UsersContext);
    const { id } = useParams(); 

    let [user ,setUser] = useState({})
    useEffect(()=> {
        setUser(()=>{
            let user = users.find((user)=>user.id === +id);
            if(user) {
                console.log(user)
            }
            return user ? user : {}
        })
        
    },[id, users])

    const handleChange = (event) => {
        const {name, value} = event.target
        setUser(currnetUsers => (
            {...currnetUsers, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editeUser(user)
        navigate('/users')
        
    };

    return ( 
        <Container style ={{marginTop: '10px', padding: '10px' , border: '1px solid #9e9e9e'}}>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={user.name} onChange={handleChange} name='name' type="text" placeholder="User Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={user.email} onChange={handleChange} name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control value={user.phone} onChange={handleChange} name='phone' type="text" placeholder="user phone number" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridWebsite">
                        <Form.Label>Website</Form.Label>
                        <Form.Control value={user.website} onChange={handleChange} name='website' type="text" placeholder="User Name" />
                    </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control value={user.address? user.address.city : user.city} onChange={handleChange} type='text' name='city' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridStreet">
                        <Form.Label>Street</Form.Label>
                        <Form.Control value={user.address? user.address.street : user.street} onChange={handleChange} type='text' name='street' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={user.username} onChange={handleChange} type='text' name='username' />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="dark" type="submit">Save</Button>
                
            </Form>
        </Container>
    );
};

export default EditeUser;
