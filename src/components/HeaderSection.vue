<template>
    <Header>
        <h1>Brian Nguyen</h1>
        <nav>
            <a v-for="(nav, index) in props.navLink" :key="index" @click.prevent="jumpToSection(nav.sectionRef)">
                {{nav.title}}
            </a>
        </nav>
    </Header>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import type { NavBarTab } from '@/types/navbar';
import type { ComponentPublicInstance } from "vue";



const props = defineProps({
  navLink: { type: Array<NavBarTab>, required: false, default: [] },
});

const jumpToSection = (section: Ref<ComponentPublicInstance | null>) => {
  section.value.$el.scrollIntoView({ behavior: "smooth" });
}

</script>

<style scoped>

</style>