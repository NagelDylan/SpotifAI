import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import { useState, useEffect } from 'react'
import Login from './Login';

function App() {
    const [searchInput, setSearchInput] = useState("")
    console.log("HI!")
    console.log(process.env.CLIENT_ID)
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
