import { useState } from 'react'
import ActionButton from '../ActionButton'
import NumberDisplay from '../NumberDisplay'
import './style.css'
export default function DisplayScreen(){
    const [num,setNum] = useState(0)
    return(
        <>
        <div className="calculatorBody">
            <div>
                <NumberDisplay value = {num}/>
            </div>
            <div className='dialPad'>
                <div className='numPad'>
               <ActionButton onClick = {()=>{setNum('9')}} btn = {9}/>
               <ActionButton onClick = {()=>{setNum('8')}} btn = {8}/>
               <ActionButton onClick = {()=>{setNum(7)}} btn = {7}/>
               <ActionButton onClick = {()=>{setNum(6)}} btn = {6}/>
               <ActionButton onClick = {()=>{setNum(5)}} btn = {5}/>
               <ActionButton onClick = {()=>{setNum(4)}} btn = {4}/>
               <ActionButton onClick = {()=>{setNum(3)}} btn = {3}/>
               <ActionButton onClick = {()=>{setNum(2)}} btn = {2}/>
               <ActionButton onClick = {()=>{setNum(1)}} btn = {1}/>
               <ActionButton onClick = {()=>{setNum(0)}} btn = {0}/>
                </div>
            </div>
        </div>
        </>
    )
}