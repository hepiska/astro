import { FAVORITE_CHANNEL_ADD } from '../actions/constants';

const initialState = localStorage.getItem('astroFavorite').split(',').map(data => Number(data)) || [];
const addFav = (state, id) => {
  const favotires = state;
  let newstate = [];
  if (favotires.findIndex(favorite => favorite === id) === -1) {
    newstate = [...favotires, id];
  } else {
    newstate = favotires.filter(favorite => favorite !== id);
  }
  localStorage.setItem('astroFavorite', newstate);
  return newstate;
};

const FavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_CHANNEL_ADD: return addFav(state, action.payload);
    default:
      return state;
  }
};

export default FavoriteReducer;
