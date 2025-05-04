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
                        <a v-if="project.buttons.demo" :href="project.buttons.demo" target="_blank"><svg
                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                class="mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z">
                                </path>
                            </svg><span>DEMO</span></a>
                        <a v-if="project.buttons.code" :href="project.buttons.code" target="_blank"><svg
                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                class="mr-1 opacity-70" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z">
                                </path>
                            </svg><span>CODE</span></a>
                        <a v-if="project.buttons.live" :href="project.buttons.live" target="_blank"><svg
                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                class="mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                                <path
                                    d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z">
                                </path>
                            </svg><span>LIVE</span></a>
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
    border-radius: 8px;
    box-shadow: 10px 10px 3px gray;
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

.project-buttons {
    display: flex;
    gap: 8px;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        gap: 4px;
        text-decoration: none;
        color: rgb(33, 150, 243);
        padding: 4px 8px;
        background-color: white;
        border: 2px solid rgb(33, 150, 243);
        border-radius: 8px;
    }

    a:hover {
        background-color: rgb(33, 150, 243);
        color: white;
    }
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