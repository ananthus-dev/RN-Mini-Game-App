import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
	return (
		<View style={styles.root}>
			<StartGameScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: "#ddb52f",
		flex: 1,
	},
});
