<script setup lang="ts">

import { todoService } from '~/services/todoService';


const router = useRouter();

const title = ref('');
const description = ref('');

const error = ref<string | null>(null);
const isSubmitting = ref(false);


const handleSubmit = async () => {
    if (!title.value.trim()) return;

    try {
        error.value = null;
        isSubmitting.value = true;
        await todoService.createTodo(title.value.trim(), description.value.trim());

        router.push('/todos');
    } catch (err: any) {
        error.value = err.message || 'Failed to create todo. Please try again.';
    } finally {
        isSubmitting.value = false;
    }
};

</script>




<template>
    <div class="form-page">

        <div class="form-page__card">
            <h1 class="form-page__title">Add New Todo</h1>
            <p class="form-page__desc">Fill in the details below to create a new task.</p>


            <div v-if="error" class="form-page__error">{{ error }}</div>

            <form @submit.prevent="handleSubmit" class="form-page__form">

                <div class="form-page__group">
                    <label for="title" class="form-page__label">Task Title *</label>

                    <input id="title" 
                    type="text" 
                    class="form-page__input" 
                    placeholder="e.g., Buy groceries"
                        v-model="title" required />
                </div>


                <div class="form-page__group">
                    <label for="desc" class="form-page__label">Description</label>
                    <textarea id="desc" class="form-page__textarea" placeholder="Add some details..."
                        v-model="description" rows="4"></textarea>
                </div>



                <div class="form-page__actions">
                    <button type="button" @click="router.back()" class="form-page__btn form-page__btn--secondary">
                        Cancel
                    </button>
                    <button type="submit" :disabled="isSubmitting" class="form-page__btn form-page__btn--primary">
                        {{ isSubmitting ? 'Creating...' : 'Create Todo' }}
                    </button>
                </div>


            </form>


        </div>


    </div>



</template>





<style scoped>
.form-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 48px 24px;
}

.form-page__card {
    background: var(--bg-primary);
    padding: 32px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
}

.form-page__title {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.form-page__desc {
    color: var(--text-secondary);
    margin-bottom: 32px;
}

.form-page__group {
    margin-bottom: 24px;
}

.form-page__label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.form-page__input,
.form-page__textarea {
    width: 100%;
    padding: 12px 16px;
    font-size: 1rem;
    font-family: inherit;
    color: var(--text-primary);
    background: var(--bg-secondary);
    border: 1.5px solid var(--border-color);
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
    outline: none;
}

.form-page__input:focus,
.form-page__textarea:focus {
    border-color: var(--accent);
    background: var(--bg-primary);
    box-shadow: 0 0 0 4px var(--accent-light);
}

.form-page__textarea {
    resize: vertical;
    min-height: 100px;
}

.form-page__actions {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    margin-top: 32px;
}

.form-page__btn {
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--radius-md);
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
}

.form-page__btn--secondary {
    background: var(--bg-secondary);
    color: var(--text-secondary);
}

.form-page__btn--secondary:hover {
    background: var(--bg-tertiary);
}

.form-page__btn--primary {
    background: var(--accent);
    color: white;
    box-shadow: 0 4px 6px -1px rgb(99 102 241 / 0.2);
}

.form-page__btn--primary:hover {
    background: var(--accent-hover);
    transform: translateY(-1px);
}

/* Form Error State */
.form-page__error {
    background: #fef2f2;
    color: #b91c1c;
    border: 1px solid #fecaca;
    padding: 12px 16px;
    border-radius: var(--radius-md);
    margin-bottom: 24px;
    font-size: 0.9rem;
    font-weight: 500;
}

.form-page__btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
}
</style>