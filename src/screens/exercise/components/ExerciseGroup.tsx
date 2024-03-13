import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text, Box, HStack } from 'native-base'
import ExerciseCard from './ExerciseCard'

type Props = {
  title:string
}

const ExerciseGroup = ({title}: Props) => {
  return (
    <Box>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Text fontSize={20} fontWeight={700} color={'text.primary'}>
          {title}
        </Text>
        <TouchableOpacity>
          <Text fontSize={10} fontWeight={500} color={'text.primary'}>Xem thêm</Text>
        </TouchableOpacity>
      </HStack>
      <HStack flexWrap={'wrap'} justifyContent={'center'}>
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
      </HStack>
    </Box>
  )
}

export default ExerciseGroup

const styles = StyleSheet.create({})