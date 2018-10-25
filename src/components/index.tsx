import React from "react";
import { Component } from "react";
import styles from "./style";
import { Text, View } from "react-native";

type IProps = {
  instructions: string;
};

export class RolePlay extends Component<IProps, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Master RPG App!</Text>
        <Text style={styles.instructions}>
          To get started, Rolle Programming
        </Text>
        <Text style={styles.instructions}>{this.props.instructions}</Text>
      </View>
    );
  }
}
