import React from "react";
import "./Addvideo.scss";
import createfolder from "./TeacharRecordFolderApi";
import { useParams, Link } from "react-router-dom";

export default function Addvideo() {
  const { id } = useParams();

  // Find the folder with the matching id
  const folder = createfolder.find((folder) => folder.id === parseInt(id));

  if (!folder) {
    return <div>No folder found with ID: {id}</div>;
  }

  const { coursetitle } = folder;

  return (
    <div className="addvideo_container">
      <div className="addvideo_wrapper">
        <h1>Upload Video for:</h1>
        <p>{coursetitle}</p>

        <button className="vimeo_btn">
          <Link to="https://vimeo.com" id="vimeo_link" target="_blank">
            Upload video on Vimeo
          </Link>
          <img src="/vimeo.png" alt="" />
        </button>
      </div>
    </div>
  );
}
