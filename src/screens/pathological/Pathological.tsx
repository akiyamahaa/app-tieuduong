import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Box, Text, VStack } from "native-base";
import CustomInput from "./CustomInput";

type Props = {};

const Pathological = (props: Props) => {
  const [bloodPressure, setBloodPressure] = useState('')
  const [bloodSugar, setBloodSugar] = useState('')
  const [weight, setWeight] = useState('')
  const [gender, setGender] = useState('')

  const handleDiagnose = () => {
    console.log(bloodPressure, bloodSugar, weight, gender)
  }

  return (
    <Box bg={"#fff"} flex={1} p={6}>
      <VStack>
        <Text fontSize={20} fontWeight={700} color={'text.primary'}>
          Chẩn đoán tình trạng tiểu đường
        </Text>

        <VStack alignItems={'center'} space={4}>
          <VStack width={'100%'}>
            <Text fontSize={16} fontWeight={700} color={'text.primary'}>
              Chỉ số đo
            </Text>
            <CustomInput
              title="Huyết Áp"
              unit='mmHg'
              state={bloodPressure}
              setState={setBloodPressure} />
            <CustomInput
              title="Đường huyết"
              unit='mg'
              state={bloodSugar}
              setState={setBloodSugar} />
            <CustomInput
              title="Cân nặng"
              unit='kg'
              state={weight}
              setState={setWeight} />
            <CustomInput
              title="Giới tính"
              isGender={true}
              state={gender}
              setState={setGender} />
          </VStack>
          <TouchableOpacity onPress={handleDiagnose}>
            <Box bgColor={'#3138EB'} px={8} py={2} borderRadius={12}>
              <Text color={'white'}>Chẩn đoán</Text>
            </Box>
          </TouchableOpacity>
        </VStack>
        <VStack mt={2}>
          <Text fontSize={16} fontWeight={700} color={'text.primary'}>
            Lời khuyên chuyên gia
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur.
            Morbi euismod morbi vulputate nunc at consequat tincidunt condimentum lectus.
            Convallis ultricies semper sociis nisl volutpat in eget enim cursus.
            Potenti suspendisse vitae sit eu est. Eget quis ornare maecenas at lorem ornare. Sed amet at consectetur adipiscing ultricies ridiculus. Faucibus mauris sem risus volutpat pulvinar gravida mattis augue. Pharetra congue volutpat ultrices rhoncus viverra sem. Facilisis aliquet vel in nibh scelerisque quam. Est tempus proin donec habitasse. Etiam senectus maecenas bibendum enim lacus enim. Pellentesque at adipiscing eu nulla nisi porta aliquam lorem fermentum.
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Pathological;

const styles = StyleSheet.create({});
