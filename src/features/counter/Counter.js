import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {

  const count = useSelector((state) => state.counter.count);
  const themeTextColor = useSelector((state)=>state.theme.textColor);
  const dispatch = useDispatch();

  return (
    <>
      <span className='value' style={{color:themeTextColor}}>Count: {count}</span>
      <div className='main'>
        <button className='button' aria-label='Increment value' onClick={() => { dispatch(increment()) }}>+</button>
        <button className='button' aria-label='Decrement value' onClick={() => { dispatch(decrement()) }}>-</button>
        <button className='button' style={{color:themeTextColor}} onClick={() => { dispatch(incrementByAmount(10)) }}>Increment By 10</button>
      </div>
    </>
  )
}

export default Counter