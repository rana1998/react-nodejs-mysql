import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { AuthContext } from "./helpers/AuthContext";
import { useState } from "react";

function App() {
  const [authState, setAuthstate] = useState(false);

  return (
    <div className="App">
      <AuthContext.Provider value={{authState, setAuthstate}}>
      <Router>
        <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/createpost"> Create A Post</Link>
          {!authState && (
            <>
            <Link to="/Login"> Login</Link>
            <Link to="/registration"> Registration</Link>
            </>
          )
          }
          
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" exact component={CreatePost} />
          <Route path="/post/:id" exact component={Post} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
