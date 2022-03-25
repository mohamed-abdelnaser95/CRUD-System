import { Form, Button,Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/signup.css"
// import axios from "axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
// const signup_url = '/registerdata' // data of the registration will be sent to this link

const SignUp = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=> {
        setErrMsg('')
    },[user, email, pwd, matchPwd])

    useEffect(()=> {
        userRef.current.focus()
    },[])

    useEffect(()=> {
        const result = USER_REGEX.test(user)
        setValidName(result)
    },[user])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        console.log(result)
        setValidEmail(result)
    },[email])

    useEffect(()=> {
        const result = PWD_REGEX.test(pwd)  
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    },[pwd, matchPwd])

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const verifyuser = USER_REGEX.test(user)
        const verifypwd = PWD_REGEX.test(pwd)
        const verifyEmail = EMAIL_REGEX.test(email)
        if(!verifypwd || !verifyuser || !verifyEmail){
            setErrMsg('Invalid entry')
        }else{
            setSuccess(true);
            localStorage.setItem("username", user);
            localStorage.setItem("email", email);
            localStorage.setItem("password", pwd);
            navigate('/signin')
        }        
    };  
    return ( 
        <>
            {success? <h2>Successful register!</h2> : ''}
            <div style ={{fontWeight:'bold', fontSize:'50px', textAlign:'center',marginTop: '50px'}}>Sign up</div>
            <Container style ={{display: 'flex', justifyContent: 'center', alignItems: 'center',maxWidth: '500px', minHeight:'400px', borderRadius: '4px', marginTop: '50px', padding: '10px' , border: '1px solid #9e9e9e'}}>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                    
                        {/* using assertive in aria-live mean when we focus in this paragraph it will be reader to the screen reader*/}
                        <p ref={errRef} className={errRef? "errMsg" : "offScreen"} aria-live="assertive">
                            {errMsg}
                        </p>

                        {/* userName */}
                        <Form.Group className="mb-3" controlId="formGriduserName" >
                            <Form.Label>
                            Username : 
                            <span className={validName ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validName || !user ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                            </Form.Label>

                            <Form.Control
                            onChange={(e) => setUser(e.target.value)}
                            name='name' type="text" placeholder="username" 
                            required 
                            autoComplete="off"
                            ref={userRef}
                            aria-invalid={validName? 'false' : 'true'}
                            aria-describedby= 'uidnote'
                            onFocus={()=> setUserFocus(true)}
                            onBlur={()=> setUserFocus(false)}/>
                        </Form.Group>

                        <p id="uidnote" className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
                            <FontAwesomeIcon icon={faInfoCircle} /> &nbsp;
                            4 to 24 characters, Must begin with a letter, letters, numbers, undescroes & hyphen allowed
                        </p>

                        {/* email */}
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>
                                Email:
                            <span className={validEmail ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validEmail || !email ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </Form.Label>

                        <Form.Control
                            onChange={(e) => setEmail(e.target.value)}
                            name='email' type="email" placeholder="enter a valid email" 
                            required 
                            autoComplete="off"
                            aria-invalid={validEmail? 'false' : 'true'}
                            aria-describedby= 'emailnote'
                            onFocus={()=> setEmailFocus(true)}
                            onBlur={()=> setEmailFocus(false)}
                        />
                        </Form.Group>

                        <p id="emailnote" className={emailFocus && email && !validEmail ? 'instructions' : 'offscreen'}>
                            <FontAwesomeIcon icon={faInfoCircle} /> &nbsp;
                            Ex: example@exapmle.com, should be  small characters
                        </p>

                        {/* password */}
                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Label>
                            Password:
                            <span className={validPwd ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                            </Form.Label>

                            <Form.Control
                            onChange={(e) => setPwd(e.target.value)}
                            type="password" 
                            name = 'password'
                            placeholder="password"
                            aria-invalid={validPwd? 'false' : 'true'}
                            aria-describedby= 'pwdnote'
                            onFocus={()=> setPwdFocus(true)}
                            onBlur={()=> setPwdFocus(false)}/>
                        </Form.Group>

                        <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? 'instructions' : 'offscreen'}>
                            <FontAwesomeIcon icon={faInfoCircle} /> &nbsp;
                            8 to 24 characters, Must include uppercase and lowercase letters and numbers and 
                            allowed special characters : <span aria-label="hashing">#</span>
                            <span aria-label="exclamation mark">!</span><span aria-label="at symbol">@</span>
                            <span aria-label="dollar sigh">$</span><span aria-label="percent">%</span>
                        </p>

                        {/* confirm password */}
                        <Form.Group className="mb-3" controlId="formGridCofirmedPassword">
                            <Form.Label>
                                Confirm Password:
                                <span className={validMatch ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                            </Form.Label>

                            <Form.Control
                                onChange={(e) => setMatchPwd(e.target.value)}
                                type="password" 
                                placeholder="password"
                                aria-invalid={validMatch? 'false' : 'true'}
                                aria-describedby= 'confirmnote'
                                onFocus={()=> setMatchFocus(true)}
                                onBlur={()=> setMatchFocus(false)}
                            />
                        </Form.Group>

                        <p id="confirmnote" className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                            <FontAwesomeIcon icon={faInfoCircle} /> &nbsp;
                            Must matched the password
                        </p>
                    </Row>

                    <Button disabled={!validName || !validEmail || !validPwd || !validMatch ? true : false} variant="dark" type="submit">Submit</Button>
                    
                </Form>
            </Container>
        </>
    );
}

export default SignUp;