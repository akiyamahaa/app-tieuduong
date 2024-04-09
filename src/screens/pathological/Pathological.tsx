import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Box, ScrollView, Text, VStack } from "native-base";
import CustomInput from "./CustomInput";
import { checkByBloodPresure, checkByBloodSugar } from "../../data/mockup";

type Props = {};

const Pathological = (props: Props) => {
  const [systolic, setSystolic] = useState('')
  const [diastolic, setDiastolic] = useState('')
  const [bloodSugar, setBloodSugar] = useState('')
  const [isEaten, setIsEaten] = useState('0')
  const [advices, setAdvices] = useState<any>([])
  const disabledBtn = !systolic || !diastolic || !bloodSugar

  const handleDiagnose = () => {
    console.log(Number(systolic), Number(diastolic), Number(bloodSugar))
    const adviceBloodSugar = checkByBloodSugar(Number(bloodSugar), isEaten)
    const adviceBloodPresure = checkByBloodPresure(Number(systolic), Number(diastolic))
    const advice = [
      adviceBloodSugar, adviceBloodPresure
    ]
    setAdvices(advice)
  }
  return (

    <Box bg={"#fff"} flex={1}>
      <VStack p={6} flex={1}>
        <Text fontSize={20} fontWeight={700} color={'text.primary'}>
          Chẩn đoán tình trạng tiểu đường
        </Text>

        <VStack alignItems={'center'} space={4}>
          <VStack width={'100%'}>
            <Text fontSize={16} fontWeight={700} color={'text.primary'}>
              Chỉ số đo
            </Text>
            <CustomInput
              title="Huyết Áp tối đa"
              unit='mmHg'
              state={systolic}
              setState={setSystolic} />
            <CustomInput
              title="Huyết Áp tối thiểu"
              unit='mmHg'
              state={diastolic}
              setState={setDiastolic} />
            <CustomInput
              title="Đường huyết"
              unit='mg'
              state={bloodSugar}
              setState={setBloodSugar} />
            <CustomInput
              title="Trạng thái ăn"
              isGender={true}
              state={isEaten}
              setState={setIsEaten} />
          </VStack>
          <TouchableOpacity onPress={handleDiagnose} disabled={disabledBtn}>
            <Box bgColor={disabledBtn ? 'gray.400' : '#3138EB'} px={8} py={2} borderRadius={12}>
              <Text color={'white'}>Chẩn đoán</Text>
            </Box>
          </TouchableOpacity>
        </VStack>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack mt={2} space={4}>
            <Text fontSize={18} fontWeight={700} color={'text.primary'}>
              Lời khuyên chuyên gia
            </Text>
            {advices.map((advice: any, index: number) => (
              <VStack key={`${advice.status}-${index}`} space={1}>
                <Text fontSize={14} fontWeight={600}>
                  <Text fontSize={16} color={'green.600'}>{advice.title}</Text> - {advice.status || "Chưa xác định"}
                </Text>
                <Text fontSize={14} fontWeight={400}>
                  {advice.advice}
                </Text>
              </VStack>
            ))}

          </VStack>
        </ScrollView>
      </VStack>
    </Box>

  );
};

export default Pathological;

const styles = StyleSheet.create({});
