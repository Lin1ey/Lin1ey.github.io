<template>
  <HeaderSection :navLink="getNavBarItems()" />
  <main>
    <AboutSection ref="aboutSection" />
    <ProjectsSection ref="projectsSection" />
  </main>
  <FooterSection />

</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import HeaderSection from '@/components/HeaderSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import FooterSection from '@/components/FooterSection.vue'

//Types
import type { NavBarTab } from "./types/navbar";

const aboutSection = ref(null);
const projectsSection = ref(null);

const getNavBarItems = () => {
  return [
    { title: "About", sectionRef: aboutSection },
    { title: "Projects", sectionRef: projectsSection }
  ] as NavBarTab[];
};

</script>

<style scoped></style>
