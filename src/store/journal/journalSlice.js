import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSave: '',
        notes: [],
        active: null,
        /* active: {
            id: '',
            title: '',
            body: '',
            date: 0,
            imageUrls: [],
        } */
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSave = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isLoading = true;
            state.messageSave = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });

            state.messageSave = `Nota "${action.payload.title}", actualizada correctamente`;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        deleteNoteByID: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
            state.active = null;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.notes = [];
            state.active = null;
            state.messageSave = '';
        },
    },
});


export const {
    addNewEmptyNote,
    deleteNoteByID, 
    clearNotesLogout,
    savingNewNote,
    setActiveNote,
    setNotes, 
    setPhotosToActiveNote, 
    setSaving, 
    updateNote, 
} = journalSlice.actions;