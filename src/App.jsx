import { useState, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import { ChatInput } from "./components/ChatInput"; 
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
    const [chatMessages, setChatMessages] = useState(
        JSON.parse(localStorage.getItem('messages')) || []);
    
    useEffect(() => {
        Chatbot.addResponses({
            'goodbye': 'Goodbye. Hve a great day!',
            'give me a unique id': function() {
                return `Sure! Here's a unique ID: ${crypto.randomUUID()}`; 
            },
            'what is your name?': 'I am SuperSimpleDev Chatbot!',
            'What is my name?': 'Your name is Trung Nguyen'
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(chatMessages));
    }, [chatMessages]); 

    return (
        <div className="app-container">
            {chatMessages.length === 0 && (
                <h2>
                    Welcome to the chatbot project! Send a message using the textbox
                    below.
                </h2>
            )}
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

export default App;
