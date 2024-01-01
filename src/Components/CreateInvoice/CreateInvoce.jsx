import React, { useState } from 'react';

const CreateInvoce = () => {
  const [productCount, setProductCount] = useState([{}]);
  return (
    <div className="bg-[#cbd5e1] h-full w-full rounded-xl flex flex-col p-2">
      <div className="w-full h-[30%] flex">
        <div className="imgContainer">
          <input type="file" />
        </div>
        <div className="infoContainer">
          <div>Your Company Info</div>
          <div>Customer Info</div>
        </div>
      </div>
      <div className="w-full h-[70%]">
        <div className="w-full flex justify-center items-center">
          {' '}
          <div className="custom-number-input h-10 w-32">
            <label
              for="custom-input-number"
              class="w-full text-gray-700 text-sm font-semibold"
            >
              Add Product
            </label>
            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
              <button
                data-action="decrement"
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
              >
                <span class="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="number"
                class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 "
                name="custom-input-number"
                value="0"
              ></input>
              <button
                data-action="increment"
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
              >
                <span class="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto rounded-xl mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Sno
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  3
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoce;
