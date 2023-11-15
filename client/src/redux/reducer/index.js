import { GET_ITEMS_BY_NAME, GET_ITEM_DETAIL, CLEAR_ITEM_DETAIL, LOADING, CLEAR_HOME, GET_CATEGORY_PATH } from '../actions';

const initialState = {
	items: [],
  filters: [],
	categoryPath: [],
	itemDetail: {},
	loading: false,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_ITEMS_BY_NAME:
			let categoryId = 0;

			if (action.payload.available_filters.find((e) => e.id === 'category')) {
				const categories = action.payload.available_filters.find((e) => e.id === 'category');
				let mayor = categories.values[0].results;
				categoryId = categories.values[0].id;

				for (const e of categories.values) {
					if (e.results > mayor) {
						mayor = e.results;
						categoryId = e.id;
					}
				}
			} else {
				const categories = action.payload.filters.find((e) => e.id === 'category');
				categoryId = categories.values[0].id;
			}

			return {
				...state,
				loading: false,
        categoryId,
				items: action.payload.results,
			};
		case GET_CATEGORY_PATH:
			return {
				...state,
				categoryPath: action.payload.path_from_root
			}
		case CLEAR_ITEM_DETAIL:
			return {
				...state,
				itemDetail: {},
			};
		case CLEAR_HOME:
			return {
				...state,
				items: [],
			};
		case GET_ITEM_DETAIL:
			return {
				...state,
				loading: false,
				itemDetail: action.payload,
			};
		case LOADING:
			return {
				...state,
				categoryPath: [],
				loading: true,
			};
		default:
			return state;
	}
}
