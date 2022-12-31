import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children, onPress }) {
	return (
		<View style={styles.outerContainer}>
			<Pressable
				onPress={onPress}
				//in android we see the ripple effect and opacity effect
				//in ios we see only opacity effect
				style={({ pressed }) =>
					pressed
						? [styles.innerContainer, styles.pressed]
						: styles.innerContainer
				}
				android_ripple={{ color: "#644202" }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden", //to avoid the ripple effect from going outside the element
	},
	innerContainer: {
		backgroundColor: "#72063c",
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	// for adding ripple like effect in ios
	pressed: {
		opacity: 0.75,
	},
});

export default PrimaryButton;
