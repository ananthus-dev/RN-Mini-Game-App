import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
	return (
		<View style={styles.screen}>
			<Title style={styles.title}>Opponent's Guess</Title>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
});

export default GameScreen;
