import App from '../App.vue';
import { mount } from '@vue/test-utils';
import { useNotesStore } from '../store/NotesStore';
import { createTestingPinia } from '@pinia/testing';
import { describe, it, expect } from 'vitest';

describe("Test App if it renders Form and NotesList", () => {
  const pinia = createTestingPinia();

  it('renders Form and NotesList', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [pinia],
      },
    });

    const notesStore = useNotesStore();
    notesStore.notes = [
      { id: 1, title: 'Test Note', content: 'This is a test note.' },
      { id: 2, title: 'Test Note 2', content: 'Test Content for Note 2' },
    ];

    expect(wrapper.find('form.createNoteBox').exists()).toBe(true);
    expect(wrapper.find('.notes-container').exists()).toBe(true);
  });

  it('checks if Form and NotesViewer components exist', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [pinia],
      },
    });
    
    const notesViewerComponent = wrapper.findComponent({ name: 'NotesViewer' });
    expect(notesViewerComponent.exists()).toBe(true);

    const HeaderComponent = wrapper.findComponent({ name: 'Header' });
    expect(HeaderComponent.exists()).toBe(true);
    
    const searchComponent = wrapper.findComponent({ name: 'searchBar' });
    expect(searchComponent.exists()).toBe(true);
  });
});