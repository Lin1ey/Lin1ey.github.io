<template>
    <section>
        <div class="project-containers">
            <div class="project-card" v-for="(project, index) in projectsData" :key="index">
                <div class="project-left">
                    <img :src='getProjectImage(project.title, project.image)' />
                </div>
                <div class="project-right">
                    <h1>{{ project.title }}</h1>
                    <p>{{ project.desc }}</p>
                    <div class="project-buttons">
                        <button v-if="project.buttons.demo">DEMO</button>
                        <button v-if="project.buttons.code">CODE</button>
                        <button v-if="project.buttons.live">LIVE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

//Types
import { ProjectData } from '@/types/projects';

//Services
import DataService from '@/services/DataService';
const dataService = new DataService()

const getProjectImage = (title: string, image: string) => {
    return `/images/${title}/${image}`
}

const projectsData = ref<ProjectData[]>(null)

onMounted(() => {
    dataService.getProjectsData().then((data) => {
        projectsData.value = data
    })
})
</script>

<style scoped>
section {
    padding: 50px 100px;
}

.project-containers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.project-card {
    border: black solid 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary);

}

.project-right {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: center;
    padding: 8px;
    line-height: 1.5rem;

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1rem;
    }
}

img {
    width: 250px;
    height: 150px;
}

@media only screen and (min-width: 1300px) {
    img {
        width: 450px;
        height: 250px;
    }
}

@media only screen and (max-width: 768px) {
    section {
        height: 1000px;
        padding: 50px 18px;
    }

    .project-containers {
        grid-template-columns: 1fr;
    }

    img {
        width: 280px;
        height: 175px;
    }
}
</style>