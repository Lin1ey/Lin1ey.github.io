<template>
    <section v-if="aboutMeData">
        <div class="about-me-card">
            <img class="about-img" src="/images/bweeeh_amiya.jpg" />
            <h4>{{ aboutMeData.title }}</h4>
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
    background-color: var(--test3);
    padding: 48px 100px;
    color: var(--test4);
}

.about-me-card {
    white-space: pre-wrap;
    text-align: center;
    max-width: 650px;

    .about-img {
        width: 128px;
        height: 128px;
        border-radius: 50%;
    }

    h4 {
        font-size: 1.5em;
        color: var(--test2)
    }
}

@media only screen and (max-width: 768px) {
    section {
        padding: 48px 24px;
    }
}
</style>