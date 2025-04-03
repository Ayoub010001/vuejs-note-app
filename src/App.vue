<script setup>
import { ref, computed } from 'vue';
import { useNotesStore } from './store/NotesStore';
import Header from './components/Header.vue';
import NotesViewer from './components/NotesViewer.vue';
import searchBar from './components/searchBar.vue';
import AddNoteForm from './components/AddNoteForm.vue';

// const notesStore = useNotesStore();

</script>

<template :class="{ dark: isDarkMode }">
  <Header>
  </Header>
  <main>
    <section>
      <AddNoteForm />
    </section>
    <section>
      <searchBar />
      <NotesViewer />
    </section>
  </main>
</template>

<style scoped></style>
