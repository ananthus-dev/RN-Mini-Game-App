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

export default function App() {
	const [gameStage, setGameStage] = useState(0);

	function gotoNextStage() {
		setGameStage((gameStage) => gameStage + 1);
	}

	let Screen;

	const commonProps = { gotoNextStage };

	// if (gameStage === 0) screen = <StartGameScreen {...commonProps} />;
	// if (gameStage === 1) screen = <GameScreen {...commonProps} />;

	if (gameStage === 0) Screen = StartGameScreen;
	if (gameStage === 1) Screen = GameScreen;

	return (
		<LinearGradient style={styles.root} colors={["#4e0329", "#ddb52f"]}>
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
