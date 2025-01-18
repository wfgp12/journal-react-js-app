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
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isLoading = action.payload;
        },
        updateNote: (state, action) => {
            state.notes = action.payload;
        },
        deleteNoteByID: (state, action) => {
            state.notes = action.payload;
        },
    },
});


export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteByID } = journalSlice.actions;