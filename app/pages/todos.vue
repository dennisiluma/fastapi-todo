<script setup lang="ts">
import { todoService, type Todo } from '~/services/todoService';



const todos = ref<Todo[]>([]);
const error = ref<string | null>(null);


const isModalOpen = ref(false);
const todoToDelete = ref<number | null>(null);


onMounted(()=> {
    fetchTodos()
});


const fetchTodos = async () => {
    try {
        error.value = null;
        todos.value = await todoService.getAllTodos();
    } catch (err: any) {
        error.value = err.message || 'Failed to load todos.';
    }
};


const openModal = (id: number) => {
    todoToDelete.value = id;
    isModalOpen.value = true;
};


const confirmDelete = async () => {
    if (todoToDelete.value === null) return;
    try {
        error.value = null;
        await todoService.deleteTodo(todoToDelete.value);
        todos.value = todos.value.filter(t => t.id !== todoToDelete.value);
        closeModal();
    } catch (err: any) {
        error.value = err.message || 'Failed to delete todo.';
    }
};

const closeModal = () => {
    isModalOpen.value = false;
    todoToDelete.value = null;
};

</script>




<template>


    <div class="todos-page">
        <div class="todos-page__header">
            <h1 class="todos-page__title">My Todo's</h1>
            <NuxtLink to="/add" class="todos-page__add-btn">+ Add New</NuxtLink>
        </div>


        <div v-if="error" class="error-banner">{{ error }}</div>


        <div v-if="todos.length === 0 && !error" class="todos-page__empty">
            <span class="todos-page__empty-icon">📝</span>
            <h2>No tasks yet!</h2>
            <p>Create your first task to get started.</p>
        </div>

        <ul v-else class="todos-page__list">
            <li v-for="todo in todos" :key="todo.id" class="todos-page__item"
                :class="{ 'todos-page__item--completed': todo.is_completed }">
                <div class="todos-page__item-content">
                    <div>
                        <h3 class="todos-page__item-title">{{ todo.title }}</h3>
                        <p v-if="todo.description" class="todos-page__item-desc">{{ todo.description }}</p>
                    </div>
                </div>
                <div class="todos-page__item-actions">
                    <NuxtLink :to="`/${todo.id}/edit`" class="btn-icon btn-icon--edit">
                        Edit
                    </NuxtLink>
                    <button @click="openModal(todo.id)" class="btn-icon btn-icon--delete">
                        Delete
                    </button>
                </div>
            </li>
        </ul>
    </div>




    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <h2 class="modal-title">Delete Task?</h2>
            <p class="modal-desc">
                Are you sure you want to delete this task? This action cannot be undone.
            </p>
            <div v-if="error" class="error-banner error-banner--modal">{{ error }}</div>
            <div class="modal-actions">
                <button @click="closeModal" class="modal-btn modal-btn--cancel">Cancel</button>
                <button @click="confirmDelete" class="modal-btn modal-btn--confirm">Yes, Delete</button>
            </div>
        </div>
    </div>

</template>



<style scoped>
.todos-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 48px 24px;
}

.todos-page__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
}

.todos-page__title {
    font-size: 2rem;
    font-weight: 800;
    color: var(--text-primary);
    letter-spacing: -0.5px;
}

.todos-page__add-btn {
    padding: 10px 20px;
    background: var(--accent);
    color: white;
    border-radius: var(--radius-full);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
    box-shadow: 0 4px 6px -1px rgb(99 102 241 / 0.2);
}

.todos-page__add-btn:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
}

/* Empty State */
.todos-page__empty {
    text-align: center;
    padding: 64px 24px;
    background: var(--bg-secondary);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
}

.todos-page__empty-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 16px;
}

.todos-page__empty h2 {
    color: var(--text-primary);
    margin-bottom: 8px;
}

.todos-page__empty p {
    color: var(--text-secondary);
}

/* List & Items */
.todos-page__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.todos-page__item {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    transition: all 0.2s ease;
}

.todos-page__item:hover {
    border-color: var(--accent-light);
    box-shadow: var(--shadow-md);
}

.todos-page__item-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.todos-page__item-desc {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.5;
}

.todos-page__item-actions {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
}

.btn-icon {
    padding: 8px 16px;
    border-radius: var(--radius-sm);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.2s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
}

.btn-icon--edit {
    background: var(--accent-light);
    color: var(--accent);
}

.btn-icon--edit:hover {
    background: var(--accent);
    color: white;
}

.btn-icon--delete {
    background: #fef2f2;
    color: #ef4444;
    border-color: #fecaca;
}

.btn-icon--delete:hover {
    background: #ef4444;
    color: white;
    border-color: #ef4444;
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    animation: fadeIn 0.2s ease;
}

.modal-content {
    background: var(--bg-primary);
    padding: 32px;
    border-radius: var(--radius-lg);
    max-width: 400px;
    width: 90%;
    box-shadow: var(--shadow-lg);
    animation: slideUp 0.3s ease;
}

.modal-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 12px;
}

.modal-desc {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 24px;
}

.modal-actions {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
}

.modal-btn {
    padding: 10px 20px;
    border-radius: var(--radius-sm);
    font-weight: 600;
    cursor: pointer;
    border: none;
    font-size: 0.95rem;
    transition: all 0.2s ease;
}

.modal-btn--cancel {
    background: var(--bg-secondary);
    color: var(--text-secondary);
}

.modal-btn--cancel:hover {
    background: var(--bg-tertiary);
}

.modal-btn--confirm {
    background: #ef4444;
    color: white;
}

.modal-btn--confirm:hover {
    background: #dc2626;
}

/* Loading & Error States */
.page-loading {
    text-align: center;
    padding: 48px;
    color: var(--text-secondary);
    font-weight: 500;
}

.error-banner {
    background: #fef2f2;
    color: #b91c1c;
    border: 1px solid #fecaca;
    padding: 12px 16px;
    border-radius: var(--radius-md);
    margin-bottom: 24px;
    font-size: 0.9rem;
    font-weight: 500;
}

.error-banner--modal {
    margin-bottom: 16px;
    margin-top: 8px;
}

/* Checkbox & Completed State */
.todos-page__item-content {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    flex: 1;
}

.todos-page__checkbox {
    width: 22px;
    height: 22px;
    margin-top: 2px;
    cursor: pointer;
    accent-color: var(--accent);
    border-radius: 4px;
}

/* Strikethrough effect for completed tasks */
.todos-page__item--completed .todos-page__item-title {
    text-decoration: line-through;
    color: var(--text-muted);
}

.todos-page__item--completed .todos-page__item-desc {
    color: var(--text-muted);
    opacity: 0.7;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@media (max-width: 640px) {
    .todos-page__item {
        flex-direction: column;
        align-items: flex-start;
    }

    .todos-page__item-actions {
        width: 100%;
        justify-content: flex-end;
    }
}
</style>
