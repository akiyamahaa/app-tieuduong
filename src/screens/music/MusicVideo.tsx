import { Dimensions, StyleSheet, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import YoutubePlayer from "react-native-youtube-iframe";
import { Box } from "native-base";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MusicVideo = () => {
	const route = useRoute<any>();
	const { url } = route.params

	return (
		<Box style={{ transform: [{ rotate: "90deg" }] }}>
			<StatusBar hidden />
			<YoutubePlayer
				videoId={url}
				width={windowHeight}
				height={windowWidth}
				webViewProps={{
					injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            element.style.paddingBottom = 'unset';
            true;
          `,
				}}
			// prevent aspect ratio auto sizing
			/>
		</Box>
	);
};

export default MusicVideo;

const styles = StyleSheet.create({
});