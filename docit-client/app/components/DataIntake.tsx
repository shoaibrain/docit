'use client'

import React, { useState } from 'react';

const DataIntake = () => {
  const [jsonData, setJsonData] = useState('');

  const handleInputChange = (event) => {
    setJsonData(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Process the JSON data as needed
    try {
      const parsedData = JSON.parse(jsonData);
      console.log('Parsed JSON data:', parsedData);

      //call the api
      
    } catch (error) {
      console.error('Invalid JSON input:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="jsonInput">JSON Data:</label>
        <textarea
          id="jsonInput"
          value={jsonData}
          onChange={handleInputChange}
          rows={15}
          cols={50}
        ></textarea>
       <button class="px-6 py-2 my-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    Submit
</button>
      </form>
    </div>
  );
};

export default DataIntake;
