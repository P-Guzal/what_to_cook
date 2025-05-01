from fastapi import FastAPI

from receipe_generator import RecipeGenerator
from schemas import RecipeSpecification

app = FastAPI()


@app.post("/generate_recipe/")
async def generate_recipe(recipe_specification: RecipeSpecification):
    return RecipeGenerator().get_recipe(recipe_specification)
