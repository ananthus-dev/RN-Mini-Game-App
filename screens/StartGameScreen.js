import { useState } from "react";
import {
	Alert,
	Dimensions,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	useWindowDimensions,
	View,
} from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function StartGameScreen({ gotoNextStage, enteredNumber, numberInputHandler }) {
	//for dynamic dimensions we need to use the hook
	const { width, height } = useWindowDimensions();

	function confirmHandler() {
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Invalid number", "Enter valid number between 1 and 99", [
				{
					text: "Okay",
					style: "cancel", //button style in ios
					onPress: resetText,
				},
			]);
			return;
		}

		gotoNextStage();
	}

	function resetText() {
		setEnteredNumber("");
	}

	const isEmpty = enteredNumber === "";

	const marginTop = height < 380 ? 30 : 100;

	return (
		//with behaviour set as position, the view will move up when keyboard is visible. Also we may need to wrap with ScrollView to support scrolling
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior="position">
				<View style={[styles.rootContainer, { marginTop }]}>
					<Title>Guess My Number</Title>
					<Card>
						<InstructionText>Enter a Number</InstructionText>
						<TextInput
							keyboardType="number-pad"
							style={styles.numberInput}
							maxLength={2}
							onChangeText={numberInputHandler}
							value={enteredNumber}
						/>
						<View style={styles.btnsContainer}>
							<View style={styles.btnContainer}>
								<PrimaryButton disabled={isEmpty} onPress={resetText}>
									Reset
								</PrimaryButton>
							</View>
							<View style={styles.btnContainer}>
								<PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

//this will execute only first time. Will not execute on rerenders or orientation changes
// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		// marginTop: deviceHeight < 380 ? 30 : 100,
		alignItems: "center",
	},
	btnsContainer: {
		flexDirection: "row",
		margin: 6,
	},
	btnContainer: {
		flex: 1,
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default StartGameScreen;
