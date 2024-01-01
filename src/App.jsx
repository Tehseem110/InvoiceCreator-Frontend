import { useState } from 'react';
import './App.css';
import CreateInvoce from './Components/CreateInvoice/CreateInvoce';

function App() {
  /// local state
  const [newInvoice, setNewInvoice] = useState(false);

  /// handler
  const handleOpenCreateInvoice = () => {
    setNewInvoice(true);
  };

  return (
    <div className="h-screen w-screen bg-[#064e3b] flex">
      <div className=" bg-[#064e3b] h-full w-[60%] flex justify-center items-center p-5">
        {/* {newInvoice ? (
          <CreateInvoce />
        ) : (
          <div
            className="bg-white p-4 text-xl  rounded-lg cursor-pointer"
            onClick={handleOpenCreateInvoice}
          >
            Create New Invoice
          </div>
        )} */}
        <CreateInvoce />
      </div>
      <div className="bg-white p-5  h-full w-[40%] flex justify-center items-center">
        <div className="bg-[#064e3b] p-4 text-white text-xl rounded-lg cursor-pointer">
          No History
        </div>
      </div>
    </div>
  );
}

export default App;
