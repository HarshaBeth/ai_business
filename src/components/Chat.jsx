import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Chat({formData}) {
  const [cmessages, setCMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  
 

  const startMessage = () => {
    setInput('Generate an azure cloud architecture diagram using reactflow and react-az-icons ex. AzVirtualMachine, and name the file App.js. Under the icon should be the azure service and it\'s sku\n' +
              'Business Objective: \n' + 
              formData[0] +
              '\nBusiness Capacity: \n' +
              formData[1] +
              '\nScalability: \n' +
              formData[2] +
              '\nContinuity: \n' +
              formData[3] +
              '\nBusiness Guildelines: \n' +
              formData[4] +
              '\n\n Give me the name of the Azure services between brackets.'
            );
    
    setStarted(true);
  }
  
  const sendMessage = async () => {

    let itemsCopy = [...cmessages, {role: 'user', content: input}];
      
    setCMessages(prevMessages => [...prevMessages, { role: 'user', content: input }]);
    
    
    setInput('');
    setTyping(true);
    try{
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: itemsCopy,
          max_tokens: 1400,
          temperature: 0.7
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          }
        }
      );

      setCMessages(prevMessages => [...prevMessages, { role: 'system', content: response.data.choices[0].message.content }]);
      itemsCopy = [...cmessages, {role: 'system', content: response.data.choices[0].message.content }];
      setTyping(false);
    } catch(error) {
      console.error('Open AI error: ', error);
    }

    
    
  }
  
  return (
    <div className='h-screen w-full flex flex-row max-lg:flex-col justify-center items-center gap-3 max-xl:gap-0' id='Chat'>
      
      <div className='text-6xl w-[420px] font-serif max-xl:text-3xl max-xl:w-[220px] max-lg:w-fit'>
        Get Your <span className='text-green-500'>Feedback</span> Here:
      </div>

      <div className='h-[550px] w-[800px] max-lg:w-[80%] border-4 rounded-xl border-gray-400 px-5 pt-4'>

        {/* Chat history */}
        {formData[0] === undefined ? 
          (
          <div className='h-[85%] w-full flex justify-center items-center text-6xl font-serif max-lg:text-4xl max-sm:text-2xl'>
            Submit the Form First
          </div>
          ) : (
        <div className='h-[85%] w-full overflow-y-auto px-1.5'>
            {cmessages.map((message, index) =>(
              <div key={index} className='flex flex-row gap-1 items-center py-1'>
                <span className={`bg-black text-gray-100 rounded-full py-3 font-serif 
                ${message.role === 'system' ? 'px-3.5':'px-3 bg-green-800'}`}>
                  {message.role == 'user'? 'Me': 'AI'}
                  </span>

                <span className={`bg-gray-400 rounded-2xl w-fit py-3 px-1.5 font-sans 
                ${message.role === 'system' ? 'bg-green-500 text-white' : 'bg-white text-black'}`}>
                 {message.content}
                </span>
              </div>
            ))}

            <span className={`${typing ? 'block': 'hidden'} font-mono italic`}>AI is typing...</span>
        </div>
        )}

        <hr />
        <div className='flex flex-row justify-center items-center h-[15%]  gap-2'>
            
            <textarea type="text"
              rows={1}
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder='Type a message...'
              className='border-2 border-black rounded-lg p-2 bg-gray-100 w-96'
              required
              disabled={formData[0] === undefined ? true : false}
            />
            <button type='submit' onClick={sendMessage} 
              className={` px-4 py-2.5 rounded-full  transition-all 
              ${input === "" ? 
              'cursor-not-allowed bg-gray-300 text-white'
              : 
              'bg-green-400 hover:bg-green-500 block'} ${started ? 'block' : 'hidden'}`}      
              disabled = {input === '' ? true : false}
              >
              Send
            </button>

            <button 
            type='submit'
            onClick={startMessage}
            className={` px-4 py-2.5 rounded-full  transition-all max-sm:text-sm max-md:px-2
                        ${started ? 'hidden' : 'block'} 
                        ${formData[0]===undefined ? 'cursor-not-allowed bg-gray-300 text-white' : 'animate-bounce bg-green-400 hover:bg-green-500 block'}`}
            disabled = {formData[0]===undefined ? true : false}
            >
              Click to Start
            </button>
        </div>

      </div>
    </div>
  )
}

export default Chat
