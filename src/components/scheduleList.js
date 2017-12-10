import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader, Grid, Modal, Header, Button, Image } from 'semantic-ui-react';
import { fetchChannel } from '../store/actions';

class ScheduleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChannel:[]
    };
  }
  componentDidMount() {
    this.props.fetchChannel();
    // this.setState({
    //   showChanel:this.props.channels && this.props.channels.slice(0,9)
    // })
  }
  onScroll(event){

  }

  fillShowChannel(channels) {
    if (channels && channels.length !== 0) {
      this.setState({
        showChanel:channels && channels.slice(0,9)
      })
    }
  }
  letSort(data) {
    const { sortBy, sortOption } = this.props;
    if (sortBy === 'id') {
      data.sort((a, b) => {
        if (sortOption === 'asc') {
          return a.channelId - b.channelId;
        }
        return b.channelId - a.channelId;
      });
    } else {
      data.sort((a, b) => {
        const nameA = a.channelTitle.toUpperCase();
        const nameB = b.channelTitle.toUpperCase();
        if (sortOption === 'asc') {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
    }
    return data;
  }
  // checkFavorite(id) {
  //   return Boolean(!(this.props.favorites.findIndex(data => Number(data) === id) === -1));
  // }
  render() {
    const { channels } = this.props;
    if (channels && channels.length === 0) {
      return <Loader active />;
    }
    return (
      <div>
        <Grid>
          {this.letSort(channels).map(channel => (
            <Grid.Column
              key={channel.channelId}
              computer={4}
              mobile={8}
              onClick={() => this.onChannelClick(channel)}
            />
					))}
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchChannel: () => dispatch(fetchChannel()),
});

const mapStateToProps = state => ({
  channels: state.Channels,
  favorites: state.favorites,
});
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleList);
