import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, ScrollView, VStack } from 'native-base'
import FoodCard from './components/FoodCard'
import { nutritions } from '../../data/mockup'
import { getRandomArray } from '../../utils/function'

type Props = {}

const Nutrition = (props: Props) => {


  const randomNutrition = getRandomArray(nutritions,2);
  return (
    <Box flex={1} bg={'#fff'} p={6}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={4}>
          {randomNutrition.map((food) => (
            <Box key={food.id}>
              <FoodCard food={food} />
            </Box>
          ))}

        </VStack>
      </ScrollView>
    </Box>
  )
}

export default Nutrition

const styles = StyleSheet.create({})