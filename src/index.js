import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/common/styles.module.css'
import SigninPage from './components/SigninPage/Index';
import SignupPage from './components/SignupPage/Index';
import Dashboard from './components/Dashboard/Index';
import BloodHistoryPage from './components/BloodHistoryPage/Index';
import RequestBlood from './components/RequestBlood/Index';
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'localhost:8000/api';

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='signin' element = {<SigninPage/>} />
      <Route path='signup' element = {<SignupPage/>} />
      <Route path='/' element={<App/>}>
          <Route path='dashboard' element={<Dashboard/>}>
            <Route path='history' element={<BloodHistoryPage/>}/>
            <Route path='request' element={<RequestBlood/>}/>
          </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

