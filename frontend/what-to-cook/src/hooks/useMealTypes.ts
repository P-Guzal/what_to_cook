import { useState, useEffect } from "react";
import getApiUrl from "@/utils/getApiUrl";

export default function useMealTypes() {
  const [mealTypes, setMealTypes] = useState([]);
  const apiUrl = getApiUrl();

  useEffect(() => {
    if (!apiUrl) return;
    async function fetchMealTypes() {
      try {
        const res = await fetch(`${apiUrl}meal_types/`);
        const data = await res.json();
        const types = Object.entries(data).map(([id, name]) => ({
          id: parseInt(id),
          name,
        }));
        setMealTypes(types);
      } catch (err) {
        console.error("Meal Types fetch broken.", err);
      }
    }
    fetchMealTypes();
  }, [apiUrl]);

  return { mealTypes };
}
