import axios from "axios";
const DELETE_HOUSE = "DELETE_HOUSE";
const ADD_HOUSE = "ADD_HOUSE";
const SET_HOUSES = "SET_HOUSES";

const initialState = {
  houses: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_HOUSE:
      return Object.assign({}, state, { houses: action.payload });
    case ADD_HOUSE:
      return Object.assign({}, state, { houses: action.payload });
    case `${SET_HOUSES}_FULFILLED`:
      return Object.assign({}, state, { houses: action.payload });
    default:
      return state;
  }
}

export function setHouses() {
  return {
    type: SET_HOUSES,
    payload: axios.get("http://localhost:3001/api/houses").then(result => {
      return result.data;
    })
  };
}

export function deleteHouse(id) {
  return {
    type: DELETE_HOUSE,
    payload: axios
      .delete(`http://localhost:3001/api/houses/${id}`)
      .then(result => {
        return result.data;
      })
  };
}
export function addHouse(house) {
  return {
    type: ADD_HOUSE,
    payload: axios
      .post("http://localhost:3001/api/houses", house)
      .then(result => {
        return result.data;
      })
  };
}

export default reducer;
