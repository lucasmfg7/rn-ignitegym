import { useState } from 'react'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { FlatList, HStack, Heading, Text, VStack } from 'native-base'

export const Home = () => {
  const [groups, setGroups] = useState([
    'costas',
    'bíceps',
    'tríceps',
    'ombros',
  ])
  const [selectedGroup, setSelectedGroup] = useState('')

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
            isActive={selectedGroup === item}
            onPress={() => setSelectedGroup(item)}
          />
        )}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent='space-between'>
          <Heading color='gray.200' fontSize='md' mb={5}>
            Exercícios
          </Heading>
          <Text color='gray.200' fontSize='sm'>
            4
          </Text>
        </HStack>
      </VStack>
    </VStack>
  )
}
