<script setup>
import { ref, computed } from 'vue';
import { useNotesStore } from '../store/NotesStore';
const notesStore = useNotesStore();

const noteTitle = ref('');
const noteDescription = ref('');
const selectedPriority = ref('high');

const isNotValid = computed(() => {
  return noteTitle.value === '' || noteDescription.value === '';
});
function submitNote(){
  notesStore.addNote({
    title: noteTitle.value,
    description: noteDescription.value,
    priority: selectedPriority.value,
  });

  noteTitle.value = '';
  noteDescription.value = '';
  selectedPriority.value = 'high';
}
</script>
<template>
    <form class="createNoteBox" @submit.prevent="submitNote">
        <div class="input-group">
          <label for="priority">Priority <span class="mandatory">*</span></label>
          <select v-model="selectedPriority" id="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div class="input-group">
          <label for="note">Note Title <span class="mandatory">*</span></label>
          <input type="text" id="note" v-model="noteTitle" placeholder="Note Title"/>
        </div>
        <div class="note-description input-group">
          <label for="note-description">Note Description <span class="mandatory">*</span></label>
          <textarea id="note-description" v-model="noteDescription" placeholder="Note Description"></textarea>          
        </div>
        <div>
          <button class="btn-primary" :disabled="isNotValid" >Create New Note</button>
        </div>
      </form>
</template>
