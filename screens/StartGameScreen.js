import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				keyboardType="number-pad"
				style={styles.numberInput}
				maxLength={2}
			/>
			<View style={styles.btnsContainer}>
				<View style={styles.btnContainer}>
					<PrimaryButton>Reset</PrimaryButton>
				</View>
				<View style={styles.btnContainer}>
					<PrimaryButton>Confirm</PrimaryButton>
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
