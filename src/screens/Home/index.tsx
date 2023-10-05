import { useState } from 'react'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { HStack, VStack } from 'native-base'

export const Home = () => {
  const [selectedGroup, setSelectedGroup] = useState('')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group
          name='costas'
          isActive={selectedGroup === 'costas'}
          onPress={() => setSelectedGroup('costas')}
        />
        <Group
          name='ombros'
          isActive={selectedGroup === 'ombros'}
          onPress={() => setSelectedGroup('ombros')}
        />
      </HStack>
    </VStack>
  )
}
