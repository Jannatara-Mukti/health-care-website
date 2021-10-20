import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Appoinment from './components/Appoinment/Appoinment';
import Login from './components/Login&Reg/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/MainHome/Home/Home';
import ServiceDetails from './components/Home/ServiceInfo/ServiceDetails/ServiceDetails';
import Registration from './components/Login&Reg/Registration/Registration';
import AllDepartment from './components/Departments/DepComponents/AllDepartment';
import PrivateRoute from './components/Login&Reg/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route exat path="/login">
              <Login></Login>
            </Route>
            <Route exat path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute exat path="/departments">
              <AllDepartment></AllDepartment>
            </PrivateRoute>
            <PrivateRoute path="/servicedetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
 
    </div>
  );
}

export default App;
