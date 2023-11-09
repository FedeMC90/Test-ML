import { 
  GET_ITEMS, 
  GET_ITEMS_BY_NAME,
  GET_ITEM_DETAIL,
  GET_GENRES, 
  CLEAR_ITEM_DETAIL,
  LOADING,
  FILTER_ITEMS_BY_ORIGIN,
  FILTER_ITEMS_BY_GENRE,
  ORDER,
  GET_PLATFORMS,
  CLEAR_HOME
} from '../actions';

const initialState = {
  items: [],
  allItems: [],
  itemDetail: {},
  genres: [],
  platforms: [],
  loading: false,
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        allItems: action.payload
      };
    case GET_ITEMS_BY_NAME:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };  
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };  
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
    case FILTER_ITEMS_BY_ORIGIN:
      const itemsOrigin = state.allItems;
      const filteredByOrigin = action.payload === 'todos' ? itemsOrigin : 
        action.payload === 'api' ? itemsOrigin.filter(e => !isNaN(e.id)) :
        itemsOrigin.filter(e => isNaN(e.id))
      return {
        ...state,
        items: filteredByOrigin
      };
    case FILTER_ITEMS_BY_GENRE:
      const itemsGenre = state.allItems;
      const filteredByGenre = action.payload === 'todos' ? itemsGenre : 
        itemsGenre.filter(e => e.genres.some(e => e.name === action.payload));
      return {
        ...state,
        items: filteredByGenre
      };   
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ORDER:
      let orderItems = action.payload === 'atoz' ?
        state.items.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        }) : action.payload === 'ztoa' ?
        state.items.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        }) : action.payload === '0to5' ?
        state.items.sort((a, b) => {
          if (a.rating > b.rating) return 1;
          if (a.rating < b.rating) return -1;
          return 0;
        }) : action.payload === '5to0' ?
        state.items.sort((a, b) => {
          if (a.rating > b.rating) return -1;
          if (a.rating < b.rating) return 1;
          return 0;
        }) : state.allItems
        
      return {
        ...state,
        items: orderItems,
      }
    default:
      return state;
  }
};
