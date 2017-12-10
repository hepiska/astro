import { FAVORITE_CHANNEL_ADD } from '../actions/constants';

export const addFavorite = id => ({ type: FAVORITE_CHANNEL_ADD, payload: id });
