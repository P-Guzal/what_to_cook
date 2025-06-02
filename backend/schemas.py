from pydantic import BaseModel
from enum import Enum


class MealType(Enum):
    breakfast = "breakfast"
    lunch = "lunch"
    dinner = "dinner"
    snack = "snack"
    dessert = "dessert"
    appetizer = "appetizer"
    brunch = "brunch"


class RecipeSpecification(BaseModel):
    ingredients: list[str]
    meal_type: MealType
    preferences: list[str]


class GeneratedRecipe(BaseModel):
    recipe: str


class SavedRecipe(BaseModel):
    title: str
    recipe: str
