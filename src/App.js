import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import './index.css'
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import Messenger from "./pages/Messenger";



function App() {
 

  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={ <Layout /> }>
            {/* {/* <Route index element={ <Home /> } >Home Page</Route> */}
            <Route path="/login" element={ <Login /> }>Login</Route>
            <Route index element={ <Home /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/users" element={ <Users /> } />
            <Route path="/chat" element={ <Messenger /> } />
            <Route path="/profile" element={ <Profile />} />
          </Route>
        </Routes>
       

      </Router> 

      {/* <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={ <Register />} />
          <Route path="/profile" element={ <Profile/>} />
        </Routes>
      </Router> */}
     
  
    </div>
  );
}

export default App;
