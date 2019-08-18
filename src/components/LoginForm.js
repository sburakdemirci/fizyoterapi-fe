import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Left,
  Body,
  Title,
  Right,
  CardItem,
  Card,
  Label,
  Button,
  Text
} from "native-base";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index"; //actions dosyasından export edilen herşeyi ver. aynı zamanda ../ ile bir üst klasöre çıktık.
const a = 4;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: ""
    };
  }

  render() {
    return (
      <Content style={{ marginTop: "40%" }}>
        <Item regular style={{ alignSelf: "center", width: "60%" }}>
          <Input
            style={{ textAlign: "center" }}
            placeholder="Email"
            onChange={text => this.setState({ username: text })}
          />
        </Item>
        <CardItem />
        <Item regular style={{ alignSelf: "center", width: "60%" }}>
          <Input
            style={{ textAlign: "center" }}
            secureTextEntry={true}
            placeholder="Parola"
            onChangeText={(text)=>this.setState({password:text})}
            value={this.state.password}
          />
        </Item>

        <CardItem />

        <Button
          style={{
            alignSelf: "center",
            width: "60%",
            justifyContent: "center"
          }}
          success
          onPress={() => {
            //this.props.login(5);

            //   console.log(this.props);
            console.log(this.state.password);
          }}
        >
          <Text> {this.props.a} </Text>
        </Button>
        <CardItem />
        <Button
          style={{
            alignSelf: "center",
            width: "60%",
            justifyContent: "center"
          }}
          success
        >
          <Text> Üye Ol </Text>
        </Button>
      </Content>
    );
  }
}
 const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return { state };
};
export default connect(
  mapStateToProps,
  actions
)(LoginForm); 

