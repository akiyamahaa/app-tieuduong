import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, ScrollView, VStack } from "native-base";
import ExerciseGroup from "./components/ExerciseGroup";
import Card from "./components/Card";

type Props = {};

const Exercises = (props: Props) => {
  return (
    <Box flex={1} bg={"#FFF"}>
      <Box p={6}>
        <ScrollView>
          <Card />
          <VStack mt={6} space={4 }>
            <ExerciseGroup title="Bài tập phù hợp với bạn" />
            <ExerciseGroup title="Bài tập nâng cao"/>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Exercises;

const styles = StyleSheet.create({});
