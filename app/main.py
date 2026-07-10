from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from app.db.database import engine
from app.routers import todo_api


@asynccontextmanager
async def lifespan(app: FastAPI):
    
    # --- STARTUP ---
    print("Attempting to connect to DB...")
    try:
        async with engine.begin() as conn:
            await conn.execute(text("SELECT 1"))
        print("Successfully connected to DB!")
    except Exception as e:
        print(f"❌ Database connection failed: {e}")

    yield

    # --- SHUTDOWN ---
    print("Shutting down application...")
    print("Closing all database connections in the pool...")
    await engine.dispose()
    print("Database connection pool safely cleared.")


app = FastAPI(
    title="Todo App", description="A nice todo app", version="0.1.0", lifespan=lifespan
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# REGISTER YOUR TODO ROUTER HERE
app.include_router(todo_api.router)


@app.get("/", tags=["root"])
async def root():
    return {"message": "Welcome to the Todo API!", "version": "0.1.0"}
