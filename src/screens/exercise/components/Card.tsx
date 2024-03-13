import { StyleSheet, } from 'react-native'
import React from 'react'
import { Text, Box, VStack, HStack } from 'native-base'

type Props = {}

const Card = (props: Props) => {
  return (
    <VStack space={4} p={4} borderRadius={16} bgColor={'#3138EB'} >
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Box>
          <Text color={'white'} fontSize={20} fontWeight={700}>Thông số bệnh gần nhất</Text>
          <Text color={'white'} fontSize={14} fontWeight={400}>Bệnh tiểu đường</Text>
        </Box>
        <Text color={'white'} fontSize={12} fontWeight={400}>Nam</Text>
      </HStack>
      <HStack justifyContent={'space-between'} alignItems={'flex-end'}>
        <Box>
          <Text color={'white'} fontSize={24} fontWeight={700}>100</Text>
          <Text color={'white'} fontSize={12} fontWeight={500}>Huyết áp</Text>
        </Box>
        <HStack space={6}>
          <Box >
            <Text color={'white'} fontSize={16} fontWeight={700}>120mg</Text>
            <Text color={'white'} fontSize={12} fontWeight={500}>Đường huyết</Text>
          </Box>
          <Box>
            <Text color={'white'} fontSize={16} fontWeight={700}>65 kg</Text>
            <Text color={'white'} fontSize={12} fontWeight={500}>Cân nặng</Text>
          </Box>
        </HStack>
      </HStack>
    </VStack>
  )
}

export default Card

const styles = StyleSheet.create({})