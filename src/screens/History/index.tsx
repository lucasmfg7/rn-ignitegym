import { ScreenHeader } from '@components/ScreenHeader'
import { VStack } from 'native-base'

export const History = () => {
  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercícios' />
    </VStack>
  )
}
