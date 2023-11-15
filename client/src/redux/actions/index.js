import axios from 'axios';
export const GET_ITEMS_BY_NAME = 'GET_ITEMS_BY_NAME';
export const GET_ITEM_DETAIL = 'GET_ITEM_DETAIL';
export const GET_CATEGORY_PATH = 'GET_CATEGORY_PATH';
export const CLEAR_ITEM_DETAIL = 'CLEAR_ITEM_DETAIL';
export const CLEAR_HOME = 'CLEAR_HOME';
export const LOADING = 'LOADING';

export const getItemsByName = (name) => {
	return async function (dispatch) {
		dispatch(loading());
		try {
			let json = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${name}`);
      return dispatch({ type: GET_ITEMS_BY_NAME, payload: json.data });
		} catch (error) {
			return new Error('No se encontró ningún item con ese nombre.');
		}
	};
};

export const getItemDetail = (id) => {
	return async function (dispatch) {
		dispatch(loading());
		try {
			let json = await axios.get(`https://api.mercadolibre.com/items/${id}`);
			let json_desc = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
			json.data.description = json_desc.data.plain_text;
			return dispatch({ type: GET_ITEM_DETAIL, payload: json.data });
		} catch (error) {
			return new Error('No se encontró el detalle del item');
		}
	};
};

export const getCategoryPath = (id) => {
	return async function (dispatch) {
		try {
			let json = await axios.get(`https://api.mercadolibre.com/categories/${id}`);
      return dispatch({ type: GET_CATEGORY_PATH, payload: json.data });
		} catch (error) {
			return new Error('No se encontró ninguna categoría con ese id.');
		}
	};
};

export function clearItemDetail() {
	return {
		type: CLEAR_ITEM_DETAIL,
	};
}

export function clearHome() {
	return {
		type: CLEAR_HOME,
	};
}
export function loading() {
	return {
		type: LOADING,
	};
}
