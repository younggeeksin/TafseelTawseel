import React from "react";
import {
	View,
	ActivityIndicator,
	SafeAreaView,
} from "react-native";
import styles from "./style";
import {Colors, Config } from "@common";

class Launch extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>

				<ActivityIndicator size="large" color={Colors.bg1} />
			</SafeAreaView>
		);
	}
}


export default Launch;
