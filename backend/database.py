import os
from sqlmodel import Session, SQLModel, create_engine

database_url = os.getenv("DATABASE_URL")
if database_url:
    engine = create_engine(database_url, echo=True)
else:
    raise EnvironmentError("DATABASE_URL not set")


def create_db() -> None:
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session
