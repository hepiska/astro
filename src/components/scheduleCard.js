import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Grid, Card, Image, Icon, Label } from 'semantic-ui-react';
import { addFavorite } from '../store/actions';

const baseUrl = 'http://ams-api.astro.com.my/ams/v3/searchEvents?';

class SceduleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    const date = new Date();
    const periodEnd = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 00:00`;
    const periodStart = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 23:59`;
    const query = `periodStart=${periodStart}&periodEnd=${periodEnd}&channelId=${
      this.props.channel.channelId
    }`;
    axios.get(baseUrl + query).then(res =>
      this.setState({
        events: res.data.events,
      }));
  }
  checkOnAir(start, end) {
    let date = new Date();
    let newStart = start.split(' ')[1].split(':');
    newStart = Number(newStart[0]) * 60 + Number(newStart[1]);
    let newEnd = end.split(' ')[1].split(':');
    newEnd = Number(newEnd[0]) * 60 + Number(newEnd[1]);
    let current = date.getHours() * 60 + date.getMinutes();
    if (current >= newStart && current <= newEnd ) {
      return true
    }
    return false
  }
  render() {
    const { channel } = this.props;
    return (
      <Grid key={channel.channelId} verticalAlign="middle">
        <Grid.Column computer={4} mobile={6} verticalAlign="middle">
          <Card>
            <Card.Content header={channel.channelId} />
            <Card.Content description={channel.channelTitle} />
          </Card>
        </Grid.Column>
        <Grid.Column computer={12} mobile={10}>
          <div
            style={{
              display: 'flex',
              flex: 1,
              height: '125px',
              flexDirection: 'row',
              overflow: 'scroll',
            }}
          >
            {this.state.events &&
              this.state.events.map(event => (
                <div
                  key={event.id}
                  style={{ marginTop: '10px', height: '100%', marginRight: '10px' }}
                >
                  <Card
                    color={this.checkOnAir(event.fields[0].displayDateTime, event.fields[0].displayEndDateTime) ? 'green' : 'grey'}>
                    {this.checkOnAir(event.fields[0].displayDateTime, event.fields[0].displayEndDateTime) ?
                      <Label color='green' floating>On air</Label> : null}
                    <Card.Content>
                      <Card.Header>{event.fields[0].eventName}</Card.Header>
                      <Card.Description>
                        <span>Start {event.fields[0].displayDateTime.split(' ')[1]}</span>
                      </Card.Description>
                      <Card.Description>
                        <span>End {event.fields[0].displayEndDateTime.split(' ')[1]}</span>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </div>))}
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SceduleCard;
