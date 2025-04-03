
import { useNotesStore } from "@/store/NotesStore";
import { createTestingPinia } from "@pinia/testing";
import { setActivePinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";


describe("Test NotesStore", () => {
    let notesStore;

    beforeEach(() => {
        
        setActivePinia(createTestingPinia({
            stubActions: false,
        }));
        notesStore = useNotesStore();
    });

    it('Test Adding new note & Id generation', () => {
        notesStore.notes = []; 
        const newNote = {
            title: 'Test Note',
            description: 'This is a test note.',
            priority: 'low',
        };
        notesStore.addNote(newNote);
        expect(notesStore.notes).toHaveLength(1);
        expect(notesStore.notes[0]).toMatchObject(newNote);
        expect(notesStore.notes[0].id).toBe(0);
    });

    it('Test deleting note by id', () => {
        const note1 = {
            id: 0,
            title: 'Note 1',
            description: 'Description 1',
            priority: 'low',
        };
        const note2 = {
            id: 1,
            title: 'Note 2',
            description: 'Description 2',
            priority: 'high',
        };

        notesStore.notes = [note1, note2];
        notesStore.deleteNote(0);
        expect(notesStore.notes).toHaveLength(1);
        expect(notesStore.notes[0]).toMatchObject(note2);
    });

    // ✅ passed
    it('Test search query functionality',() => {
        const note1 = {
            id: 1, title: 'Note 1',
            description: 'Description 1',
            priority: 'low'
        }
        const note2 = { 
            id: 2, title: 'Note 2', 
            description: 'Description 2', 
            priority: 'high' 
        };
        const note3 = { 
            id: 3, title: 'Note 3', 
            description: 'Description 3', 
            priority: 'high' 
        };

        notesStore.notes = [note1, note2, note3];
        notesStore.searchQuery = 'Note 1';

        expect(notesStore.filtredNotes).toHaveLength(1);
        expect(notesStore.filtredNotes[0]).toMatchObject(note1);

        notesStore.searchQuery = 'Note';

        expect(notesStore.filtredNotes).toHaveLength(3);

        expect(notesStore.filtredNotes[0]).toMatchObject( note1);
        expect(notesStore.filtredNotes[1]).toMatchObject( note2);
        expect(notesStore.filtredNotes[2]).toMatchObject( note3);
    })
});