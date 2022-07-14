import React,{useState , useEffect} from 'react';
import './App.css';



function App() {
  const [currentSum, setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);
  const [counter,setCounter] = useState(0)

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";

  })

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum==='')
    return;
    let sum= currentSum+parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
    setCounter(counter+1);
  }


  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
    setCounter(0);
  }

  return (
    <div className="App">
      <div className="app-title">
        <h1> Putt Calculator</h1>
      </div>
      <form>

        <div id="response">
         <input type="text" id="result" value={`You've made ${currentSum} putts`}/>
            <br/>
            <input type="text" id="result" value={`You've taken ${counter} reps`}/>
            <br/>
            </div>
            <input type="text" id="num" placeholder="Putts Made?"/>
            <br/>
            <button id ="add num" onClick={Add}>Add</button>
            <br/>
            <button id="clear num" onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default App;