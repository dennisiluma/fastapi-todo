<script setup lang="ts">

import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};


</script>


<template>

    <header class="site-nav" :class="{ 'site-nav--open': isMenuOpen }">
        <div class="site-nav__container">
            <router-link to="/" class="site-nav__logo" @click="closeMenu">
                <span class="site-nav__logo-icon">✓</span>
                <span class="site-nav__logo-text">TaskFlow</span>
            </router-link>

            <nav class="site-nav__menu">
                <router-link to="/" class="site-nav__link" @click="closeMenu">Home</router-link>
                <router-link to="/todos" class="site-nav__link" @click="closeMenu">Todo's</router-link>
                <router-link to="/add" class="site-nav__link site-nav__link--cta" @click="closeMenu">Add
                    Todo</router-link>
            </nav>

            <button class="site-nav__hamburger" @click="toggleMenu" aria-label="Toggle menu">
                <span class="site-nav__hamburger-bar"></span>
                <span class="site-nav__hamburger-bar"></span>
                <span class="site-nav__hamburger-bar"></span>
            </button>
        </div>

        <div v-if="isMenuOpen" class="site-nav__overlay" @click="closeMenu"></div>
    </header>

</template>




<style scoped>
.site-nav {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.site-nav__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

/* --- Logo --- */
.site-nav__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    z-index: 1001;
}

.site-nav__logo-icon {
    background: linear-gradient(135deg, var(--accent), #8b5cf6);
    color: white;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-sm);
    font-size: 1.2rem;
    font-weight: bold;
    box-shadow: 0 4px 6px -1px rgb(99 102 241 / 0.3);
    transition: transform 0.2s ease;
}

.site-nav__logo:hover .site-nav__logo-icon {
    transform: rotate(10deg) scale(1.05);
}

.site-nav__logo-text {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--text-primary);
    letter-spacing: -0.5px;
}

/* --- Navigation Links --- */
.site-nav__menu {
    display: flex;
    align-items: center;
    gap: 8px;
}

.site-nav__link {
    padding: 8px 16px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-decoration: none;
    border-radius: var(--radius-sm);
    transition: all 0.2s ease;
    position: relative;
}

.site-nav__link:hover {
    color: var(--accent);
    background-color: var(--accent-light);
}

/* CTA Button (Add Todo) */
.site-nav__link--cta {
    background-color: var(--accent);
    color: white !important;
    padding: 10px 22px;
    border-radius: var(--radius-full);
    box-shadow: 0 4px 6px -1px rgb(99 102 241 / 0.25);
    margin-left: 12px;
}

.site-nav__link--cta:hover {
    background-color: var(--accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px -2px rgb(99 102 241 / 0.35);
}

/* --- Hamburger Menu --- */
.site-nav__hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
}

.site-nav__hamburger-bar {
    width: 100%;
    height: 3px;
    background-color: var(--text-primary);
    border-radius: 4px;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform-origin: center;
}

/* Hamburger Animation when open */
.site-nav--open .site-nav__hamburger-bar:nth-child(1) {
    transform: translateY(8.5px) rotate(45deg);
}

.site-nav--open .site-nav__hamburger-bar:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
}

.site-nav--open .site-nav__hamburger-bar:nth-child(3) {
    transform: translateY(-8.5px) rotate(-45deg);
}

/* --- Mobile Overlay --- */
.site-nav__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
    backdrop-filter: blur(4px);
}

/* --- Mobile Responsive --- */
@media (max-width: 768px) {
    .site-nav__hamburger {
        display: flex;
    }

    .site-nav__menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 280px;
        height: 100vh;
        background: var(--bg-primary);
        flex-direction: column;
        align-items: flex-start;
        padding: 100px 32px 32px;
        gap: 12px;
        box-shadow: -10px 0 30px -10px rgba(0, 0, 0, 0.1);
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1000;
        border-left: 1px solid var(--border-color);
    }

    .site-nav--open .site-nav__menu {
        transform: translateX(0);
    }

    .site-nav__link {
        width: 100%;
        font-size: 1.1rem;
        padding: 14px 16px;
    }

    .site-nav__link--cta {
        margin-left: 0;
        margin-top: 16px;
        text-align: center;
        width: 100%;
    }
}
</style>