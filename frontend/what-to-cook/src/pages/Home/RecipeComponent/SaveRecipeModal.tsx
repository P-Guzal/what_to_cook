import getApiUrl from "@/utils/getApiUrl.js";
import useUserToken from "@/hooks/useUserToken.js";

export default function SaveRecipeModal({ onClose, recipe }) {
//   const UserToken = useUserToken();
  const ApiUrl = getApiUrl();

  async function formAction(formData) {
      if (!apiUrl) return;

    formData.append("recipe", recipe);

    await fetch(`${ApiUrl}add_recipe/`, {
      method: "POST",
//       headers: {
//         Authorization: `Bearer ${UserToken}`,
//       },
      body: formData,
    });
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="p-2 bg-blue-300 rounded-lg max-w-xl max-h-xl border border-8 border-rose-200">
        <h2 className="text-xl font-bold mb-4 text-center">Save your recipe</h2>
        <form action={formAction} className="m-2">
          <label>
            Name your recipe:
            <input type="text" name="title" className="m-2 rounded-lg" />
          </label>
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="bg-blue-100 m-2 rounded-lg p-1"
            >
              Close
            </button>
            <button type="submit" className="bg-blue-100 m-2 rounded-lg p-1">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
