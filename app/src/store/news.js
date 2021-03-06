import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"

const slice = createSlice({
  name: "news",
  initialState: [],
  reducers:  {
    getAllNews : (posts, action) => {
      return action.payload
    },
    getNewsByNewsId: (posts, action) => {
      posts.push(action.payload)
    }
  }
})

export const {getMisquoteByMisquoteId, getAllMisquotes} = slice.actions

export const fetchAllMisquotes = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/misquote`)
  dispatch(getAllMisquotes(data))
}

export default slice.reducer