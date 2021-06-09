import {
  GET_ALL_BREEDS,
  GET_TEMPERAMENTS,
  GET_BREED_DETAIL,
  SEARCH_BREED,
  FILTERED_BREED,
  A_Z,
  Z_A,
  MIN_MAX,
  MAX_MIN,
} from "../actions/actions";

const incialState = {
  allBreeds: [],
  temperaments: [],
  breedDetail: [],
  filteredBreed: [],
};
function rootReducer(state = incialState, action) {
  switch (action.type) {
    case GET_ALL_BREEDS:
      return {
        ...state,
        allBreeds: action.payload.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        ),
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case GET_BREED_DETAIL:
      return {
        ...state,
        breedDetail: action.payload,
      };
    case SEARCH_BREED:
      return {
        ...state,
        allBreeds: action.payload,
      };

    case FILTERED_BREED:
      return {
        ...state,
        allBreeds: action.payload,
      };

    case A_Z:
      return {
        ...state,
        allBreeds: state.allBreeds
          .filter((b) => b.name !== null)
          .sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          ),
      };

    case Z_A:
      return {
        ...state,
        allBreeds: state.allBreeds
          .filter((b) => b.name !== null)
          .sort((a, b) =>
            a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
          ),
      };

    case MIN_MAX:
      state.allBreeds.forEach((b) => {
        if (typeof b.weight === "string") {
          let range = b.weight.split("- ");
          let promedy = (parseInt(range[0]) + parseInt(range[1])) / 2;
          b.weight = promedy;
        }
      });
      return {
        ...state,
        allBreeds: state.allBreeds
          .filter((b) => b.weight !== null)
          .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
      };

    case MAX_MIN:
      state.allBreeds.forEach((b) => {
        if (typeof b.weight === "string") {
          let range = b.weight.split("- ");
          let promedy = (parseInt(range[0]) + parseInt(range[1])) / 2;
          b.weight = promedy;
        }
      });
      return {
        ...state,
        allBreeds: state.allBreeds
          .filter((b) => b.weight !== null)
          .sort((a, b) => a.weight < b.weight ? 1 : -1),
      };

    default:
      return state;
  }
}

export default rootReducer;
