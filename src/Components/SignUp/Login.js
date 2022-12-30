import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <header class='bg-gray-900 pattern'>
        <div class='container px-6 mx-auto'>
          <div class='flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row'>
            <div class='lg:w-1/2'>
              <h2 class='text-3xl font-semibold text-gray-100 lg:text-4xl'>
                Brand
              </h2>

              <h3 class='mt-2 text-2xl font-semibold text-gray-100'>
                Hello <span class='text-blue-400'>Guest</span>
              </h3>

              <p class='mt-4 text-gray-100'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
                eum modi incidunt adipisci quod porro et non exercitationem
                quasi, maxime culpa ut nemo ab delectus saepe iste nostrum
                explicabo a?
              </p>
            </div>

            <div class='flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0'>
              <div class='w-full max-w-md bg-white rounded-lg '>
                <div class='px-6 py-8 text-center'>
                  <h2 class='text-2xl font-semibold '>Log In</h2>

                  <form action='#'>
                    <div class='mt-4'>
                      <input
                        class='block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-600 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                        type='email'
                        placeholder='Email address'
                        aria-label='Email address'
                      />
                      <input
                        class='mt-4 block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-600 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                        type='password'
                        placeholder='Password'
                        aria-label='Password'
                      />
                    </div>

                    <div class='flex items-center justify-between mt-4'>
                      <a href='#' class='text-sm 0 hover:underline'>
                        Forget Password?
                      </a>

                      <button class='px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'>
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Login;
