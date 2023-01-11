import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <LoadsComments></LoadsComments>
    </div>
  );
}

function LoadsComments(){
const [comments,setComments] = useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then(data => setComments(data))
},[])
return(
  <div>
    <h2>Comments length : {comments.length}</h2>
  </div>
)
}

function Counter(){
  const [count,setCount] = useState(0);
  const increaser = () => setCount(count + 1);
  const decreaser = () => setCount(count  - 1);
  return(
    <div>
      <h1>Counter : {count} </h1>
      <button onClick={increaser}>Increase</button>
      <button onClick={decreaser}>Decrease</button>
    </div>
  )
}

export default App;
