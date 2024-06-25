import React, { useEffect } from 'react'

function createConnection(){
    //imitating that
    return {
        connect(){
            console.log('✅ Connecting...')
        },
        disconnect(){
            console.log('❌ Disconnected...')
        }
    }
}

function ChatRoom() {


    //create a connection to the chat
    useEffect(() => {
        //create a new connection
       const connection =  createConnection();
       console.log(connection)
       connection.connect();

       //currently we r in development mode
       //with strict mode react quickly remounts every component immediately after its intial mount

       //Problem
       //code does not close connection when the component un mounts

       return () => {
        // console.log('ChatRoom will unmount ')
        connection.disconnect();
        //react calls cleanup func each time a effect runs again
       }
    
    }, [])

  return (
    <div>
        <h1>Welcome to the chat</h1>
    </div>
  )
}

export default ChatRoom