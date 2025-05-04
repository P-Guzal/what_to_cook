from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from receipe_generator import RecipeGenerator
from schemas import RecipeSpecification, MealType, GeneratedRecipe

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_PATH")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/generate_recipe/")
async def generate_recipe(recipe_specification: RecipeSpecification) -> GeneratedRecipe:
    return GeneratedRecipe(recipe=RecipeGenerator().get_recipe(recipe_specification))


@app.get("/meal_types/")
def get_meal_types() -> dict[int, str]:
    return {i: meal_type for i, meal_type in enumerate(MealType)}
