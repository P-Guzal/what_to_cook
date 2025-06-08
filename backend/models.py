from sqlmodel import Field, SQLModel
from schemas import SavedRecipe


class Recipe(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    auth0_id: str
    title: str
    name: str
    content: str

    def to_recipe(self) -> SavedRecipe:
        return SavedRecipe(title=self.title, recipe=self.content)
