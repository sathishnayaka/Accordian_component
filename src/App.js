// import logo from './logo.svg'; 
import './App.css';
import data from './data';
import React ,{useEffect, useState} from 'react';

function Accordian({name,info})
{
  const [isactive,setactive]=useState(false);
  return(
    <div className='accord'>
    <h3 onClick={()=>{setactive(!isactive)}}>{isactive?'-':'+'}{name}</h3>
    {isactive && <p>{info}</p>}
    </div>
  );
}

function App() {
  const [users,setusers]=useState([])
  useEffect(()=>{
    if(data){
      setusers(data);
    }
  },[]);

  return (
    <div className="body">
      <div className='container'>
      {
        users.map((user)=>(
            <Accordian name={user.name} info={user.info}/>
        ))
      }
      </div>
      

      
    </div>
  );
}

export default App;
