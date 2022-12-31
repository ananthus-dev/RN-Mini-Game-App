import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
	return (
		<LinearGradient style={styles.root} colors={["#4e0329", "#ddb52f"]}>
			{/* adding a bg image above the linear gradient, but below the other components  */}
			<ImageBackground
				source={require("./assets/dice.png")}
				resizeMode="cover"
				style={styles.root}
				imageStyle={styles.image}
			>
				<StartGameScreen />
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
