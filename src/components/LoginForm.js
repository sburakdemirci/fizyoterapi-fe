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
  CardItem,
  Right,
  Cartem,
  Card,
  Label,
  Button,
  Text
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login } from "../store/actions/Login"; //actions dosyasından export edilen herşeyi ver. aynı zamanda ../ ile bir üst klasöre çıktık.
import { login1 } from "../store/actions/NameActions";
const a = 4;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
            onChangeText={text => this.setState({ username: text })}
          />
        </Item>
        <CardItem />
        <Item regular style={{ alignSelf: "center", width: "60%" }}>
          <Input
            style={{ textAlign: "center" }}
            secureTextEntry={true}
            placeholder="Parola"
            onChangeText={text => console.log(text)}
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
            this.props.login(this.state.username);

            // console.log(this.props);
          }}
        >
          <Text> {this.props.aa} </Text>
        </Button>
        <CardItem />
   {/*      <Button
          style={{
            alignSelf: "center",
            width: "60%",
            justifyContent: "center"
          }}
          success
        >
          <Text> Üye Ol </Text>
        </Button> */}
        <Button
          style={{
            alignSelf: "center",
            width: "60%",
            justifyContent: "center"
          }}
          success
          onPress={() => {
            this.props.login1(this.state.username);

            // console.log(this.props);
          }}
        >
          <Text> {this.props.aa} </Text>
        </Button>
      </Content>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return { aa: state.LoginReducer.a };
}

export default connect(
  mapStateToProps,
  { login, login1 }
)(LoginForm);
connect();
