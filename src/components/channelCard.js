import React from 'react';
import { connect } from 'react-redux';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import { addFavorite } from '../store/actions';

const ChannelCard = (props) => {
  const { channel, isFavorite } = props;
  return (
    <Card>
      <Image size="large" src={channel.channelExtRef[4].value} />
      <Card.Content>
        <Grid >
          <Grid.Column width={12}>
            {`${channel.channelId}. ${channel.channelTitle}`}
          </Grid.Column>
          <Grid.Column textAlign="right" width={4}>
            {isFavorite ?
              <Icon style={{zIndex:10}} name="star" onClick={() => props.addFavorite(channel.channelId)} /> :
              <Icon style={{zIndex:10}} name="empty star" onClick={() => props.addFavorite(channel.channelId)} />}
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = dispatch => ({
  addFavorite: id => dispatch(addFavorite(id)),
});

export default connect(null, mapDispatchToProps)(ChannelCard);
