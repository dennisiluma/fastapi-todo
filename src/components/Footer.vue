<script setup lang="ts">
const currentYear = new Date().getFullYear();

</script>

<template>
    <footer class="site-footer">
        <div class="site-footer__container">
            <div class="site-footer__grid">
                <div class="site-footer__col site-footer__col--brand">
                    <h3 class="site-footer__brand-name">TaskFlow</h3>
                    <p class="site-footer__brand-desc">
                        A beautifully simple way to organize your day, track your progress, and achieve your goals.
                    </p>
                </div>

                <div class="site-footer__col">
                    <h4 class="site-footer__col-title">Navigation</h4>
                    <ul class="site-footer__list">
                        <li><router-link to="/" class="site-footer__link">Home</router-link></li>
                        <li><router-link to="/todos" class="site-footer__link">My Todo's</router-link></li>
                        <li><router-link to="/add" class="site-footer__link">Add New Todo</router-link></li>
                    </ul>
                </div>

                <div class="site-footer__col">
                    <h4 class="site-footer__col-title">Resources</h4>
                    <ul class="site-footer__list">
                        <li><a href="#" class="site-footer__link">Documentation</a></li>
                        <li><a href="#" class="site-footer__link">Support</a></li>
                        <li><a href="#" class="site-footer__link">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div class="site-footer__bottom">
                <p class="site-footer__copyright">
                    &copy; {{ currentYear }} TaskFlow. Crafted with care.
                </p>
                <div class="site-footer__socials">
                    <a href="#" class="site-footer__social-link" aria-label="Twitter">𝕏</a>
                    <a href="#" class="site-footer__social-link" aria-label="GitHub">⌘</a>
                    <a href="#" class="site-footer__social-link" aria-label="LinkedIn">in</a>
                </div>
            </div>
        </div>
    </footer>
</template>


<style scoped>
.site-footer {
    background-color: #0f172a;
    /* Deep blackish-blue (Slate 900) */
    color: #e2e8f0;
    border-top: 1px solid #1e293b;
    margin-top: auto;
    padding: 64px 0 32px;
}

.site-footer__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

/* --- Grid Layout --- */
.site-footer__grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 48px;
    margin-bottom: 48px;
}

/* --- Brand Column --- */
.site-footer__brand-name {
    font-size: 1.5rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 16px;
    letter-spacing: -0.5px;
}

.site-footer__brand-desc {
    color: #94a3b8;
    /* Slate 400 */
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 320px;
}

/* --- Link Columns --- */
.site-footer__col-title {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #64748b;
    /* Slate 500 */
    margin-bottom: 20px;
}

.site-footer__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.site-footer__link {
    color: #cbd5e1;
    /* Slate 300 */
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.2s ease;
    display: inline-block;
}

.site-footer__link:hover {
    color: #818cf8;
    /* Indigo 400 - pops beautifully on dark */
    transform: translateX(4px);
}

/* --- Bottom Bar --- */
.site-footer__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 32px;
    border-top: 1px solid #1e293b;
}

.site-footer__copyright {
    color: #64748b;
    font-size: 0.9rem;
}

.site-footer__socials {
    display: flex;
    gap: 12px;
}

.site-footer__social-link {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: var(--radius-full);
    color: #94a3b8;
    font-weight: bold;
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 0.2s ease;
}

.site-footer__social-link:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px -2px rgb(99 102 241 / 0.4);
}

/* --- Responsive --- */
@media (max-width: 768px) {
    .site-footer__grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .site-footer__bottom {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
}
</style>