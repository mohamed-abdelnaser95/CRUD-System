import { useCallback, useEffect, useMemo, useState, createContext } from "react";
import axios from "axios";

export const UsersContext = createContext()

const UserModule = ({ children }) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
			setUsers(res.data);
    });
}, []);

    // Add user function
    const addUser = useCallback((user) => {
        let lastUserId = users[users.length -1].id
        setUsers(currentUsers => ([...currentUsers, {...user, id: lastUserId +1}]))
    },[users])

    // edite function 
    const editeUser = useCallback((newUser) => {
        setUsers(users.map(user => (user.id === +newUser.id? user = newUser: user )))
    },[users])
    

    // Delete user function
    const deleteUser = useCallback((userId) => {
    const certain = window.confirm('Are you sure to delete this user?')
    console.log(certain)
    if(certain){
        setUsers(users.filter(ele => ele.id !== +userId))
    }
    },[users])
    
    // useContext function
    const contextValue = useMemo(() => ({ users, addUser, deleteUser, editeUser }),
    [users, deleteUser, addUser, editeUser])
    console.log(users)

    return ( 
        <UsersContext.Provider value = {contextValue}>
            {children}
        </UsersContext.Provider>
    )
}
export default UserModule;
