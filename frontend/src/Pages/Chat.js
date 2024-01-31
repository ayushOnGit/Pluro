import React, { useEffect } from 'react'
import axios from 'axios'

const Chat = () => {

  const fetchData = async ()=>{
    const {data} = await axios.get("/api/chat")
    console.log(data)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>Chat</div>
  )
}

export default Chat