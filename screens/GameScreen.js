import React, { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ enteredNumber: userNumber, gotoNextStage }) {
	const initialGuess = useMemo(() => {
		return generateRandomBetween(minBoundary, maxBoundary, userNumber);
	}, []);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		console.log("in useeffect", currentGuess, userNumber);
		if (currentGuess == userNumber) {
			setTimeout(gotoNextStage, 500);
		}
	}, [currentGuess]);

	function nextGuessHandler(direction) {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "greater" && currentGuess > userNumber)
		) {
			Alert.alert("Dont Lie", "You know that this is wrong");
			return;
		}

		if (direction === "lower") {
			maxBoundary = currentGuess; //max boundary is exclusive
		}

		if (direction === "greater") {
			minBoundary = currentGuess + 1; //min boundary is inclusive
		}

		setCurrentGuess(
			generateRandomBetween(minBoundary, maxBoundary, currentGuess)
		);
	}

	return (
		<View style={styles.screen}>
			<Title style={styles.title}>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>
					Higher or lower?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
							-
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(null, "greater")}>
							+
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
	instructionText: {
		marginBottom: 12,
	},
});

export default GameScreen;
