from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import os
from sqlalchemy.orm import Session

from receipe_generator import RecipeGenerator
from schemas import RecipeSpecification, MealType, GeneratedRecipe
import models
from database import engine, get_db

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_PATH")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
models.Base.metadata.create_all(bind=engine)


@app.post("/generate_recipe/")
async def generate_recipe(recipe_specification: RecipeSpecification) -> GeneratedRecipe:
    return GeneratedRecipe(recipe=RecipeGenerator().get_recipe(recipe_specification))


@app.get("/meal_types/")
def get_meal_types() -> dict[int, str]:
    return {i: meal_type for i, meal_type in enumerate(MealType)}


@app.post(
    "/add_recipe/",
)
async def add_recipe(
    recipe: GeneratedRecipe, db: Session = Depends(get_db)
) -> models.Recipe:
    recipe_to_add = models.Recipe(**recipe.model_dump())
    db.add(recipe_to_add)
    db.commit()
    return recipe_to_add
