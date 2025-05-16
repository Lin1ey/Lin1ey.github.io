<template>
    <section>
        <div class="section-title">
            <div class="section-title-ends">----02.</div>
            <div class="section-title-middle">Projects</div>
            <div class="section-title-ends">----</div>
        </div>
        <div class="project-containers">
            <div class="project-card" v-for="(project, index) in projectsData" :key="index">
                <div class="project-top">
                    <img :src='getProjectImage(project.title, project.image)' :alt="project.title" />
                </div>
                <div class="project-bottom">
                    <div class="project-text">
                        <h1>{{ project.title }}</h1>
                        <br/>
                        <p>{{ project.desc }}</p>
                    </div>
                    <div class="project-tools">
                        <ul>
                            <li v-for="(tool, index) in project.tools" :title="utils.capitalizeFirstLetter(tool)"><img
                                    :src="utils.getIcon(tool, false)" :alt="tool"></li>
                        </ul>
                    </div>
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
import Utils from '@/services/Utils';

const dataService = new DataService()
const utils = new Utils()


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
    background-color: var(--project-background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}

.section-title {

    .section-title-ends {
        color: var(--color-primary);
    }

    .section-title-middle {
        color: var(--color-light)
    }

    font-size: 3rem;
    display: flex;
}

.project-containers {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    justify-items: center;
}

.project-card {
    border: var(--color-light) solid 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--project-card-background-color);
    width: 100%;
}

.project-top {
    width: 300px;
    height: 300px;
}

.project-bottom {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
    padding: 24px;
    line-height: 1.5rem;

    h1 {
        font-size: 2rem;
        color: var(--project-card-header-color)
    }

    p {
        font-size: 1rem;
        color: var(--project-card-text-color)
    }
}

img {
    width: 100%;
    height: 100%;
}

.project-tools {
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
        padding: 0px;
        margin: 0px;

        li {
            padding: 8px;

            img {
                width: 35px;
                height: 35px;
            }
        }
    }
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
        color: var(--project-card-button-text-color);
        padding: 4px 8px;
        border: 2px solid var(--project-card-button-border-color);
    }

    a:hover {
        background-color: var(--project-card-button-background-hover-color);
        color: var(--project-card-button-text-hover-color);
        border-color: var(--project-card-button-border-hover-color);
    }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
    .project-containers {
        grid-template-columns: 1fr 1fr;
    }

    section {
        padding: 50px 36px;
    }
}

@media only screen and (min-width: 426px) and (max-width: 768px) {
    section {
        padding: 50px 18px;
    }

    .project-containers {
        grid-template-columns: 1fr 1fr;
    }

    .project-top {
        width: 280px;
        height: 175px;
    }

    .section-title {
        font-size: 2rem;
    }
}

@media only screen and (min-width: 0px) and (max-width: 425px) {
    section {
        padding: 50px 18px;
    }

    .section-title {
        font-size: 1.3rem;
    }

    .project-containers {
        grid-template-columns: 1fr;
    }

    .project-top {
        width: 280px;
        height: 175px;
    }

    .project-bottom {
        padding: 12px;
    }
}
</style>