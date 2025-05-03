<template>
    <Footer>
        <ul>
            <li class="link" v-for="(link, index) in linkData" :key="link.icon">
                <a :href="link.link" target="_blank">
                    <img :src="utils.getIcon(link.icon, true)">
                </a>
            </li>
        </ul>
    </Footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

//Types
import { LinkData } from '@/types/links';

//Services
import DataService from '@/services/DataService';
import Utils from '@/services/Utils';

const dataService = new DataService()
const utils = new Utils()


const linkData = ref < LinkData[] > (null)

onMounted(() => {
    dataService.getLinksData().then((data) => {
        linkData.value = data
    })
})
</script>

<style scoped>
Footer {
    display: flex;
    justify-content: center;
    background-color: var(--primary);
}

ul {
    display: flex;
    list-style: none;
    padding: 0px;
    margin: 0px;
    li {
        padding: 8px;
    }
}

img {
    width: 28px;
    height: 28px;
}
</style>