from sqlalchemy import Column, Integer, String
from database import Base


class Recipes(Base):
    __tablename__ = "recipes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    content = Column(String)
