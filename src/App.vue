<template>
  <HeaderSection :navLink="getNavBarItems()" />
  <main>
    <AboutSection ref="aboutSection" />
    <ProjectsSection ref="projectsSection" />
    <ContactSection ref="contactSection" />
  </main>
  <FooterSection />

</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import HeaderSection from '@/components/HeaderSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from "./components/ContactSection.vue"
import FooterSection from '@/components/FooterSection.vue'

//Types
import type { NavBarTab } from "./types/navbar";

const aboutSection = ref(null);
const projectsSection = ref(null);
const contactSection = ref(null)

const getNavBarItems = () => {
  return [
    { title: "About", sectionRef: aboutSection },
    { title: "Projects", sectionRef: projectsSection },
    { title: "Contact", sectionRef: contactSection }
  ] as NavBarTab[];
};

</script>

<style scoped></style>
