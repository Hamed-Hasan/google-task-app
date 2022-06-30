import React from 'react';
import './CompletedTask.css'
const CompletedTask = () => {
    return (
        <div>
         <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/3"
            style={{  
                backgroundImage: "url(" + "https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
         >
                <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 class="text-4xl font-bold text-white">WRITING TASK STATEMENTS FOR ENDA GAME
</h2>
                        
                        <p class="max-w-xl mt-3 text-gray-300">Task analysis describes in a way that is definable, measurable and communicable the basic units of work that are performed in A job. The task as a part of function, is defined as an action or sequence of actions that contributes significantly to the completion of a specific work objective</p>
                    </div>
                </div>
            </div>
            
            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">TASK</h2>
                        
                        <p class="mt-3 text-gray-500 dark:text-gray-300">ADD YOUR TASK</p>
                    </div>

                    <div class="mt-8">
                    <form action="">
                        <div class="input-field">
                            <input type="text" id="name" required />
                            <label for="name">Your Note:</label>
                        </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default CompletedTask;