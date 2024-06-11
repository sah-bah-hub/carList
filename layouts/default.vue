<template>
    <div class="layout">
        <aside class="side-bar">
            <div class="side-bar__logo">Demo test</div>
            <nav class="side-bar__nav">
                <Nuxtlink class="side-bar__link">
                    <img src="/user.svg" alt="link icon">
                    Profile
                </Nuxtlink>
                <Nuxtlink class="side-bar__link" to="/">
                    <img src="../public/vechicles.svg" alt="link icon">
                    Vechicles
                </Nuxtlink>
                <Nuxtlink class="side-bar__link">
                    <img src="../public/settings.svg" alt="link icon">
                    Settings
                </Nuxtlink>
            </nav>
        </aside>
        <section class="main-section">
            <div class="main-section__header">
                <div class="main-section__right-column">
                    <h1 class="main-section__title">Vechicles</h1>
                    <div class="main-section__count">256</div>
                </div>
                <div class="main-section__left-column">
                    <button class="main-section__add"/>

                    <div class="main-section__profile">
                        <img  class="main-section__profile-image">
                        <span class="main-section__profile-name"></span>
                    </div>

                    <div class="main-section__language">
                        <img  class="main-section__language-image">
                        <span class="main-section__language-title"></span>
                    </div>
                </div>
            </div>
            <div class="main-section__content">
                <slot />
            </div>
        </section>
    </div>
</template>