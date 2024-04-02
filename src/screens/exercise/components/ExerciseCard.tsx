import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text, Box, Image } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { IExercise } from '../../../data/mockup'

type Props = {
  exercise: IExercise
}

const ExerciseCard = (props: Props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity style={{ width: '45%', margin: 8 }} onPress={() => {
      navigation.navigate('ExercisesDetail', {
        id: props.exercise.id
      })
    }}>
      <Box>
        <Image width={'100%'} height={180} borderRadius={16}
          source={{ uri: props.exercise.img }} alt='img' />
        <Text color={'coolGray.600'} textAlign={'center'} fontSize={14} fontWeight={700}>
          {props.exercise.title}
        </Text>
      </Box>
    </TouchableOpacity>
  )
}

export default ExerciseCard

const styles = StyleSheet.create({})