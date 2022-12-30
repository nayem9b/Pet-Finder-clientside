import React from "react";
import PostBlog from "../Post/PostBlog";
import Profile from "../Profile/Profile";

const Home = () => {
  return (
    <div>
      <div className='flex'>
        <div className='w-1/3'>
          <Profile></Profile>
        </div>
        <PostBlog classname='w-2/3'></PostBlog>
      </div>
    </div>
  );
};

export default Home;
