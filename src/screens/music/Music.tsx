import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, VStack } from 'native-base'
import MusicCard from './components/MusicCard'

type Props = {}

const Music = (props: Props) => {
  return (
    <Box flex={1} bg={'#fff'} p={6}>
      <VStack space={4}>
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </VStack>
    </Box>
  )
}

export default Music

const styles = StyleSheet.create({})