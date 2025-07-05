import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import type { AboutMeData, EducationItem, ExperienceItem } from "../types"
import { CONTENT_BASE } from "../constants.ts"

export const fetchAllContent = createAsyncThunk(
  "content/fetchAll",
  async () => {
    const [aboutMe, experiences, educations] = await Promise.all([
      fetch(`${CONTENT_BASE}aboutme.json`).then((res) => res.json()),
      fetch(`${CONTENT_BASE}experiences.json`).then((res) => res.json()),
      fetch(`${CONTENT_BASE}educations.json`).then((res) => res.json()),
    ])
    return { aboutMe, experiences, educations }
  },
)

interface ContentState {
  aboutMe: AboutMeData | null
  experiences: ExperienceItem[]
  educations: EducationItem[]
  loading: boolean
  error: string | null
}

const initialState: ContentState = {
  aboutMe: null,
  experiences: [],
  educations: [],
  loading: false,
  error: null,
}

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContent.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAllContent.fulfilled, (state, action) => {
        state.loading = false
        state.aboutMe = action.payload.aboutMe
        state.experiences = action.payload.experiences
        state.educations = action.payload.educations
      })
      .addCase(fetchAllContent.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? "Failed to fetch content"
      })
  },
})

export default contentSlice.reducer
