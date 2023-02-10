import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { postData } from "./api";

export const postUserFromForm = createAsyncThunk(
  "info/postUserFromForm",
  async (data = {}) => {
    let { errors, ...payload } = data;
    
    const response = await postData(payload);
    return response;
  }
);
const infoSlice = createSlice({
  name: "info",
  initialState: {
    activeStep: 1,
    isPG: false,
    countryCode: 91,
    errors: {},
  },
  reducers: {
    nextStep: (state) => {
      state.activeStep =
        state.activeStep < 3 ? state.activeStep + 1 : state.activeStep;
    },
    previousStep: (state) => {
      state.activeStep =
        state.activeStep > 1 ? state.activeStep - 1 : state.activeStep;
    },
    updateState: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    setErrors: (state, action) => {
      state.errors[action.payload.name] = action.payload.value;
    },
    clearAPIError: (state) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUserFromForm.pending, (state) => {
        state.loading = true;
      })
      .addCase(postUserFromForm.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(postUserFromForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { nextStep, previousStep, updateState, setErrors, clearAPIError } =
  infoSlice.actions;

export const store = configureStore({
  reducer: infoSlice.reducer,
});
