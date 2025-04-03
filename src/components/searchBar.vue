<script setup>
import { useNotesStore } from '../store/NotesStore';
import { AkGrid } from '@kalimahapps/vue-icons';
import { AnOutlinedBars } from '@kalimahapps/vue-icons';
import { ref } from 'vue';
const notesStore = useNotesStore();

//   const grid = ref('col');

//   function togglegrid(){
//     grid.value = grid.value === 'col' ? 'row' : 'col';
//   }
</script>
<template>
    <nav>
        <p>Created Notes</p>
        <input class="searchInput" type="text" placeholder="Search notes..." v-model="notesStore.searchQuery" />
        <div class="toggle-grid">

            <button class="toggle-theme-btn" @click="notesStore.togglegrid">
                <AkGrid v-if="notesStore.getGrid() === 'col'" />
                <AnOutlinedBars v-else />
            </button>

        </div>
    </nav>
</template>
<style scoped>
::placeholder {
    color: white;
    opacity: 0.8;
}
.toggle-theme-btn{
    background: #3a3e5a;
    border: none;
    cursor: pointer;
    height: 45px;
    width: 45px;
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