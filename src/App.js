import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Button, Container, Divider, Flag, Header, Image, Icon, Input, Label } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Container textAlign="left">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
        </Container>
        <br />
        <Container textAlign="right">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Container>
        <br />
        <Container textAlign="center">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Container>
        <br />
        <Container textAlign="justified">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Container>

        <Divider horizontal>Batas</Divider>

        <Grid container columns={3}>
          <Grid.Column>
            <Button primary>Kirim Pertama</Button>
            <Button secondary>Kirim Pertama</Button>
            <Button Basic color="red">Kirim Pertama</Button>
          </Grid.Column>
          <Grid.Column>
            <Flag name="id" />
            <Flag name="indonesia" />
            <Flag name="ps" />
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" color="red">
              <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" />
              Dodi Sutarya
            </Header>
          </Grid.Column>
        </Grid>

        <Container textAlign="center">
          <Icon name="spinner" size="big" loading />
        </Container>

        <Image 
          href="https://google.com" 
          target="_blank" 
          size="tiny" 
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
        />

        <Input type="text" placeholder="search" icon={ <Icon name="search" /> } />

        <Label pointing="left">
          Mesin Pencarian Google
        </Label>

      </div>

    );
  }
}

export default App;
