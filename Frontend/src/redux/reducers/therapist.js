import { GET_THERAPIST_BY_ID, GET_THERAPIST_PER_PAGE, FILTER_STATUS, SEARCH_STATUS, FILTER_THERAPIST, SEARCH_THERAPIST, SEARCH_VALUE, INSERT_THERAPIST } from "../actions/action-type";
const initialState = {
  therapists: [],
  therapist: {},
  filterTherapists: [],
  filterStatus: false,
  searchStatus: false,
  search: ""
};

const therapist = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_THERAPIST_BY_ID:
      return {
        ...state,
        therapist: payload,
      };
    case GET_THERAPIST_PER_PAGE: 
      return {
        ...state,
        therapists: payload
      }
      case FILTER_STATUS:
        return{
            ...state,
            filterStatus: payload
        }

        case SEARCH_STATUS:
        return{
            ...state,
            searchStatus: payload
        }

        case FILTER_THERAPIST:
            return{
                ...state,
                therapists: payload
            }

        case SEARCH_THERAPIST:
          return{
            ...state,
            therapists: payload
          }

          case SEARCH_VALUE:
            return{
              ...state,
              search: payload

            }

            case INSERT_THERAPIST:
              return{
                ...state,
                therapist: payload
              }
    default:
      return state;
  }
};

export default therapist;
