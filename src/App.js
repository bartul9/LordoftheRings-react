import "./App.css";
import Home from "./Main-Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Character from "./Main-Components/Character";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar id="App-navbar" bg="light" expand="lg">
          <Navbar.Brand href="#home">LotR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink className="navbar-links" to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="navbar-links" to="/characters">
                  Character
                </NavLink>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item className="navbar-links" href="#action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className="navbar-links" href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className="navbar-links" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/characters" render={() => <Character />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
