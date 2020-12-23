import { Route } from 'react-router-dom';
import './App.css';
import { Contacts } from './Components/Contacts/Contacts';
import Header from './Components/Header/Header';
import { MainPage } from './Components/MainPage/MainPage';
import { NavBar } from './Components/NavBar/NavBar';
import { Services } from './Components/Services/Services';
import { Specialists } from './Components/Specialists/Specialists';

function App (props) {
  
  return (
    <div className="App">
      <Header/>
      <NavBar/>

      <Route path={'/about'} render={ () => <MainPage/>}/>
      <Route path={'/Services'} render={ () => <Services Services = {props.localStorage.Services}/>}/>
      <Route path={'/Specialists'} render={ () => <Specialists Specialist={props.localStorage.Specialist}/>}/>
      <Route path={'/Contacts'} render={ () => <Contacts/>}/>
    </div>
  );
}

export default App;
