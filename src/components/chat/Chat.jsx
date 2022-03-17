import { useEffect } from 'react';
import { ChatConfigContextProvider } from './../../context/chatConfigContext';
import useAppReducer from '../../hooks/useAppReducer';
import ChatTerminal from './chat-terminal';
import ResizeColumn from './ResizeColumn';
import ChatSidebar from './sidebar';

function Chat({ params }) {

  useEffect(() => {
    //document.head.title = '';
  })

  return (
    <ChatConfigContextProvider>
      <ChatSidebar/>
      <ResizeColumn/>
      <ChatTerminal params={params}/>
    </ChatConfigContextProvider>
  )
}

export default Chat;