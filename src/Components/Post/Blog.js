import React from "react";

const Blog = ({ post, setModalPost }) => {
  console.log(post);
  const { description, username, votes, modalPost } = post;

  const title = description.slice(0, 30);
  const handleOpenModal = () => {
    setModalPost(description);
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
                  {title}
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
                  className='btn text-black border-none bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-300'
                  onClick={handleOpenModal}>
                  update
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
