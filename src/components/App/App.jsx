import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import "./App.css";
import StudentForm from "../StudentForm/StudentForm.jsx";
import StudentList from "../StudentList/StudentList.jsx";
import AboutPage from "../AboutPage/AboutPage.jsx";

function App() {

  const history = useHistory();

  const handleClick = () => {
    alert("About to go to students!!!");
    // change location url
    history.push("/students");
  };

  return (
    <div className="App">
      <header>
        <h1>GitHub Student List</h1>
        {/* Nice spot for a nav, eh? */}
      </header>
      <Router>
        <nav>
          <Link to="/home">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/students">Students</Link>
        </nav>
        <Route exact path="/home">
          <StudentForm onSuccess={handleClick} history={history} />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/students">
          <StudentList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
