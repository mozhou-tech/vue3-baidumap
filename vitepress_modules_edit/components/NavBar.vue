<!--
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-08-30 10:58:37
 * @LastEditTime: 2023-08-30 10:58:46
 * @LastEditors: YangJianFei
 * @FilePath: \@mayerblueblueblue/vue3-baidumap\vitepress_modules_edit\components\NavBar.vue
-->
<script setup lang="ts">
import NavBarTitle from './NavBarTitle.vue'
import NavLinks from './NavLinks.vue'
import ToggleSideBarButton from './ToggleSideBarButton.vue'

defineEmits(['toggle'])
</script>

<template>
  <header class="nav-bar">
    <ToggleSideBarButton @toggle="$emit('toggle')" />

    <NavBarTitle />
    <slot name="daily" />
    <div class="flex-grow" />

    <div class="nav">
      <NavLinks />
    </div>

    <slot name="search" />
  </header>
</template>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--z-index-navbar);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--c-divider);
  padding: 0.7rem 1.5rem 0.7rem 4rem;
  height: var(--header-height);
  background-color: var(--c-bg);
}

@media (min-width: 720px) {
  .nav-bar {
    padding: 0.7rem 1.5rem;
  }
}

.flex-grow {
  flex-grow: 1;
}

.nav {
  display: none;
}

@media (min-width: 720px) {
  .nav {
    display: block;
  }
}
</style>
