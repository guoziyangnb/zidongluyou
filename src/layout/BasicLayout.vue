<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header><GlobalHeader /></a-layout-header>
      <a-layout-content class="content"><RouterView /></a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped> 
#basicLayout {
} 
.content {
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, #fefefe, #fff);
  padding: 20px;
}
</style>