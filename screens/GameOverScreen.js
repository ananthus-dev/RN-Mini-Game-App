import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER !</Title>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={require("../assets/success.png")} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	imageContainer: {
		borderRadius: 150,
		width: 300,
		height: 300,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: "hidden",
		margin: 36,
	},
	//
	image: {
		width: "100%",
		height: "100%",
	},
});

export default GameOverScreen;
