import './index.css'
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import FriendProfile from "./pages/FriendProfile";
import Users from "./pages/Users";
import Messenger from "./pages/Messenger";
import Welcome from "./components/Welcome";
import News from './pages/News';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends'; 
import { useEffect } from "react";
import { fetchFriends, fetchMessages } from "./store/slices/authSlice";




function App() {
  const dispatch = useDispatch()
  const user = useSelector( (state) => state.auth.users)

  useEffect( () => {
    if (user) {
      dispatch(fetchFriends())
      dispatch(fetchMessages())
    } 
  }, [dispatch, user])

  return (
    <div className="App">
      <Router>
        
        {/* <Routes>
          <Route path="/" element={ <Layout /> }> */}
            {/* {/* <Route index element={ <Home /> } >Home Page</Route> */}
            {/* <Route path="/login" element={ <Login /> }>Login</Route>
            <Route index element={ <Welcome /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/users" element={ <Users /> } />
            <Route path="/chat" element={ <Messenger /> } />
            <Route path="/profile" element={ <Profile />} />
            <Route path="/friend/:id" element={<FriendProfile />} />
            <Route path="/news" element={<News />} />
          </Route>
        </Routes>
        */}


      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
          {/* Захищені маршрути */}
          <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="news" element={<PrivateRoute><News /></PrivateRoute>} />
          <Route path="chat/:id" element={<PrivateRoute><Messenger /></PrivateRoute>} />
          <Route path="friends" element={<PrivateRoute><Friends /></PrivateRoute>} />
          <Route path="friend/:id" element={<PrivateRoute><FriendProfile /></PrivateRoute>} />
          <Route path="/users" element={ <PrivateRoute><Users /></PrivateRoute> } />
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
