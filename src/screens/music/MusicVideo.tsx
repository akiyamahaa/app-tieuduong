import { Dimensions, StyleSheet, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import YoutubePlayer from "react-native-youtube-iframe";
import { formatYoutubeLink } from "../../data/function";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MusicVideo = () => {
	const route = useRoute<any>();
  const {url} = route.params
  console.log("🚀 ~ MusicVideo ~ url:", url)

	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<YoutubePlayer
				videoId={url}
				width={windowHeight}
				height={windowWidth}
				// prevent aspect ratio auto sizing
			/>
		</View>
	);
};

export default MusicVideo;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000",
		transform: "rotate(90deg)",
	},
	buttons: {
		width: 100,
		height: 50,
	},
	video: {
		width: windowHeight,
		height: windowWidth,
	},
});