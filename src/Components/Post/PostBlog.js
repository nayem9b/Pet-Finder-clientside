import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Blog from "./Blog";

const PostBlog = () => {
  const [posts, setPosts] = useState([]);
  const [modalPost, setModalPost] = useState("");
  const [finder_id, setFinder_id] = useState();
  console.log(modalPost, finder_id);
  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://petfinderserver-nayem9b.vercel.app/posts"
      );
      const jsonData = await response.json();
      setPosts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Blog
          post={post}
          setModalPost={setModalPost}
          modalPost={modalPost}
          setFinder_id={setFinder_id}
          posts={posts}
          setPosts={setPosts}></Blog>
      ))}
      <Modal modalPost={modalPost} finder_id={finder_id}></Modal>
    </div>
  );
};

export default PostBlog;
