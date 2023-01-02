import { async } from "@firebase/util";
import React from "react";

const Blog = ({ post, setModalPost, setFinder_id, setPosts, posts }) => {
  console.log(post);
  const { description, username, votes, modalPost, finder_id } = post;

  // const title = description.slice(0, 30);
  const handleOpenModal = () => {
    setModalPost(description);
    setFinder_id(finder_id);
  };

  // Delete the post
  const handleDeletePost = async (id) => {
    try {
      const deleteThePost = await fetch(`https://petfinderserver-nayem9b.vercel.app/posts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      console.log("I have worked");

      setPosts(posts.filter((post) => post.finder_id !== id));
    } catch (error) {}
  };

  // Post a comment
  const handlePostComment = async (event) => {
    event.preventDefault();
    const form = event.target;
    const newComment = form.comment.value;

    const comment = {
      comment: newComment,
    };
    fetch("https://petfinderserver-nayem9b.vercel.app/comments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
    form.reset();
  };
  return (
    <div>
      <section class='text-gray-600 body-font overflow-hidden'>
        <div class='container px-5 py-24 mx-auto'>
          <div class='-my-8 divide-y-2 divide-gray-100'>
            <div class='py-8 flex flex-wrap md:flex-nowrap'>
              <div class='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                <span class='font-semibold title-font text-gray-700'>
                  CATEGORY
                </span>
                <span class='mt-1 text-gray-500 text-sm'>12 Jun 2019</span>
              </div>
              <div class='md:flex-grow'>
                <h2 class='text-2xl font-medium text-gray-900 title-font mb-2'>
                  {/* {title} */}
                </h2>
                <p class='leading-relaxed'>{description}</p>
                <a class='text-indigo-500 inline-flex items-center mt-4'>
                  Learn More
                  <svg
                    class='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'>
                    <path d='M5 12h14'></path>
                    <path d='M12 5l7 7-7 7'></path>
                  </svg>
                </a>
                <label
                  htmlFor='updatingmodal'
                  className='btn btn-primary'
                  onClick={handleOpenModal}>
                  update
                </label>
                <button
                  className='btn btn-error'
                  onClick={() => handleDeletePost(finder_id)}>
                  Delete
                </button>

                <form onSubmit={handlePostComment}>
                  <label for='chat' class='sr-only'>
                    Your message
                  </label>
                  <div class='flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700'>
                    <button
                      type='button'
                      class='inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'>
                      <svg
                        aria-hidden='true'
                        class='w-6 h-6'
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
                    <button
                      type='button'
                      class='p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'>
                      <svg
                        aria-hidden='true'
                        class='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fill-rule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z'
                          clip-rule='evenodd'></path>
                      </svg>
                      <span class='sr-only'>Add emoji</span>
                    </button>
                    <textarea
                      id='chat'
                      rows='1'
                      name='comment'
                      class='block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Your message...'></textarea>
                    <button
                      type='submit'
                      class='inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600'>
                      <svg
                        aria-hidden='true'
                        class='w-6 h-6 rotate-90'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
                      </svg>
                      <span class='sr-only'>Send message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
