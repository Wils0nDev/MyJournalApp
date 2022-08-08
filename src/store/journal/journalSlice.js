import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active:null
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    savingNewNote: (state)=> { 
        state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
        state.notes.push(action.payload);
        state.isSaving = false;
    },

    setActiveNote: (state, action) => {

      state.active = action.payload;
      state.messageSaved = '';

    },

    setNote: (state, action) => {
      state.notes = action.payload
    },

    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },

    updateNote: (state, action) => {
   
      state.isSaving = false;
      state.notes = state.notes.map( (note) => {
        if(note.id === action.payload.id){
          return action.payload
        }
        return note;
      })

      //mostrar mensaje de acutualizacion
      state.messageSaved = `${action.payload.title}, actualizada correctamente`

    },

    deleteNoteById: (state, action) => {},
  },
});

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNote,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
