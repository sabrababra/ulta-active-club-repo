import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="row gap-0">
      <div className='col-12 col-sm-9'>
        <Header></Header>
        <Cards></Cards>
      </div>
      <div className='col-12 col-sm-3'>
          <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
