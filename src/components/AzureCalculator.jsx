import { useState, useEffect } from 'react';


function AzureCalculator() {
    const [quote, setQuote] = useState("");
    const [block, setBlock] = useState([]);

    useEffect(() => {

        const fetchPrice = async() => {
            try {
                const response = await fetch(`https://prices.azure.com/api/retail/prices`, { headers: { 'Content-Type': 'application/json' }});
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching price:', error);
            }
        }
        
        fetchPrice();
    }, [])
  
  return (
    <div className="h-screen w-full">
      <p>Pricing here</p>
     
    </div>
  )
}

export default AzureCalculator
