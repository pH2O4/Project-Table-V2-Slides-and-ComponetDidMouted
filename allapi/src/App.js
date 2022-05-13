import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";

import Main from './components/APIALLTABLES'

export default props =>
  
    <div className="App">
<Routes>
    <Route exact path="/" element={<Main/>} />
</Routes>
    </div>




