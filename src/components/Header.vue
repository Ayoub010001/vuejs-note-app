<template>
    <header>
      <h1>Notes App</h1>
      <button class="toggle-theme-btn"
      @click="toggleTheme"
      :class="theme"
      >
        <AkSunFill  v-if="theme === 'dark'"/>
        <MdModeNight v-else/>
      </button>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { AkSunFill } from '@kalimahapps/vue-icons';
  import { MdModeNight } from '@kalimahapps/vue-icons';

  const theme = ref('dark');

  function toggleTheme(){
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  }

  </script>
  
  <style scoped>

  .toggle-theme-btn{
    background: #3a3e5a;
    border: none;
    cursor: pointer;
    height: 50px;
    width: 50px;
    padding-top: 4px;
    font-size: 1.5rem;
    color: white;
    border-radius: 10px;
    border: 1px solid transparent;
  }
  .toggle-theme-btn:hover{
    border: 1px solid white;
    color: white;
    
  }

  </style>