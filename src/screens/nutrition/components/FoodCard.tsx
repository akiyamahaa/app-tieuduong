import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, Box, Image, VStack } from 'native-base'
import { INutrition } from '../../../data/mockup'


interface Props{
  food: INutrition
}

const FoodCard = ({ food }: Props) => {
  return (
    <VStack space={4}>
      <Text fontSize={18} fontWeight={500} color={'coolGray.800'}>Thực phẩm</Text>
      <Image
        width={'100%'}
        height={200}
        borderRadius={8}
        alt='img'
        source={{ uri: food.image }} />
      <Text fontSize={14} fontWeight={300} color={'coolGray.500'}>Có thể bạn chưa biết</Text>
      <Text fontSize={16} fontWeight={500} color={'text.primary'}>{food.name}</Text>
      <Text fontSize={14} fontWeight={300} color={'coolGray.500'}>{food.description}</Text>
    </VStack>
  )
}

export default FoodCard

const styles = StyleSheet.create({})