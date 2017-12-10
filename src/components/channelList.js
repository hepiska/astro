import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader, Grid, Modal, Header, Button, Image } from 'semantic-ui-react';
import { fetchChannelDetail } from '../store/actions';
import ChannelCard from './channelCard';

class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
      modalData: {},
    };
  }
  componentDidMount() {
    this.props.fetchChannelDetail();
  }
  onChannelClick(channel) {
    this.setState({
      modalData: channel,
    });
    this.ChangeModalStatus();
  }
  ChangeModalStatus() {
    this.setState({
      modalStatus: !this.state.modalStatus,
    });
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
  checkFavorite(id) {
    return Boolean(!(this.props.favorites.findIndex(data => Number(data) === id) === -1));
  }
  renderModal() {
    return (
      <Modal open={this.state.modalStatus}>
        <Modal.Header>Channel Detail</Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Column computer={6} mobile={16}>
              <Image
                wrapped
                size="medium"
                src={
                  this.state.modalData.channelExtRef && this.state.modalData.channelExtRef[1].value
                }
              />
            </Grid.Column>
            <Grid.Column computer={10} mobile={16}>
              <Modal.Description>
                <Header>{this.state.modalData && this.state.modalData.channelTitle}</Header>
                <p>{this.state.modalData && this.state.modalData.channelDescription}</p>
              </Modal.Description>
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => this.ChangeModalStatus()}>
            close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
  render() {
    const { channelDetail } = this.props;
    if (channelDetail && channelDetail.length === 0) {
      return <Loader active />;
    }
    return (
      <div>
        {this.renderModal()}
        <Grid>
          {this.letSort(channelDetail).map(channel => (
            <Grid.Column
              key={channel.channelId}
              computer={4}
              mobile={8}
              onClick={() => this.onChannelClick(channel)}
            >
              <ChannelCard isFavorite={this.checkFavorite(channel.channelId)} channel={channel} />
            </Grid.Column>
					))}
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchChannelDetail: () => dispatch(fetchChannelDetail()),
});

const mapStateToProps = state => ({
  channelDetail: state.ChannelsDetail,
  favorites: state.favorites,
});
export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
