import { UserPhoto } from '@components/UserPhoto'
import { MaterialIcons } from '@expo/vector-icons'
import { HStack, Heading, Icon, Text, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'

export const HomeHeader = () => {
  return (
    <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
      <UserPhoto
        size={16}
        source={{ uri: 'https://avatars.githubusercontent.com/u/95872678?v=4' }}
        alt='Imagem do usuário'
        mr={4}
      />
      <VStack>
        <Text color='gray.100' fontSize='md'>
          Olá,
        </Text>
        <Heading color='gray.100' fontSize='md'>
          Lucas
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name='logout' color='gray.200' size={7} />
      </TouchableOpacity>
    </HStack>
  )
}
