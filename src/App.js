import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Header from './Components/Header';
import AddUser from './Pages/AddUser'
import Landing from './Pages/Landing'
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { RequireAuth } from "./Modules/RequiredAuth";
import UserModule from './Modules/UserModules';
import EditeUser from "./Pages/EditeUser";
import UserProfile from "./Pages/UserProfile";
// import UsersContext from "./Module/UsersModule";

const App = () => {
  return (
    <UserModule>
    <BrowserRouter>
      <div className="App">
      <Header /> 
      <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} /> 
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />

            <Route element={<RequireAuth />}>
              <Route path="users" element={<Landing />} />
              <Route path="users/:id" element={<UserProfile />} />
              <Route path="users/adduser" element={<AddUser />} />
              <Route path="users/edite/:id" element={<EditeUser />} />
            </Route>

            
            <Route path="*" element={<div>404 - NotFound</div>} />
          </Routes>
      </div>
  </BrowserRouter>
    </UserModule>

  );
}

export default App;

// <Route path='/' element={<ProtectedRoutes/>}>
//   <Route path="landing" element={<Landing />} />
//   <ProtectedRoutes path='/users' component={<UserModule />} auth={true}/>
// </Route>