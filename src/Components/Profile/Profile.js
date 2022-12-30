import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const handleCreatePost = (event) => {
    event.preventDefault();
    const form = event.target;
    const post = form.post.value;
    console.log(post);
    form.reset();
  };
  return (
    <div className='border-r-2'>
      <label for='message' class='block mb-2 text-sm font-medium '>
        What's in your mind?
      </label>
      <form onSubmit={handleCreatePost}>
        <textarea
          id='message'
          name='post'
          rows='4'
          class='block p-2.5 w-3/5 text-sm  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Create a post...'></textarea>
        <button className='rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white'>
          Post
        </button>
      </form>
    </div>
  );
};

export default Profile;
