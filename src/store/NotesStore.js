import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useNotesStore = defineStore('notes', () => {
  let index = JSON.parse(localStorage.getItem('index')) || 0;

  const generateId = () => {
    localStorage.setItem('index', JSON.stringify(index));
    return index++;
  };

  const notes = ref(JSON.parse(localStorage.getItem('notes')) || []);
  const searchQuery = ref('');

  // const generateId = () => index++;

  const filtredNotes = computed(() => {
    return notes.value.filter(note => {
      return (
        note.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        note.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
  });

  const refreshNote = () => {
    notes.value = [...notes.value]
    localStorage.setItem('notes', JSON.stringify(notes.value));
  };

  const addNote = (note) => {
    notes.value.push({
      id: generateId(),
      ...note,
    });

    console.log(notes);

    localStorage.setItem('index', JSON.stringify(index));
    localStorage.setItem('notes', JSON.stringify(notes.value));
  };

  const deleteNote = (id) => {
    notes.value = notes.value.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(notes.value));
  };

  // Here is the Layout
  const grid = ref(JSON.parse(localStorage.getItem('grid'))||'col');

  function getGrid() {
    return grid.value;
  }

  function togglegrid(){
    grid.value = grid.value === 'col' ? 'row' : 'col';
    localStorage.setItem('grid', JSON.stringify(grid.value));
  }

  return {
    notes,
    searchQuery,
    filtredNotes,
    addNote,
    deleteNote,
    refreshNote,
    getGrid,
    togglegrid,
  };
});