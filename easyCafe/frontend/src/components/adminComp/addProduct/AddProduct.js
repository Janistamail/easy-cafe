import React from 'react'

function AddProduct() {

  
  return (
    // <div style={{ paddingTop: "100px", padding: "10px"}}>
      <div className="flex justify-center mt-24">
        <div className="mt-2 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-1">
            <div className="mt-2 md:mt-0 md:col-span-2">
              <form className="mt-2 md:mt-0">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-home space-y-2 sm:p-6">
                    <fieldset >
                    {/* <div className="flex items-center"> */}
                      
                            <div class="col-span-6 sm:col-span-3 ">
                              <label for="product-name" class="block text-sm font-medium text-gray-700">Product Name</label>
                              <input type="text" name="product-name" id="product-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                          
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload Photo</label>
                            <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF .</p>
                        

                       
                          <div class="col-span-6 sm:col-span-3 ">
                            <label for="hot-price" class="block text-sm font-medium text-gray-700">Hot Price</label>
                            <input type="text" name="hot-price" id="hot-price" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                          </div>
                          

                            <div class="flex justify-center">
                              <div class="mb-3 xl:w-96">
                                <select class="form-select appearance-none
                                  block
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding bg-no-repeat
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                    <option selected>Category</option>
                                    <option name="category" value="1">One</option>
                                    <option name="category" value="2">Two</option>
                                    <option name="category" value="3">Three</option>
                                </select>
                              </div>
                            </div>
                       
                          
                        
                          <div class="col-span-6 sm:col-span-3 ">
                            <label for="iced-price" class="block text-sm font-medium text-gray-700">Iced Price</label>
                            <input type="text" name="iced-price" id="iced-price" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                          </div>
                        
                          <div class="col-span-6 sm:col-span-3 ">
                            <label for="frappe-price" class="block text-sm font-medium text-gray-700">Frappe Price</label>
                            <input type="text" name="frappe-price" id="frappe-price" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                          </div>
                        
   
                      {/* </div>     */}
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      
  </div>
  )
}

export default AddProduct;
