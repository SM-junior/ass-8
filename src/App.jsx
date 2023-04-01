import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Summery from './components/Summery/Summery'

function App() {
  const [count, setCount] = useState(0);

  const handleTime=(time)=>{
    const watchTime=count+parseInt(time);
    setCount(watchTime);

    
  }


  return (
    <div className="App">
     <Header></Header>
     <div className='body flex flex-col md:flex-row  justify-between container mx-auto gap-5 mt-10'>
        <div className="cart-body mx-auto w-full md:w-[70%] lg:w-[70%]">
            <Body handleTime={handleTime}></Body>
        </div>
        <div className="side-details w-full md:w-[30%] lg:w-[30%]">
          <Summery time={count}></Summery>
        </div>
     </div>
    </div>
  )
}

export default App
