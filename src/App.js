import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const [data,setData]=useState(0);
  const addTime=(time)=>{
    setData(data+time);

}
  return (
    <div className="row gap-0">
      <div className='col-12 col-sm-9'>
        <Header></Header>
        <Cards addTime={addTime} ></Cards>
      </div>
      <div className='col-12 col-sm-3'>
          <Sidebar data={data}></Sidebar>
      </div>
    </div>
  );
}

export default App;
