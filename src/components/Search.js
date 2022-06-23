import React from 'react'
import { useState } from 'react'

export default function Search({GetText}) {
    const [text, setText ] = useState('')
   const  onTextChange =(e)=>{
    setText(e.target.value)
  //  console.log(text)
   }
   const Submit= (e)=> {
    e.preventDefault()
    GetText(text)
   }
    return (
      <div className="col-md-5">
          <form onSubmit={Submit} >
              <div className="form-group">
                  <label>Search</label>
                  <input className="form-control "
                      type="text"  
                     value={text}  onChange= {onTextChange}/>
              </div>
          </form>
      </div>
  )
    }