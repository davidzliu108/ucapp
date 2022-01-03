import React, { useState } from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import Reddit from "./Reddit";
import Notes from "./Notes";
import Create from "./Create";
import Map from "./Map";
import More from "./More";
import IbdReddit from "./IbdReddit";
import Donate from "./Donate";
import IbdAidDiet from "./IbdAidDiet";
import Todo from "./Todo";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ flex: 1, maxWidth: '800px' }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/reddit" component={Reddit} />
                <Route path="/notes">
                  <Notes notes={notes} />
                </Route>
                <Route path="/create">
                  <Create setNotes={setNotes} />
                </Route>
                <Route path="/map" component={Map} />
                <Route path="/more" component={More} />
                <Route path="/ibdreddit" component={IbdReddit} />
                <Route path="/donate" component={Donate} />
                <Route path="/ibdaiddiet" component={IbdAidDiet} />
                <Route path="/progress" component={Todo} />

              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container >
    </AuthProvider>
  )
}

export default App;
