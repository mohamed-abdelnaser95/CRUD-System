import { Table, Button } from 'react-bootstrap';
import { v4 as uuid } from 'uuid'
import { Link } from "react-router-dom";
import { UsersContext } from '../Modules/UserModules';
import {  useContext } from 'react';

const Landing = () => {
    let { users, deleteUser } = useContext(UsersContext);

    // console.log(users)
    return (
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Website</th>
                        <th>More Details</th>
                        <th>Edite</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users ? users.map(user => (
                        <tr key = {uuid()}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <Link to= {`/users/${user.id}`}>
                                    <Button variant="warning">More Details</Button>
                                </Link>
                            </td>
                            <td>
                                <Link to= {`/users/edite/${user.id}`}>
                                    <Button variant="primary">Edite</Button>
                                </Link>
                            </td>
                            <td><Button onClick={()=>deleteUser(user.id)} variant="danger" >Delete</Button></td>
                        </tr>
                    )) : <tr style={{"textAlign": "center"}}><td>Looooooding</td></tr>}
                </tbody>
            </Table>
    );
}

export default Landing; 