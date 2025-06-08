import { useAuth0 } from "@auth0/auth0-react";
import DownloadPDF from "./DownloadPdf.jsx";
import SaveRecipe from "./SaveRecipe.jsx";

export default function Recipe({ recipe = "" }) {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="flex flex-col p-2 m-2">
      <label className="text-4xl mb-2 font-bold font-[Cursive]">
        Here&apos;s your recipe:
      </label>
      <div className="bg-blue-100 p-2 rounded-lg flex flex-row">
        <DownloadPDF recipe={recipe} />
        {isAuthenticated && <SaveRecipe recipe={recipe} />}
        <button className="recipe_button">
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
}
