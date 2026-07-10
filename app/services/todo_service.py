from sqlalchemy import select

from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.todos import Todo
from app.schemas.todo import TodoBase, TodoUpdate




async def get_all_todos(db: AsyncSession) -> list[Todo]:

    result = await db.execute(select(Todo).order_by(Todo.created_at.desc()))

    return list(result.scalars().all())


async def get_todo_by_id(db: AsyncSession, todo_id: int) -> Todo:

    result = await db.execute(select(Todo).where(Todo.id == todo_id))
    todo_data = result.scalar_one_or_none()

    if not todo_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Todo not found",
        )
    return todo_data


async def create_todo(db: AsyncSession, todo_to_create: TodoBase) -> Todo:

    new_todo = Todo(**todo_to_create.model_dump())

    db.add(new_todo)

    await db.commit()

    await db.refresh(new_todo)

    return new_todo


async def update_todo(
    db: AsyncSession, todo_id: int, todo_to_update: TodoUpdate
) -> Todo:

    existing_todo = await get_todo_by_id(db, todo_id=todo_id)

    update_data = todo_to_update.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(existing_todo, key, value)
    await db.commit()
    await db.refresh(existing_todo)
    return existing_todo


async def delete_todo(db: AsyncSession, todo_id: int) -> None:
    todo = await get_todo_by_id(db, todo_id)

    await db.delete(todo)

    await db.commit()
