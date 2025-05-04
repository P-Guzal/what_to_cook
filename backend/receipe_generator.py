import openai
from openai import OpenAI
from schemas import RecipeSpecification
from dotenv import load_dotenv
import os

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")


class RecipeGenerator:
    client = OpenAI()

    def generate_prompt(self, recipe_specification) -> str:
        prompt = (
            f"I have the following ingredients at home: {','.join(recipe_specification.ingredients)}."
            f" I’d like to prepare a {recipe_specification.meal_type}."
        )

        preferences = recipe_specification.preferences
        if preferences:
            prompt = prompt + f" My preferences are: {','.join(preferences)}."

        prompt = (
            prompt
            + " Please give me a recipe with step-by-step instructions. Include a list of ingredients with proportions and preparation instructions. Please without any added message."
        )
        return prompt

    def get_chat_response(self, prompt: str):
        try:
            response = self.client.responses.create(model="gpt-4.1", input=prompt)
        except openai.APIStatusError as e:
            raise e
        return response

    def get_recipe(self, recipe_specification: RecipeSpecification) -> str:
        prompt = self.generate_prompt(recipe_specification)
        response = self.get_chat_response(prompt)
        return response.choices[0].message.content
