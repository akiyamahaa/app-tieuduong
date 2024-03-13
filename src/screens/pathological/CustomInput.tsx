import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, Box, HStack, Input, Select, CheckIcon } from 'native-base'

type Props = {
  title: string;
  state: string;
  setState: any;
  unit?: string;
  isGender?: boolean;
}

const CustomInput = ({ title, state, setState, unit, isGender = false }: Props) => {
  return (
    <HStack py={4} justifyContent={'space-between'} alignItems={'center'} borderBottomColor={'coolGray.200'} borderBottomWidth={1}>
      <Text>{title}</Text>
      {isGender ?
        <Box maxW="300">
          <Select selectedValue={state} minWidth="120" accessibilityLabel="Giới tính" placeholder="Giới tính" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />
          }} mt={1} onValueChange={itemValue => setState(itemValue)}>
            <Select.Item label="Nam" value="M" />
            <Select.Item label="Nữ" value="F" />
          </Select>
        </Box>
        : <HStack alignItems={'center'} space={2}>
          <Input width={16} value={state} onChangeText={setState} />
          <Text width={12}>{unit}</Text>
        </HStack>}
    </HStack>
  )
}

export default CustomInput

const styles = StyleSheet.create({})