import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { HStack, VStack } from 'native-base'

export const Home = () => {
  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group name='costas' />
        <Group name='ombros' />
      </HStack>
    </VStack>
  )
}
