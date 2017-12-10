import { FETCH_CHANNEL, FETCH_CHANNEL_DETAIL } from '../actions/constants';
import { chanelListService, detailChanelListService } from '../service';

export const fetchChancelDone = channels => ({ type: FETCH_CHANNEL, payload: channels });
export const fetchChancelDetailDone = channels => ({
  type: FETCH_CHANNEL_DETAIL,
  payload: channels,
});

export const fetchChannel = () => dispatch =>
  chanelListService()
    .then(res => dispatch(fetchChancelDone(res.data.channels)))
    .catch(err => console.log(err));

export const fetchChannelDetail = () => dispatch =>
  detailChanelListService()
    .then(res => dispatch(fetchChancelDetailDone(res.data.channel)))
    .catch(err => console.log(err));
