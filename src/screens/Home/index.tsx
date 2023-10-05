import { useState } from 'react'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { FlatList, HStack, VStack } from 'native-base'

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
    </VStack>
  )
}
