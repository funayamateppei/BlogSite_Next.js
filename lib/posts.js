import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  const res = await axios.get(url);
  return res.data;
}

export async function getAllPostIds() {
  const res = await axios.get(url);
  return res.data.map((post) => {
    return {
      params: {
        id: String(post.id),
      }
    }
  });
}

export async function getPostData(id) {
  const res = await axios.get(`${url}/${id}/`);
  return { post: res.data };
}