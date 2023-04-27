import React from "react";
import Layout from "../components/Layout";
import axios from "axios";

const FileShow = ({ images }) => {
  return (
    <Layout title="File Show">
      FileShow
      <div className="flex flex-wrap">
        {images
          ? images.map((image, index) => (
              <img
                key={index}
                className="w-24 h-24 object-cover border"
                // src={`http://localhost${image.path}`}
                src={`https://funamushibucket.s3.ap-southeast-1.amazonaws.com/${image.path}`}
                alt="file"
              />
            ))
          : null}
      </div>
    </Layout>
  );
};

export default FileShow;

export async function getStaticProps() {
  const res = await axios.get("http://localhost/api/file/show");
  return {
    props: {
      images: res.data,
    },
  };
}
