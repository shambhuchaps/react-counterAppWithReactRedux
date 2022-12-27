import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeTextColor } from './themeSlice';

const Theme = () => {

   const [textColor, settextColor] = useState('white')

   const dispatch = useDispatch();
   const themeTextColor = useSelector((state)=>state.theme.textColor);

  return (
   <div>
    <input style={{color:themeTextColor}} className='textbox' type="text" placeholder='Enter color name ' onChange={(e)=> settextColor(e.target.value)}/>
    <button className='button' style={{color:themeTextColor}} onClick={()=>{dispatch(changeTextColor(textColor))}}>Change Text Color</button>
   </div>
  )
}

export default Theme