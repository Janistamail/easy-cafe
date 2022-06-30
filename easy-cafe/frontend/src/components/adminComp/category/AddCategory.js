import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function AddCategory(){
    
    const [category_name,setCategory] = useState('');

    const handleSubmit = async event =>{
        // event.preventDefault();

        const formData = new FormData();
            formData.append("category_name",category_name);
            console.log(formData);
            console.log("category name"+category_name);

        await axios.post("admins/category/add",formData);

    }
    return(
    <div className="flex justify-center mt-24">
        <div className="mt-2 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-1">
            <div className="mt-2 md:mt-0 md:col-span-2">
              <form onSubmit={handleSubmit} className="mt-2 md:mt-0">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-home space-y-2 sm:p-6">
                      
                    <div class="col-span-6 sm:col-span-3 ">
                        <label for="category_name" class="block text-sm font-medium text-gray-300">Category Name</label>
                        <input onChange={(e)=>setCategory(e.target.value)} type="text" name="category_name" id="category_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>

                    <div class="col-span-6 sm:col-span-3 ">
                        <button type='submit' class="bg-green-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                            ADD
                        </button>
                    </div>
                        
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>

    )
}

export default AddCategory;
