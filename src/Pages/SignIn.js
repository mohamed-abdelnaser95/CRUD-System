import { Form, Button,Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext  } from 'react';
import AuthContext from "../Modules/AuthProvider"; 
import "../Styles/signup.css"

const SignIn = () => {
    const emailRef = useRef()
    const [emailValue, setEmailValue] = useState('')
    const [pwdValue, setPwdValue] = useState('')
    const { auth, setAuth } = useContext(AuthContext);
    const getEmail = localStorage.getItem("email");
    const getPwd = localStorage.getItem("password");
    const navigate = useNavigate()

    useEffect(()=> {
        emailRef.current.focus()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (emailValue === getEmail && pwdValue === getPwd) {

            setAuth({ user: emailValue, pwd: pwdValue });
            localStorage.setItem('auth', JSON.stringify({user: getEmail, pwd: getPwd}))
            console.log(auth)
            const getAuth = JSON.parse(localStorage.getItem('auth')) 
            console.log(getAuth)
            console.log("success sign in")
            navigate("/users", { replace: true });
        } else {
            alert("Wronge email or password");
        }
        console.log(setAuth)
        setEmailValue('')
        setPwdValue('')
    }

    return (
        <>
        (
            <div style ={{fontWeight:'bold', fontSize:'50px', textAlign:'center',marginTop: '50px'}}>Sign In</div>
            <Container style ={{display: 'flex', justifyContent: 'center', alignItems: 'center',maxWidth: '500px', minHeight:'400px', borderRadius: '4px', marginTop: '50px', padding: '10px' , border: '1px solid #9e9e9e'}}>

                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                    
                        {/* email */}
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>

                            <Form.Control
                                onChange={(e) => setEmailValue(e.target.value)}
                                value={emailValue}
                                type="email" 
                                placeholder="enter a valid email" 
                                required 
                                ref={emailRef}
                                autoComplete="off"
                            />
                        </Form.Group>

                        {/* password */}
                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>

                            <Form.Control
                            onChange={(e) => setPwdValue(e.target.value)}
                            value={pwdValue} 
                            required
                            type="password" 
                            placeholder="password"
                            />
                        </Form.Group>
                    </Row>
                    <Button disabled={false} onClick={handleSubmit} variant="dark" type="submit">Sign In</Button>
                </Form>
            </Container>)
        </>

    );
}

export default SignIn;
