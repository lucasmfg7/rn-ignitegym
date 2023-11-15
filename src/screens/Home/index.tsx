import { useState } from 'react'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { FlatList, HStack, Heading, Text, VStack } from 'native-base'
import { ExerciseCard } from '@components/ExerciseCard'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

export const Home = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const [groups, setGroups] = useState([
    'costas',
    'bíceps',
    'tríceps',
    'ombros',
  ])
  const [exercises, setExercises] = useState([
    'puxada frontal',
    'remada curvada',
    'remada unilateral',
    'levantamento terra',
  ])
  const [selectedGroup, setSelectedGroup] = useState('costas')

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              String(selectedGroup).toLowerCase() === String(item).toLowerCase()
            }
            onPress={() => setSelectedGroup(item)}
          />
        )}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent='space-between'>
          <Heading color='gray.200' fontSize='md' mb={5} fontFamily='heading'>
            Exercícios
          </Heading>
          <Text color='gray.200' fontSize='sm'>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ pb: 10 }}
        />
      </VStack>
    </VStack>
  )
}
