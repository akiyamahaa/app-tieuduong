import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, Box, VStack, ScrollView, Image } from 'native-base'
import { useRoute } from '@react-navigation/native'
import { exercises, advancedExericses } from '../../data/mockup'

type Props = {}

const ExercisesDetail = (props: Props) => {
  const { id } = useRoute<any>().params
  const exercise = [...exercises, ...advancedExericses].filter((exe) => exe.id === id)[0]
  return (
    <ScrollView bg={'#fff'} flex={1}>
      <Box px={6} py={4}>
        <VStack space={4}>
          <Text textAlign={'center'} fontSize={20} fontWeight={700} color={'text.primary'}>
            Bài tập {exercise.title}
          </Text>
          <Image width={'100%'} height={200} borderRadius={12} source={{ uri: exercise.img }} alt='img' />
          <VStack>
            <Text fontSize={16} fontWeight={700} color={'text.primary'}>
              Mục tiêu
            </Text>
            <Text>
              {exercise.target}
            </Text>
          </VStack>
          <VStack>
            <Text fontSize={16} fontWeight={700} color={'text.primary'}>
              Điều kiện
            </Text>
            <Text>
              {exercise.requirement}
            </Text>
          </VStack>
          <VStack space={4}>
            <Text fontSize={16} fontWeight={700} color={'text.primary'}>
              Hướng dẫn thực hiện
            </Text>
            <VStack ml={2} space={2}>
              <VStack>
                <Text fontSize={14} fontWeight={700} color={'text.primary'}>
                  Bắt đầu
                </Text>
                <Text>
                  {exercise.instruction.start}
                </Text>
              </VStack>
              <VStack>
                <Text fontSize={14} fontWeight={700} color={'text.primary'}>
                  Thực hiện
                </Text>
                <Text>
                  {exercise.instruction.perform}
                </Text>
              </VStack>
              <VStack>
                <Text fontSize={14} fontWeight={700} color={'text.primary'}>
                  Thời gian và tần suất
                </Text>
                <Text>
                  {exercise.instruction.time}
                </Text>
              </VStack>
              <VStack>
                <Text fontSize={14} fontWeight={700} color={'text.primary'}>
                  Lưu ý trong tập luyện
                </Text>
                <Text>
                  {exercise.instruction.caution}
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </Box>
    </ScrollView>

  )
}

export default ExercisesDetail

const styles = StyleSheet.create({})