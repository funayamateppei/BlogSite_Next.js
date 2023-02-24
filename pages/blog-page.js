import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

const Blog = ({ posts }) => {
  return (
    <div>
      <Layout title="Blog">
        <ul className="m-10">
          {posts && posts.map((post) => <Post key={post.id} post={post} />)}
        </ul>
      </Layout>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
