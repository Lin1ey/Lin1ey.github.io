<template>
    <section>
        <div class="section-title">
            <div class="section-title-ends">----03.</div>
            <div class="section-title-middle">Contact Me</div>
            <div class="section-title-ends">----</div>
        </div>
        <div class="contact-container">
            <p>Email me at <a :href="`mailto:${emailLink}`">{{ email }}</a> for any questions, inquiries or if you just
                feel
                like saying hi!</p>
        </div>
    </section>
</template>

<script setup lang="ts">
const emailLink = 'nguyenbr2024+portfolio@gmail.com'
const email = 'nguyenbr2024@gmail.com'
</script>

<style scoped>
section {
    display: flex;
    align-items: center;
    background-color: var(--contact-background-color);
    padding: 48px 100px;
    color: var(--contact-text-color);
    flex-direction: column;
    gap: 50px;
}

.section-title {
    .section-title-ends {
        color: var(--section-title-end-color);
    }

    .section-title-middle {
        color: var(--section-title-middle-color)
    }

    font-size: 3rem;
    display: flex;
}

.contact-container {
    max-width: 725px;
}

a {
    color: var(--contact-link-color)
}

@media only screen and (max-width: 768px) {
    section {
        padding: 48px 24px;
    }

    .section-title {
        font-size: 2rem;
    }

}

@media only screen and (min-width: 0px) and (max-width: 425px) {
    section {
        padding: 48px 24px;
    }

    .section-title {
        font-size: 1.3rem;
    }
}
</style>