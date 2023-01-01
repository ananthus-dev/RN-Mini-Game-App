import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginTop: 36,
		marginHorizontal: 24,
		borderRadius: 8,
		backgroundColor: Colors.primary800,
		elevation: 4, //for giving shadow in android
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
		alignItems: "center",
	},
});

export default Card;
