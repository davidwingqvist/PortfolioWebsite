import './App.css';

function ButtonDisplay()
{
    const buttons = [<button>About</button>, <button>Contact</button>, <button>Work</button>].sort(()=> Math.random() - 0.5)
    return buttons
}

function App() {
  return (
    <>
    <ButtonDisplay/>
    </>


  );
}

export default App;
