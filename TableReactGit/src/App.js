import React from 'react';
import Table from './components/Table';


function App() {
const data = [
  {
    "id":"1",
    "Name": "Kabir Roy",
    "Address" : "Punjab, 10923",
    "Date" : "07/11/2022",
    "Orderno":"875285864356"
  },

  {
    "id":"2",
    "Name": "Rudra Singh",
    "Address" : "Mumbai, 68638",
    "Date" : "07/11/2022",
    "Orderno":"875285864765"
  },

  {
    "id":"3",
    "Name": "Arjun Das",
    "Address" : "Kolkata, 30577",
    "Date" : "07/10/2022",
    "Orderno":"875285864811"
  },

  {
    "id":"4",
    "Name": "Dhruv Singh",
    "Address" : "Punjab, 10921",
    "Date" : "07/09/2022",
    "Orderno":"875285864399"
  },

  {
    "id":"5",
    "Name": "Rudra Sai",
    "Address" : "Pune, 10900",
    "Date" : "07/07/2022",
    "Orderno":"875285864390"
  },

  {
    "id":"6",
    "Name": "Reyan Singh",
    "Address" : "Bhupal, 10931",
    "Date" : "07/05/2022",
    "Orderno":"875285864091"
  }


]


  return (
    <div>
     <Table items={data} />
    </div>
  );
}

export default App;
