import { useParams } from "react-router-dom";
import { UsersContext } from "../Modules/UserModules";
import { useContext, useEffect,useState } from "react";
import { Card, Button, Container, CardGroup } from "react-bootstrap";

const UserProfile = () => {
    
    let { users } = useContext(UsersContext);
    const { id } = useParams(); 
    let [user, setUser] = useState({})
    

    useEffect(()=> { 
        setUser(()=>{ let user = users.find((user) => user.id === +id);
            
            return user ? user : {}
        })
        
    },[id, users])
    console.log(user.id)
    return (
        <Container>
                { user? <Card className="text-center">
                <Card.Header>{user.name} Profile</Card.Header>
                <Card.Body>
                    <Card.Title>Username is {user.username}</Card.Title>
                    <Card.Title>Email is {user.email}</Card.Title>
                    <Card.Title>Phone number is {user.phone}</Card.Title>
                    <Card.Title>Website is {user.website}</Card.Title>
                    <Card.Title>Company is {user.company?user.company.name: "PSE"}</Card.Title>
                    <Card.Title>Address is {user.address ? (user.address.city, user.address.street) : (user.city, user.street) }</Card.Title>
                    
                    <Card.Text>To show album click the button</Card.Text>
                    <Button variant="primary"><a href="#album" style={{color:'white', textDecoration: 'none'}}>Album</a></Button>
                </Card.Body>
                <Card.Footer className="text-muted">last updated 2 days ago</Card.Footer>
            </Card> : <div>Looooooding</div>}
            <CardGroup id="album">
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/12/06/01/26/colour-1885352__340.jpg" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/10/02/07/40/ink-6674441__340.jpg" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://wallpaperaccess.com/full/2185413.jpg" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
                            
        </Container>
        
        
    );
};

export default UserProfile;
