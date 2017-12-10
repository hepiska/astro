import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import { Redirect, Link } from 'react-router-dom';

const Header = () => (
  <Container>
    <Grid verticalAlign="middle">
      <Grid.Column floated="left" width={5}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/5/5b/Astro_Satellite_Pay_TV_Provider_%28Malaysia%29.png"
          size="small"
        />
      </Grid.Column>
      <Grid.Column floated="right" width={5} textAlign="right">
        <Grid>
          <Grid.Column width={5}>
            <Link to="/">
              Main
            </Link>
          </Grid.Column>
          <Grid.Column width={5}>
            <Link to="/schedule">Schedule</Link>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  </Container>
);

export default Header;
