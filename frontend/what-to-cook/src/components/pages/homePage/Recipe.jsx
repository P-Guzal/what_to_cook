import React from "react";
import DownloadPDF from "./DownloadPdf.jsx";
const Recipe = ({ recipe = "" }) => {
  return (
    <div className="flex flex-col p-2 m-2">
      <label className="text-4xl mb-2 font-bold font-[Cursive]">
        Here&apos;s your recipe:
      </label>
      <div className="bg-blue-100 p-2 rounded-lg flex flex-row">
        <DownloadPDF />
        <button className="m-2 p-2 bg-blue-200 rounded-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </button>
        <button className="m-2 p-2 bg-blue-200 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>

      <textarea
        className="bg-red-100 rounded-lg text-2xl p-2 "
        rows={6}
        value={recipe}
        readOnly={true}
      ></textarea>
    </div>
  );
};
export default Recipe;
