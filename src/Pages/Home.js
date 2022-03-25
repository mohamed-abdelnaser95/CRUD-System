import { UsersContext } from '../Modules/UserModules';
import {  useContext } from 'react';
import Card from 'react-bootstrap/Card'
import { CardGroup, Container, Col, Row } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'
const Home = () => {

    const { users } = useContext(UsersContext)

    return (
        <Container>
            <CardGroup key={uuid()}>
            {users.map(user => 
                <Row xs={1} md={2} className="g-4"> 
                    {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={uuid()}>
                    <Card>
                        <Card.Img variant="top" src='https://dvyvvujm9h0uq.cloudfront.net/com/articles/1572855258-graphicdesignsoftware.jpg' />
                        <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Title>{user.phone}</Card.Title>
                        <Card.Title>{user.username}</Card.Title>
                        {user.address? <Card.Title>{user.address.city},{user.address.street}</Card.Title> : <Card.Title>{user.city}, {user.street}</Card.Title>}
                        <Card.Footer>
                            <small className="text-muted">Website : {user.website}</small>
                        </Card.Footer>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
            )}
            </CardGroup>
        </Container>
    )
}

export default Home;
