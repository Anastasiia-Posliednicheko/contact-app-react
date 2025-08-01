import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
       try{
        const response = await axios.get("/contacts");
        return response.data;
       } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
       }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try{
            const response = await axios.post("/contacts", contact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try{
            const response = await axios.delete(`contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const updateContact = createAsyncThunk(
    "contacts/updateContact",
      async ({id, name, number}, {rejectWithValue}) => {
        try {
            const response = await axios.patch(`/contacts/${id}`, {name, number});
            return response.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)