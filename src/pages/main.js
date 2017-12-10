import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Dropdown } from 'semantic-ui-react';
import { ChannelList } from '../components';
import { fetchChannelDetail } from '../store/actions';

const sort = {
  by: [{ text: 'id', value: 'id' }, { text: 'name', value: 'name' }],
  options: [{ text: 'ASC', value: 'asc' }, { text: 'DESC', value: 'desc' }],
};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'id',
      sortOption: 'asc',
    };
  }
  sortedBy(param) {
    this.setState({
      sortBy: param.value,
    });
  }
  sortedOption(param) {
    this.setState({
      sortOption: param.value,
    });
  }
  render() {
    return (
      <Container>
        <div style={{ margin: '20px' }}>Chanel list</div>
        <Grid textAlign="left">
          <Grid.Column computer={3} mobile={8}>
            <Dropdown
              placeholder="Sort by"
              fluid
              selection
              options={sort.by}
              onChange={(event, param) => this.sortedBy(param)}
            />
          </Grid.Column>
          <Grid.Column computer={3} mobile={8}>
            <Dropdown
              placeholder="Sort options"
              fluid
              selection
              options={sort.options}
              onChange={(event, param) => this.sortedOption(param)}
            />
          </Grid.Column>
        </Grid>
        <ChannelList
          sortBy={this.state.sortBy}
          sortOption={this.state.sortOption}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchChannelDetail: () => dispatch(fetchChannelDetail()),
});

export default connect(null, mapDispatchToProps)(MainPage);
