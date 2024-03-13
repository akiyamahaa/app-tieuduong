import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Box, HStack, Text, Image, VStack, useTheme } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";


type Props = {}

const MusicCard = (props: Props) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity>
      <HStack justifyContent={'space-between'}>
        <HStack space={4}>
          <Image
            width={60}
            height={60}
            borderRadius={8}
            alt='img'
            source={{ uri: 'https://phapam.daophatkhatsi.vn/images/nhac-thien.jpg' }} />
          <VStack>
            <Text fontSize={16} fontWeight={700} color={'coolGray.800'}>
              Nhạc Thiền
            </Text>
            <Text fontSize={12} fontWeight={700} color={'#8A9A9D'}>
              Pháp Âm
            </Text>
          </VStack>
        </HStack>
        <Box>
          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color={colors.coolGray[800]}
          />
        </Box>
      </HStack>
    </TouchableOpacity>

  )
}

export default MusicCard

const styles = StyleSheet.create({})