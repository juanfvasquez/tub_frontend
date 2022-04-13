import { combineReducers } from 'redux';
import { insumosReducer } from './insumos/reducer';
import { productosReducer } from './productos/reducer';
import { unidadesReducer } from './unidades/reducer';

export const reducer = combineReducers({
  insumos: insumosReducer,
  unidades: unidadesReducer,
  productos: productosReducer,
})