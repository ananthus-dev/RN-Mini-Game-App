import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
	//style are evaulated from left to right. The right items can override the previous styles.
	return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	instructionText: {
		color: Colors.accent500,
		fontSize: 24,
	},
});

export default InstructionText;
