<template>
  <Header>
    <nav class="navbar">
      <div class="navbar-header">
        <h1>Brian Nguyen</h1>
        <button class="navbar-toggle" @click="onClickNavbarToggle">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
      <ul class="navmenu" :class="{ inactive: !active }">
        <li v-for="(nav, index) in props.navLink" :key="index">
          <a role="button" @click.prevent="jumpToSection(nav.sectionRef)">
            {{ nav.title }}
          </a>
        </li>
      </ul>
    </nav>
  </Header>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import type { NavBarTab } from '@/types/navbar';
import type { ComponentPublicInstance } from "vue";

const active = ref(false)

const props = defineProps({
  navLink: { type: Array<NavBarTab>, required: false, default: [] },
});

const jumpToSection = (section: Ref<ComponentPublicInstance | null>) => {
  section.value.$el.scrollIntoView({ behavior: "smooth" });
  active.value = false
}

function onClickNavbarToggle() {
  active.value = !active.value
}

</script>

<style scoped>
li {
  list-style: none;
}

header {
  background-color: var(--test1);
  color: var(--darkContrastText);
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
}

.navbar,
.navbar-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navmenu {
  display: flex;
  gap: 16px;

  a {
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
  }

  a:hover {
    background-color: var(--active-nav-item);
    color: var(--test1);
  }
}

.navbar-toggle {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: var(--darkContrastText);
}

@media only screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }

  .navmenu {
    flex-direction: column;
    width: 100%;
    align-items: center;

    &.inactive {
      display: none;
    }
  }

  .navbar-toggle {
    display: block;
    cursor: pointer;
    background-color: var(--primary);
    color: inherit;
    border: none;
  }

}
</style>