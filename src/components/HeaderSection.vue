<template>
  <Header>
    <nav class="navbar">
      <div class="navbar-header">
        <a v-if="props.navLink" @click.prevent="jumpToSection(aboutSection.sectionRef)">
          <h1>Brian Nguyen</h1>
        </a>
        <button class="navbar-toggle" @click="onClickNavbarToggle">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
      <ul class="navmenu" :class="{ inactive: !active }">
        <li v-for="(nav, index) in props.navLink" :key="index">
          <a role="button" @click.prevent="jumpToSection(nav.sectionRef)">
            <span class="navitem-number">0{{ index + 1 }}.</span> <span>{{ nav.title }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </Header>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from 'vue';
import type { NavBarTab } from '@/types/navbar';
import type { ComponentPublicInstance } from "vue";

const active = ref(false)

const props = defineProps({
  navLink: { type: Array<NavBarTab>, required: false, default: [] },
});

const aboutSection = computed(() => {
  return props.navLink.filter(tab => tab.title === 'About')[0]
})

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

a {
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
}

header {
  background-color: var(--header-background-color);
  color: var(--header-text-color);
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
    padding: 8px;
    border-radius: 8px;
  }

  a:hover {
    background-color: var(--active-nav-item-background-color);
    color: var(--active-nav-item-color);
  }
}

.navitem-number {
  color: var(--navitem-number-color);
  font-size: 1.2em;
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
  background-color: var(--hamburger-menu-color);
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
    background-color: inherit;
    color: inherit;
    border: none;
  }

}
</style>