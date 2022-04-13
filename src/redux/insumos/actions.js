import { SET_INSUMOS, ADD_INSUMO, UPDATE_INSUMO, DELETE_INSUMO } from "./types";

export const setInsumos = insumos => ({
  type: SET_INSUMOS,
  payload: insumos,
})

export const addInsumo = insumo => ({
  type: ADD_INSUMO,
  payload: insumo,
})

export const updateInsumo = insumo => ({
  type: UPDATE_INSUMO,
  payload: insumo,
})

export const deleteInsumo = insumo => ({
  type: DELETE_INSUMO,
  payload: insumo,
})