import { useState } from "react";

const CostCalculator = () => {
  const [services, setServices] = useState([""]);
  const [cost, setCost] = useState(null);

  const handleInputChange = (index, event) => {
    const values = [...services];
    values[index] = event.target.value;
    setServices(values);
  };

  const handleAddService = () => {
    setServices([...services, ""]);
  };

  const handleRemoveService = (index) => {
    const values = [...services];
    values.splice(index, 1);
    setServices(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let totalCost = 0;
    try {
      const response = await fetch("https://azure-backend-heroku-8b748ef2178e.herokuapp.com/api/prices");
      const data = await response.json();
      console.log("response data: ", data);

      for (let service of services) {
        console.log("service ", service);

        const serviceData = data.find((item) =>
          item.productName?.toLowerCase()?.includes(service?.toLowerCase())
        );
        console.log("serviceData: ", serviceData);
        if (serviceData) {
          totalCost += serviceData.retailPrice;
        }
      }
    } catch (error) {
      console.log("error:: ", error);
    }

    setCost(totalCost);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1 className="text-4xl font-bold max-sm:text-3xl">Azure Cost <span className="text-green-500">Calculator</span></h1>
      <form onSubmit={handleSubmit} className="border-2 border-black border-dotted p-10 px-20 max-md:px-5 rounded-xl">
        {services.map((service, index) => (
          <div key={index} className="flex flex-row gap-5 mb-2">
            <input
              type="text"
              value={service}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Enter service name"
              required
              className="border-2 border-black rounded-md p-2 bg-gray-100 text-green-800 w-72"
            />
            <button type="button" onClick={() => handleRemoveService(index)} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
              Remove
            </button>
          </div>
        ))}
        <div className="flex flex-row gap-7 pt-5 justify-center">
          <button type="button" onClick={handleAddService} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Add Another Service
          </button>
          <button type="submit" className="bg-gray-700 text-white px-9 py-2 rounded-lg hover:bg-gray-950">Calculate Cost</button>
        </div>
      </form>
      {cost !== null && <h2 className="text-2xl max-sm:text-xl font-semibold">Total Cost: <span className="text-green-500 "> ${cost.toFixed(2)}</span> per hour</h2>}
    </div>
  );
};

export default CostCalculator;
