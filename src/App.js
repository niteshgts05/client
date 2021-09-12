import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './components/Contact';
import { Route,Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Calender from './components/Calender';


function App() {
  return (
    <>

      <Navbar />
      <Switch>

        <Route exact path="/">
           <Home /> 
        </Route>
        <Route exact path="/calender">
           <Calender /> 
        </Route>
        <Route exact path="/about">
           <About />
        </Route>
        <Route exact path="/contact">
            <Contact />
        </Route>
        <Route exact path="/login">
         <Login />
        </Route>
        <Route exact path="/signup">
         <Signup />
        </Route>
        {/* <Route component={ErrorPage} /> */}

        <Route>
          <ErrorPage />
        </Route>
     </Switch>
    </>
  );
}

export default App;
