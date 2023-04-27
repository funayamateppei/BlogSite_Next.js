import React from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useState } from "react";

const FileUpload = () => {
  const [image, setImage] = useState();

  const handleInputChange = (e) => {
    setImage(e.target.files[0]);
    console.log(image);
  };

  const fileSubmit = async () => {
    const data = new FormData();
    data.append("image", image);
    // API通信
    try {
      const response = await axios.post(
        "http://localhost/api/file/upload",
        data,
        {
          headers: { "content-type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        window.location.href = "/file-show-page";
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };

  // const test = async () => {
  //   // API通信
  //   const response = await axios.get("http://localhost/api/test", { withCredentials: true });
  //   console.log(response.data);
  // };

  return (
    <Layout title="File Upload">
      FileUpload-Page
      <input type="file" accept=".png,.jpg" onChange={handleInputChange} />
      <button
        className={`border px-3 py-1 border-black ${
          image ? "bg-gray-200" : "bg-gray-400"
        }`}
        onClick={fileSubmit}
        disabled={image ? false : true}
      >
        送信
      </button>
    </Layout>
  );
};

export default FileUpload;
