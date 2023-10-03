import { Text, VStack, Image } from 'native-base'
import BackgroundImg from '@assets/background.png'

export const SignIn = () => {
  return (
    <VStack flex={1} bg='gray.700'>
      <Image
        source={BackgroundImg}
        alt='Pessoas treinando'
        resizeMode='contain'
        position='absolute'
      />
    </VStack>
  )
}
