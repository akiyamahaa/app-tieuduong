import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text, Box, Image } from 'native-base'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const ExerciseCard = (props: Props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity style={{ width: '45%', margin: 8 }} onPress={() => { navigation.navigate('ExercisesDetail') }}>
      <Box>
        <Image width={'100%'} height={180} borderRadius={16}
          source={{ uri: 'https://suckhoedoisong.qltns.mediacdn.vn/thumb_w/1200/324455921873985536/2021/8/10/bai-tap-duong-sinh-cho-nguoi-cao-tuoi-3-16286071519171685845138-0-0-394-630-crop-16286073107291692564620.jpg' }} alt='img' />
        <Text color={'coolGray.600'} textAlign={'center'} fontSize={14} fontWeight={700}>Bài tập dưỡng sinh</Text>
      </Box>
    </TouchableOpacity>
  )
}

export default ExerciseCard

const styles = StyleSheet.create({})