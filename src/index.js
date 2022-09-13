import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import SigninPage from './components/SigninPage/Index';
import SignupPage from './components/SignupPage/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='signin' element = {<SigninPage/>} />
        <Route path='signup' element = {<SignupPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

