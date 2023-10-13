import { useState } from 'react'
import { HistoryCard } from '@components/HistoryCard'
import { ScreenHeader } from '@components/ScreenHeader'
import { Heading, SectionList, VStack } from 'native-base'

export const History = () => {
  const [exercises, setExercises] = useState([
    {
      title: '26.08.2021',
      data: ['Puxada frontal', 'Remada '],
    },
    {
      title: '25.08.2021',
      data: ['Supino reto', 'Supino inclinado'],
    },
  ])
  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercícios' />

      <SectionList
        px={6}
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color='gray.200' fontSize='md' mt={5} mb={3}>
            {section.title}
          </Heading>
        )}
      />
    </VStack>
  )
}
