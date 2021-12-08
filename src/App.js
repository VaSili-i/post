import NavBar from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AppRouter from './components/AppRouter.jsx';
import {BrowserRouter} from 'react-router-dom'



function App() {
let ins = process.env.REACT_APP_ABOUT;
console.log(ins)
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
