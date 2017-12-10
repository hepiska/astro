import { combineReducers } from 'redux';

import { ChannelReducer, ChannelReducerDetail } from './channel';
import FavoriteReducer from './favorite';

const RootReducer = combineReducers({
  Channels: ChannelReducer,
  ChannelsDetail: ChannelReducerDetail,
  favorites: FavoriteReducer,
});

export default RootReducer;
