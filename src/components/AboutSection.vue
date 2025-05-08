<template>
    <section v-if="aboutMeData">
        <div class="section-title">
            <div class="section-title-ends">----01.</div>
            <div class="section-title-middle">About Me</div>
            <div class="section-title-ends">----</div>
        </div>
        <div class="about-me-card">
            <img class="about-img" src="/images/bweeeh_amiya.jpg" />
            <h4>{{ aboutMeData.title }}</h4>
            <br/>
            <p>{{ aboutMeData.description }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

//Types
import { AboutMeData } from '@/types/aboutme';

//Services
import DataService from '@/services/DataService';
const dataService = new DataService()

const aboutMeData = ref<AboutMeData>(null)

onMounted(() => {
    dataService.getAboutMeData().then((data) => {
        aboutMeData.value = data
    })
})


</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--about-background-color);
    padding: 48px 100px;
    color: var(--about-text-color);
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

.about-me-card {
    white-space: pre-wrap;
    text-align: center;
    max-width: 950px;

    .about-img {
        width: 128px;
        height: 128px;
        border-radius: 50%;
    }

    h4 {
        font-size: 1.5em;
        color: var(--about-header-color)
    }
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