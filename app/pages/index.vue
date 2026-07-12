<template>

    <div class="home">
        <section class="hero">
            <div class="hero__content">
                <span class="hero__badge">✨ Simple & Beautiful</span>
                <h1 class="hero__title">
                    Organize your day,<br />
                    <span class="hero__title-accent">achieve your goals.</span>
                </h1>
                <p class="hero__desc">
                    TaskFlow is the beautifully simple way to track your tasks,
                    stay focused, and make every day productive.
                </p>
                <div class="hero__actions">
                    <NuxtLink to="/add" class="btn btn--primary">
                        Add Your Todo
                    </NuxtLink>
                    <NuxtLink to="/todos" class="btn btn--secondary">
                        View My Tasks
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="features">
            <div class="features__grid">
                <div class="feature-card">
                    <div class="feature-card__icon">🎯</div>
                    <h3 class="feature-card__title">Laser Focus</h3>
                    <p class="feature-card__desc">
                        Strip away the clutter and focus only on what matters most today.
                    </p>
                </div>
                <div class="feature-card">
                    <div class="feature-card__icon">⚡</div>
                    <h3 class="feature-card__title">Lightning Fast</h3>
                    <p class="feature-card__desc">
                        Built with Nuxt for instant page loads and a buttery smooth experience.
                    </p>
                </div>
                <div class="feature-card">
                    <div class="feature-card__icon">🎨</div>
                    <h3 class="feature-card__title">Beautifully Crafted</h3>
                    <p class="feature-card__desc">
                        A clean, modern interface that makes managing your tasks a genuine pleasure.
                    </p>
                </div>
            </div>
        </section>

    </div>

</template>




<style scoped>
.home {
    width: 100%;
}

/* --- Hero Section --- */
.hero {
    padding: 100px 24px 80px;
    text-align: center;
    /* Subtle radial gradient background */
    background: radial-gradient(circle at top center, var(--accent-light) 0%, var(--bg-primary) 60%);
}

.hero__content {
    max-width: 800px;
    margin: 0 auto;
}

.hero__badge {
    display: inline-block;
    padding: 6px 16px;
    background: var(--bg-tertiary);
    color: var(--accent);
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: var(--radius-full);
    margin-bottom: 24px;
    border: 1px solid var(--border-color);
}

.hero__title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1.5px;
    color: var(--text-primary);
    margin-bottom: 24px;
}

/* Gradient Text Effect */
.hero__title-accent {
    background: linear-gradient(135deg, var(--accent), #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero__desc {
    font-size: 1.2rem;
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto 40px;
}

.hero__actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

/* --- Buttons --- */
.btn {
    padding: 14px 28px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--radius-full);
    text-decoration: none;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn--primary {
    background: var(--accent);
    color: white;
    box-shadow: 0 4px 14px 0 rgba(99, 102, 241, 0.3);
}

.btn--primary:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px 0 rgba(99, 102, 241, 0.4);
}

.btn--secondary {
    background: var(--bg-primary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
}

.btn--secondary:hover {
    background: var(--bg-secondary);
    border-color: var(--text-muted);
    transform: translateY(-2px);
}

/* --- Features Section --- */
.features {
    padding: 80px 24px;
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
}

.features__grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
}

.feature-card {
    background: var(--bg-primary);
    padding: 32px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-light);
}

.feature-card__icon {
    font-size: 2rem;
    margin-bottom: 16px;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent-light);
    border-radius: var(--radius-md);
}

.feature-card__title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 12px;
}

.feature-card__desc {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    .hero {
        padding: 60px 24px;
    }

    .hero__desc {
        font-size: 1.05rem;
    }

    .features {
        padding: 60px 24px;
    }
}
</style>