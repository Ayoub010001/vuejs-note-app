<script setup>
    import { useNotesStore } from '../store/NotesStore';
    const notesStore = useNotesStore();
</script>
<template>
    <nav>
        <p>Created Notes</p>
            <input class="searchInput" type="text" placeholder="Search notes..." v-model="notesStore.searchQuery" />
      </nav>
</template>
<style scoped>
::placeholder {
  color: white;
  opacity: 0.8; 
}
</style>