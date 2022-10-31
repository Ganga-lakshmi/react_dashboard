
import './App.css';
import { Button,Navbar,Nav, Container } from "react-bootstrap";
import image from'./assets/img12.png';
import {Containers} from './components/Containers';

import { NavBar } from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App"><center>
      <div className="dashboard">
        <h5>-Dashboard</h5>

      </div></center>
    <NavBar />
        <div className="container">
          <img
            src={image}
            alt="Profile" height={200} width ={200}
            style={{ marginTop: "12%", display: "inline-block;" }} />
          
          <p>
          <h2>Letzrent</h2>
         <span className='ads'> Address : Mumbai Maharashtra</span><br/>

         ● EMAIL : | Website : https://letzrent.com | PAN/TAN : AAJCR3294F<br/>
           Online search, compare & booking platform for self-drive cars, charter flights, living space & more that<br/> rewards users
          </p>
    </div>
    <ul className='list1'>
            <li className='litem'><b>GEN Z FOUNDER </b></li>
            <li><b>MOBILITY</b></li>
            <li><b>E-COMMERCE</b></li>
          </ul>
          <div className="container">
          {/* <Button variant="link" className="btn2">Unable to view video ? Click here</Button> */}
          <Navbar>
          <Nav.Link href="#home" className="link1">Unable to view video ? Click here</Nav.Link>
          </Navbar>
          </div>

          {/* // containers */}
          <div className="bodycon">
          <Containers />
          </div>
    
    <br />
    
    </div>

    
    
  );
}

export default App;
