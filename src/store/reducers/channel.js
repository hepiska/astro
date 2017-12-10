import { FETCH_CHANNEL, FETCH_CHANNEL_DETAIL } from '../actions/constants';

const fetchChanel = payload => payload;
const fetchChanelDetail = payload => payload;

const ChannelReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CHANNEL: {
      const newstate = fetchChanel(action.payload);
      return newstate;
    }
    default:
      return state;
  }
};

const ChannelReducerDetail = (state = [], action) => {
  switch (action.type) {
    case FETCH_CHANNEL_DETAIL: {
      const newstate = fetchChanelDetail(action.payload);
      return newstate;
    }
    default:
      return state;
  }
};
export {
  ChannelReducer,
  ChannelReducerDetail,
};
