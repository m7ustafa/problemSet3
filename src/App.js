import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [state , setState] = useState(
    {
      init : 0 ,
      initcard : 0,
      initcard2 : 0,
      initcard3 : 0,
      initcard4 : 0,
      initcard5 : 0,
      initcard6 : 0,
      x :"add to cart" ,       
      x2 :"add to cart" ,       
      x3:"add to cart" ,       
      x4 :"add to cart" ,       
      x5 :"add to cart" ,       
      x6 :"add to cart" ,       
      y :" remove from cart " ,
      y2 :" remove from cart ",
      y3 :" remove from cart ",
      y4 :" remove from cart ",
      y5 :" remove from cart ",
      y6 :" remove from cart "
    }
  ); 
  function handleClick1(event) {
    setState((state) => (
      {
       
        ...state ,
        x : 'added to cart ' ,
        y:'remove from cart' ,
        initcard : state.initcard + 1 ,
        init : state.init +1 ,
        
      }
    ))
  }
  function handleClick2(event)
  {
    setState((state) => (
      {
        ...state ,
        x: 'add to cart' ,
        y : 'removed from cart',
        init : state.init - 1 ,
        initcard : state.initcard - 1 
      }
    ))
  }
  function handleClick3(event) {
    setState((state) => (
      {
       
        ...state ,
        x2 : 'added to cart ' ,
        y2:'remove from cart' ,
        init : state.init +1 ,
        initcard2 : state.initcard2 + 1
      }
    ))
  }
  function handleClick4(event)
  {
    setState((state) => (
      {
        ...state ,
        x2: 'add to cart' ,
        y2: 'removed from cart',
        init : state.init - 1 , 
        initcard2 : state.initcard2 -1 
      }
    ))
  }
  function handleClick5(event) {
    setState((state) => (
      {
       
        ...state ,
        x3 : 'added to cart ' ,
        y3:'remove from cart' ,
        init : state.init +1 ,
        initcard3 : state.initcard3 + 1
      }
    ))
  }
  
  function handleClick6(event)
  {
    setState((state) => (
      {
        ...state ,
        x3: 'add to cart' ,
        y3: 'removed from cart',
        init : state.init - 1 ,
        initcard3 : state.initcard3 - 1
      }
    ))
  }
  function handleClick7(event) {
    setState((state) => (
      {
       
        ...state ,
        x4 : 'added to cart ' ,
        y4:'remove from cart' ,
        init : state.init +1 ,
        initcard4 : state.initcard4 + 1
      }
    ))
  }
  function handleClick8(event)
  {
    setState((state) => (
      {
        ...state ,
        x4: 'add to cart' ,
        y4 : 'removed from cart',
        init : state.init - 1 ,
        initcard4 : state.initcard4 - 1
      }
    ))
  }
  function handleClick9(event) {
    setState((state) => (
      {
       
        ...state ,
        x5 : 'added to cart ' ,
        y5:'remove from cart' ,
        init : state.init +1 ,
        initcard5 : state.initcard5 + 1
      }
    ))
  }
  function handleClick10(event)
  {
    setState((state) => (
      {
        ...state ,
        x5: 'add to cart' ,
        y5 : 'removed from cart',
        init : state.init - 1 ,
        initcard5 : state.initcard5 - 1 
      }
    ))
  }
  function handleClick11(event) {
    setState((state) => (
      {
       
        ...state ,
        x6 : 'added to cart ' ,
        y6:'remove from cart' ,
        init : state.init +1 ,
        initcard6 : state.initcard6 + 1
      }
    ))
  }
  
  function handleClick12(event)
  {
    setState((state) => (
      {
        ...state ,
        x6: 'add to cart' ,
        y6 : 'removed from cart',
        init : state.init - 1 ,
        initcard6 : state.initcard6 - 1
      }
    ))
  }
  return (
  <div >
    <div className='header'>
      <h1>
      Total items in cart ({state.init}) 
      </h1>
    </div>
    <div className='container'>
      <div className='card1'>
        <img src='pic1.png'></img>
        <div className='div-inside'> 
          <h3>Watch ( {state.initcard} in cart )</h3>
          <p>24$</p> 
          <button onClick={handleClick1}> {state.x} </button> <br/>
          <br/>
          <button onClick={handleClick2}> {state.y} </button>
        </div>
      </div>
      <div className='card1'>
        <img src='pic2.png'></img>
        <div className='div-inside'> 
          <h3>HeadPhone({state.initcard2} in cart)</h3>
          <p>15$</p> 
          <button onClick={handleClick3}>  {state.x2} </button> <br/>
          <br/>
          <button onClick={handleClick4}>  {state.y2} </button>
        </div>
      </div>
      <div className='card1'>
        <img src='pic3.png'></img>
        <div className='div-inside'> 
          <h3> Camera ( {state.initcard3} in cart )</h3>
          <p>88$</p> 
          <button onClick={handleClick5}> {state.x3} </button> <br/>
          <br/>
          <button onClick={handleClick6}> {state.y3} </button>
        </div>
      </div><div className='card1'>
        <img src='pic4.png'></img>
        <div className='div-inside'> 
          <h3> Sunglasses ( {state.initcard4} in cart )</h3>
          <p>8$</p> 
          <button onClick={handleClick7}> {state.x4} </button> <br/>
          <br/>
          <button onClick={handleClick8}> {state.y4} </button>
        </div>
      </div><div className='card1'>
        <img src='pic5.png'></img>
        <div className='div-inside'> 
          <h3> Bag ( {state.initcard5} in cart )</h3>
          <p>20$</p> 
          <button onClick={handleClick9}> {state.x5}</button> <br/>
          <br/>
          <button onClick={handleClick10}> {state.y5} </button>
        </div>
      </div><div className='card1'>
        <img src='pic6.png'></img>
        <div className='div-inside'> 
          <h3> Boot ( {state.initcard6} in cart )</h3>
          <p>40$</p> 
          <button onClick={handleClick11}> {state.x6} </button> <br/>
          <br/>
          <button onClick={handleClick12}> {state.y6} </button>
        </div>
      </div>
      
    </div>
    

  </div>
   
  );
}

export default App;
