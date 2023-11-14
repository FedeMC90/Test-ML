import { 
  GET_ITEMS_BY_NAME,
  GET_ITEM_DETAIL,
  CLEAR_ITEM_DETAIL,
  LOADING,
  CLEAR_HOME
} from '../actions';

const initialState = {
  items: [],
  itemDetail: {},
  loading: false,
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_BY_NAME:
      return {
        ...state,
        loading: false,
        items: action.payload,
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
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
