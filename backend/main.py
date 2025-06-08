import os
from typing import Any, AsyncGenerator

from fastapi import FastAPI, Depends
from fastapi.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware

# from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlmodel import Session

from receipe_generator import RecipeGenerator
from schemas import RecipeSpecification, MealType, GeneratedRecipe, SavedRecipe
from models import Recipe
from database import engine, create_db, get_session
from contextlib import asynccontextmanager


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, Any]:
    create_db()
    yield
    engine.dispose()


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_PATH", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/generate_recipe/")
async def generate_recipe(recipe_specification: RecipeSpecification) -> GeneratedRecipe:
    return GeneratedRecipe(recipe=RecipeGenerator().get_recipe(recipe_specification))


@app.get("/meal_types/")
def get_meal_types() -> dict[int, str]:
    return {i: meal_type.value for i, meal_type in enumerate(MealType)}


# security = HTTPBearer()
# @app.post(
#     "/add_recipe/",
# )
# def add_recipe(
#     recipe: SavedRecipe, session: Session = Depends(get_session), credentials: HTTPAuthorizationCredentials = Depends(security)
# ) -> SavedRecipe:
#     recipe_to_add = Recipe(**recipe.model_dump())
#     session.add(recipe_to_add)
#     session.commit()
#     return recipe_to_add.to_recipe()
