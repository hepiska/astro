import axios from 'axios';

const baseUrl = 'http://ams-api.astro.com.my/ams/v3/';

function chanelListService() {
  return axios.get(`${baseUrl}/getChannelList`);
}

function detailChanelListService(id = []) {
  let url = '/getChannels';
  if (id.lenght > 0) {
    url = `${url}?${id.join(',')}`;
  }
  return axios.get(baseUrl + url);
}

function chanelEventService(id = 1) {
  const url = `searchEvents?periodStart='2017-12-09 00:00'&periodEnd='2017-12-09 23:00'&channelId=${id}`;
  return axios.get(baseUrl + url);
}

export {
  chanelListService,
  detailChanelListService,
  chanelEventService,
};
