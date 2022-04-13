import { SET_UNIDADES, ADD_UNIDAD, UPDATE_UNIDAD, DELETE_UNIDAD } from "./types"

export const setUnidades = unidades => ({
  type: SET_UNIDADES,
  payload: unidades,
})

export const addUnidad = unidad => ({
  type: ADD_UNIDAD,
  payload: unidad,
})

export const updateUnidad = unidad => ({
  type: UPDATE_UNIDAD,
  payload: unidad,
})

export const deleteUnidad = unidad => ({
  type: DELETE_UNIDAD,
  payload: unidad,
})