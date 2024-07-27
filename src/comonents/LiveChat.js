import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { MdCancel } from 'react-icons/md';
import io from 'socket.io-client';
import { CSSTransition } from 'react-transition-group';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../styles/LiveChat.css'; // Import CSS for the animation

const socket = io('http://localhost:3000'); // Replace with your server URL

const predefinedMessages = [
  "Welcome to our hospital's live chat! How can we assist you today?",
  "Our doctors are here to provide the best care for you.",
  "Please provide your medical record number for more detailed assistance.",
  "Can you describe your symptoms in more detail?",
  "Have you visited our hospital before?",
  "Our support team will reach out to you shortly.",
  "Are you experiencing any pain or discomfort?",
  "Do you have any allergies we should be aware of?",
  "What medications are you currently taking?",
  "When was your last visit to a healthcare provider?",
  "Do you have a preferred time for scheduling an appointment?",
  "Can we assist you with any insurance-related questions?",
  "Our specialist will be with you shortly.",
  "Please provide your contact information for follow-up.",
  "We are here to help you with any medical inquiries you may have.",
  "Is there anything else we can do for you today?",
];

const adminContactMessage = "For further inquiries, please contact our admin at admin@hospital.com or call +1234567890.";

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true); // State to control welcome message
  const [playSound, setPlaySound] = useState(false); // State to control sound playback
  const messagesEndRef = useRef(null);
  const welcomeRef = useRef(null);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    if (playSound) {
      const audio = new Audio('/sounds/mixkit-correct-answer-tone-2870.wav'); // Adjust path if needed
      audio.play().catch(err => {
        console.error("Error playing audio: ", err);
      });
      setPlaySound(false); // Reset state after playing sound
    }
  }, [playSound]);

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setPlaySound(true); // Trigger sound play after welcome message
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('message', input);
      setMessages((prevMessages) => [...prevMessages, { user: 'You', text: input }]);
      setInput('');

      setTimeout(() => {
        const randomMessage = predefinedMessages[Math.floor(Math.random() * predefinedMessages.length)];
        setMessages((prevMessages) => [...prevMessages, { user: 'Hospital', text: randomMessage }]);

        if (messages.length >= 5) { // Adjust the number as needed
          setMessages((prevMessages) => [...prevMessages, { user: 'Hospital', text: adminContactMessage }]);
        }
      }, 1000); // Adjust the delay as needed
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed
  };

  const handleCancel = () => {
    setIsOpen(false);
    setInput('');
  };

  return (
    <div>
      {/* Chat Icon */}
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faComments} size="lg" />
      </button>

      {/* Welcome Message */}
      <CSSTransition
        nodeRef={welcomeRef}
        in={showWelcome}
        timeout={3000}
        classNames="tooltip"
        unmountOnExit
      >
        <div ref={welcomeRef} className="fixed bottom-24 right-4 bg-green-500 text-white p-2 rounded-lg shadow-lg animate-bounce">
          Hello! Welcome. How can we help you today?
        </div>
      </CSSTransition>

      {/* Chat Window */}
      {isOpen && !isLoading && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col p-4">
          {/* Cancel Button */}
          <button
            className="absolute top-2 right-2 text-red-500"
            onClick={handleCancel}
          >
            <MdCancel size={24} />
          </button>

          <div className="flex-1 overflow-auto mb-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 p-2 rounded-lg ${message.user === 'You' ? 'bg-blue-200 self-end' : 'bg-gray-300 self-start'}`}>
                <strong>{message.user}:</strong> {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-l-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
            />
            <button
              className="p-2 bg-blue-500 text-white rounded-r-lg"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Skeleton Loader */}
      {isLoading && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col p-4">
          <div className="flex-1 overflow-auto mb-4">
            <Skeleton height={40} count={6} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;