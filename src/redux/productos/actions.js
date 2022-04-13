import { SET_PRODUCTOS, ADD_PRODUCTO, UPDATE_PRODUCTO, DELETE_PRODUCTO } from "./types"

export const setProductos = productos => ({
  type: SET_PRODUCTOS,
  payload: productos,
})

export const addProducto = producto => ({
  type: ADD_PRODUCTO,
  payload: producto,
})

export const updateProducto = producto => ({
  type: UPDATE_PRODUCTO,
  payload: producto,
})

export const deleteProducto = producto => ({
  type: DELETE_PRODUCTO,
  payload: producto,
})