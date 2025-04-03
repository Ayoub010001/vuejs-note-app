<script setup>
import { useNotesStore } from '../store/NotesStore';
import { LuCircleX } from '@kalimahapps/vue-icons';
import { AkDoubleCheck } from '@kalimahapps/vue-icons';
const notesStore = useNotesStore();
</script>
<template>
    <div class="notes-container">
        <p v-if="notesStore.filtredNotes.length === 0" class="not-found-msg">No Notes Available</p>
        <div v-else v-for="note in notesStore.filtredNotes" :key="note.id" class="note-card">
            <div class="note-priority" :class="{
                'high-priority': note.priority === 'high',
                'medium-priority': note.priority === 'medium',
                'low-priority': note.priority === 'low'
            }">

            </div>
            <div class="note-content">
                <input type="text" v-model="note.title" class="textInput title"/>
                <input type="text" v-model="note.description" class="textInput desc"/>
                <button class="delete-btn" @click="notesStore.deleteNote(note.id)"><LuCircleX/></button>
                <button class="save-btn" @click="notesStore.refreshNote()"><AkDoubleCheck/></button>
            </div>
        </div>
    </div>
</template>
