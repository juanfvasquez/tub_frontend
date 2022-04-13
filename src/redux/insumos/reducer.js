import { SET_INSUMOS, ADD_INSUMO, UPDATE_INSUMO, DELETE_INSUMO } from "./types";

const INITIAL_STATE = {
  insumos: [],
}

export const insumosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INSUMOS:
      return { ...state, insumos: action.payload }
    case ADD_INSUMO:
      return { ...state, insumos: [...state.insumos, action.payload] }
    case UPDATE_INSUMO:
      return {
        ...state,
        insumos: state.insumos.map(insumo => {
          if (insumo.id === action.payload.id) {
            return action.payload
          }
          return insumo
        })
      }
    case DELETE_INSUMO:
      return {
        ...state,
        insumos: state.insumos.filter(insumo => insumo.id !== action.payload.id)
      }
    default:
      return state
  }
}