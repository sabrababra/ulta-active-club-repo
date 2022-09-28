import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="row">
      <div className='col-12 col-sm-8'>
        <Header></Header>
        <Cards></Cards>
      </div>
      <div className='col-12 col-sm-4'>
          <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
