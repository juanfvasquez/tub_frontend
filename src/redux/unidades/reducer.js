import { SET_UNIDADES, ADD_UNIDAD, UPDATE_UNIDAD, DELETE_UNIDAD } from "./types"

const INITIAL_STATE = {
  unidades: [],
}

export const unidadesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_UNIDADES:
      return { ...state, unidades: action.payload }
    case ADD_UNIDAD:
      return { ...state, unidades: [...state.unidades, action.payload] }
    case UPDATE_UNIDAD:
      return {
        ...state,
        unidades: state.unidades.map(unidad =>
          unidad.id === action.payload.id ? action.payload : unidad
        ),
      }
    case DELETE_UNIDAD:
      return {
        ...state,
        unidades: state.unidades.filter(unidad => unidad.id !== action.payload),
      }
    default:
      return state
  }
}