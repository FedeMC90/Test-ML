import axios from 'axios';
// const URL_BACK = 'http://localhost:3001';

// export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_BY_NAME = 'GET_ITEMS_BY_NAME';
export const GET_ITEM_DETAIL = 'GET_ITEM_DETAIL';
// export const GET_GENRES = 'GET_GENRES';
// export const GET_PLATFORMS = 'GET_PLATFORMS';
export const CLEAR_ITEM_DETAIL = 'CLEAR_ITEM_DETAIL';
export const CLEAR_HOME = 'CLEAR_HOME';
// export const FILTER_ITEMS_BY_ORIGIN = 'FILTER_ITEMS_BY_ORIGIN';
// export const FILTER_ITEMS_BY_GENRE = 'FILTER_ITEMS_BY_GENRE';
// export const ORDER = 'ORDER';
export const LOADING = 'LOADING';

// export const getItems = () => {
//   return async function (dispatch) {
//     dispatch(loading());
//     let json = await axios.get(`${URL_BACK}/items`);
//     return dispatch({ type: GET_ITEMS, payload: json.data })
//   }
// };

export const getItemsByName = (name) => {
  return async function (dispatch) {
    dispatch(loading());
    try {
      let json = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${name}`);
      return dispatch({ type: GET_ITEMS_BY_NAME, payload: json.data.results })  
    } catch (error) {
      return new Error('No se encontró ningún item con ese nombre.')
    }
  }
};

export const getItemDetail = (id) => {
   return async function (dispatch) {
     await fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((json) => {
          dispatch({ type: GET_ITEM_DETAIL, payload: json });
      });
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
// export const getGenres = () => {
//   return function (dispatch) {
//     fetch(`${URL_BACK}/genres`)
//       .then((response) => response.json())
//       .then((json) => {
//         return dispatch({ type: GET_GENRES, payload: json });
//       });
//   };
// };

// export const getPlatforms = () => {
//   return function (dispatch) {
//     fetch(`${URL_BACK}/platforms`)
//       .then((response) => response.json())
//       .then((json) => {
//         return dispatch({ type: GET_PLATFORMS, payload: json });
//       });
//   };
// };

// export const filterItemsByOrigin = (payload) => {
//   return {
//     type: FILTER_ITEMS_BY_ORIGIN,
//     payload
//   }
// };

// export const filterItemsByGenre = (payload) => {
//   return {
//     type: FILTER_ITEMS_BY_GENRE,
//     payload
//   }
// };

export function loading() {
  return {
    type: LOADING,
  };
}

// export const ordered = (payload) => {
//   return {
//     type: ORDER,
//     payload
//   }
// }
