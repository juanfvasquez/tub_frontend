import { SET_PRODUCTOS, ADD_PRODUCTO, UPDATE_PRODUCTO, DELETE_PRODUCTO } from "./types"

const INITIAL_STATE = {
  productos: [],
}

export const productosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTOS:
      return { ...state, productos: action.payload }
    case ADD_PRODUCTO:
      return { ...state, productos: [...state.productos, action.payload] }
    case UPDATE_PRODUCTO:
      return {
        ...state,
        productos: state.productos.map(producto => {
          if (producto.id === action.payload.id) {
            return action.payload
          }
          return producto
        })
      }
    case DELETE_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== action.payload.id)
      }
    default:
      return state
  }
}