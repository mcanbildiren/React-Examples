import React from 'react'
import Search from './components/Search'
import youtube from './Apis/Youtupe' 
 
const GetText = async (text) => {
  const response = await youtube.get('/search', {
    params: {
      q: text
    }
  });
  console.log(response)
}
export default function App() {
  return (
    <div>
      <Search GetText = {GetText}/>
      </div>
  )
}