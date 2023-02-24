import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  const res = await axios.get(url);
  return res.data;
}