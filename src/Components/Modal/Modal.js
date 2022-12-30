import React from "react";

const Modal = ({ modalPost, finder_id }) => {
  const handleUpdatePost = async (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedPost = form.updatedPost.value;
    const post = { updatedPost };

    try {
      fetch(`http://localhost:5000/posts/${finder_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <input type='checkbox' id='updatingmodal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>
            Congratulations random Internet user!
          </h3>
          <p className='py-4'>{modalPost}</p>
          <form onSubmit={handleUpdatePost}>
            <div class='w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600'>
              <div class='px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800'>
                <label for='comment' class='sr-only'>
                  Your comment
                </label>
                <textarea
                  id='comment'
                  rows='4'
                  name='updatedPost'
                  class='w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400'
                  placeholder='Write a comment...'
                  required></textarea>
              </div>
              <div class='flex items-center justify-between px-3 py-2 border-t dark:border-gray-600'>
                <button
                  type='submit'
                  htmlFor='updatingmodal'
                  value='Submit'
                  class='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800'>
                  Post comment
                </button>

                {/* <input
                    htmlFor='updatingmodal'
                    className='btn bg-indigo-700 hover:bg-indigo-800 w-full'
                    type='submit'
                    value='Submit'
                  /> */}
                <div class='flex pl-0 space-x-1 sm:pl-2'>
                  <button
                    type='button'
                    class='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'>
                    <svg
                      aria-hidden='true'
                      class='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fill-rule='evenodd'
                        d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
                        clip-rule='evenodd'></path>
                    </svg>
                    <span class='sr-only'>Attach file</span>
                  </button>
                  <button
                    type='button'
                    class='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'>
                    <svg
                      aria-hidden='true'
                      class='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fill-rule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clip-rule='evenodd'></path>
                    </svg>
                    <span class='sr-only'>Set location</span>
                  </button>
                  <button
                    type='button'
                    class='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'>
                    <svg
                      aria-hidden='true'
                      class='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fill-rule='evenodd'
                        d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                        clip-rule='evenodd'></path>
                    </svg>
                    <span class='sr-only'>Upload image</span>
                  </button>
                </div>
              </div>
            </div>

            <p class='ml-auto text-xs text-gray-500 dark:text-gray-400'>
              Remember, contributions to this topic should follow our{" "}
              <a
                href='#'
                class='text-blue-600 dark:text-blue-500 hover:underline'>
                Community Guidelines
              </a>
              .
            </p>

            <div className='modal-action'>
              <label
                htmlFor='updatingmodal'
                className='btn btn-sm btn-circle absolute right-2 top-2'>
                ✕
              </label>

              {/* <input
                htmlFor='updatingmodal'
                className='btn bg-indigo-700 hover:bg-indigo-800 w-full'
                type='submit'
                value='Submit'
              /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
