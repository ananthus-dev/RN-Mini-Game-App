import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({ gotoNextStage }) {
	const [enteredNumber, setEnteredNumber] = useState("");

	function numberInputHandler(value) {
		setEnteredNumber(value);
	}

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

	return (
		<View style={styles.inputContainer}>
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
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		borderRadius: 8,
		backgroundColor: "#3b021f",
		elevation: 4, //for giving shadow in android
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
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
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default StartGameScreen;
