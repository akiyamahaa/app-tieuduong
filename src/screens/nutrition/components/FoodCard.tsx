import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, Box, Image, VStack } from 'native-base'

type Props = {
  // foodName: string;
  // description: string;
}

const description = `Những thực phẩm này giàu vitamin C, E, beta - carotene và flavanoids giúp vô hiệu hóa các gốc tự do, chía khóa giúp trẻ đẩy lùi bệnh tật.
• Đậu đen, đậu đỏ
• Nho đỏ, nho tím
• Mận
• Táo
• Socola đen, cacao
• Dầu olive
• Dâu tây
• Cherry
• Việt quất
• Cà rốt
• Khoai lang
• Kiwi
• Rau xanh`


const FoodCard = ({ }: Props) => {
  return (
    <VStack space={4}>
      <Text fontSize={18} fontWeight={500} color={'coolGray.800'}>Thực phẩm</Text>
      <Image
        width={'100%'}
        height={200}
        borderRadius={8}
        alt='img'
        source={{ uri: 'https://phongkim.vn/wp-content/uploads/2019/09/pasted-image-0-25.png' }} />
      <Text fontSize={14} fontWeight={300} color={'coolGray.500'}>Có thể bạn chưa biết</Text>
      <Text fontSize={16} fontWeight={500} color={'text.primary'}>Trà xanh và tiêu đen</Text>
      <Text fontSize={14} fontWeight={300} color={'coolGray.500'}>{description}</Text>

    </VStack>
  )
}

export default FoodCard

const styles = StyleSheet.create({})