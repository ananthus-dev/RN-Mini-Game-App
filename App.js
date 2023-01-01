import { StatusBar } from "expo-status-bar";
import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
	const [enteredNumber, setEnteredNumber] = useState("");

	function numberInputHandler(value) {
		setEnteredNumber(value);
	}

	const [gameStage, setGameStage] = useState(0);

	function gotoNextStage() {
		setGameStage((gameStage) => gameStage + 1);
	}

	let Screen;

	const commonProps = { gotoNextStage, enteredNumber, numberInputHandler };

	// if (gameStage === 0) screen = <StartGameScreen {...commonProps} />;
	// if (gameStage === 1) screen = <GameScreen {...commonProps} />;

	if (gameStage === 0) Screen = StartGameScreen;
	if (gameStage === 1) Screen = GameScreen;
	if (gameStage === 2) Screen = GameOverScreen;

	return (
		<LinearGradient
			style={styles.root}
			colors={[Colors.primary700, Colors.accent500]}
		>
			{/* adding a bg image above the linear gradient, but below the other components  */}
			<ImageBackground
				source={require("./assets/dice.png")}
				resizeMode="cover"
				style={styles.root}
				imageStyle={styles.image}
			>
				<SafeAreaView style={styles.root}>
					<Screen {...commonProps} />
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	image: {
		opacity: 0.15,
	},
});
