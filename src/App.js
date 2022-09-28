import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';
import QnA from './components/QnA/QnA';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data,setData]=useState(0);
  const addTime=(time)=>{
    setData(data+time);

}
  return (
    <div >
      <div className="main-section">
      <div >
        <Header></Header>
        <Cards addTime={addTime} ></Cards>
      </div>
      <div >
          <Sidebar data={data}></Sidebar>
      </div>
      </div>
      <QnA></QnA>
      <ToastContainer />
    </div>
  );
}

export default App;
