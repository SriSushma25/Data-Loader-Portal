import React from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AddPatient from './components/AddPatient/addPatient';
import Edit from './components/Edit/editPatient';
import ProcessData from './components/ProcessData/processData';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
          <Route path="addPatient" element={<AddPatient />} />
          <Route path="editPatient" element={<Edit />} />
          <Route path="processPatient" element={<ProcessData />} />
          </Route>
      </Routes>
      </Router>
    </div>
  );
}
export default App;