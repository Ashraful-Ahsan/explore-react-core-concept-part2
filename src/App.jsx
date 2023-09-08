import './App.css'
import Counter from './Counter';
import Friends from './friends';
import Team from './Team';
import Users from './Users';


function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2=()=>{
    alert('button2 clicked')
  }


    const addToFive=(num)=>{
      alert(num+5);
    }

  return (
    <>

      
      <h3>React Core Concepts-2</h3>

      <Friends></Friends>
      <Counter></Counter>
      <Users></Users>
      <Team></Team>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert ('third clicked')}}>Third</button>
      {/* vaijailla */}
      <button onClick={()=>{addToFive(4)}}>Four</button>
    </>
  )
}

export default App
