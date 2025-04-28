<template>
    <section>
        <div class="project-containers">
            <div class="project-card" v-for="(project, index) in projectsData" :key="index">
                <div class="project-left">
                    <img src='/images/bweeeh_amiya.jpg' />
                </div>
                <div class="project-right">
                    <h1>{{ project.title }}</h1>
                    <p>{{ project.desc }}</p>
                    <div class="project-buttons">
                        BUTTON 1 BUTTON 2 BUTTON 3
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

const getProjectImage = (title, image) => {
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
.project-containers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.project-card {
    border: black solid 2px;
    display: flex;

}

img {
    width: 150px;
    height: 75px;
}

@media only screen and (max-width: 768px) {
    .project-containers {
        grid-template-columns: 1fr;
    }
}
</style>