<script setup>
import { ref, computed } from 'vue';
import { useNotesStore } from './store/NotesStore';
import Header from './components/Header.vue';
import NotesViewer from './components/NotesViewer.vue';
import searchBar from './components/searchBar.vue';
import AddNoteForm from './components/AddNoteForm.vue';

const notesStore = useNotesStore();

// const noteTitle = ref('');
// const noteDescription = ref('');
// const selectedPriority = ref('high');

// const isNotValid = computed(() => {
//   return noteTitle.value === '' || noteDescription.value === '';
// });


// function submitNote(){
//   notesStore.addNote({
//     title: noteTitle.value,
//     description: noteDescription.value,
//     priority: selectedPriority.value,
//   });

//   noteTitle.value = '';
//   noteDescription.value = '';
//   selectedPriority.value = 'high';
// }
</script>

<template>
  <Header>
  </Header>
  <main>
    <section>
      <AddNoteForm />
      <!-- <form class="createNoteBox" @submit.prevent="submitNote">
        <div >
          <label for="priority">Priority</label>
          <select v-model="selectedPriority" id="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div>
          <label for="note">Note Title:</label>
          <input type="text" id="note" v-model="noteTitle"/>
        </div>
        <div class="note-description">
          <label for="note-description">Note Description:</label>
          <textarea id="note-description" v-model="noteDescription"></textarea>          
        </div>
        <div>
          <button class="btn-primary" :disabled="isNotValid" >Create New Note</button>
        </div>
      </form> -->
    </section>
    <section>
      <searchBar />
      <NotesViewer />
    </section>
  </main>
</template>

<style scoped>
</style>
