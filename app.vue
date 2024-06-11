<template>
    <div class="layout">
        <aside class="side-bar">
            <div class="side-bar__logo">Demo test</div>
            <nav class="side-bar__nav">
                <Nuxtlink class="side-bar__link">
                    <img src="/user.svg" alt="link icon">
                    Profile
                </Nuxtlink>
                <Nuxtlink class="side-bar__link side-bar__link--active" to="/">
                    <img src="/vechicles.svg" alt="link icon">
                    Vechicles
                </Nuxtlink>
                <Nuxtlink class="side-bar__link">
                    <img src="/settings.svg" alt="link icon">
                    Settings
                </Nuxtlink>
            </nav>
        </aside>
        <section class="main-section">
            <div class="main-section__header">
                <div class="main-section__right-column">
                    <h1 class="main-section__title">Vechicles</h1>
                    <div class="main-section__count">{{store.total}}</div>
                </div>
                <div class="main-section__left-column">
                    <button class="main-section__add">
                        <img src="/plus.svg" alt="add icon">
                    </button>

                    <div class="main-section__profile">
                        <img src="/profile.png" class="main-section__profile-image">
                        <span class="main-section__profile-name">John Doe</span>
                    </div>

                    <div class="main-section__language">
                        <img src="/uk.png"  class="main-section__language-image">
                        <Dropdown 
                            v-model="lang" 
                            :options="langList" 
                            class="main-section__language-select"
                        />
                    </div>
                </div>
            </div>
            <div class="main-section__content">
                <NuxtPage/>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import 'primevue/resources/themes/aura-light-green/theme.css'
import { useSearchStore } from '~/store/search';
const store = useSearchStore();

const lang: Ref<String> = ref('en');
const langList: String[] = ['en','ru'];
</script>