import { UserPhoto } from '@components/UserPhoto'
import { MaterialIcons } from '@expo/vector-icons'
import { useAuth } from '@hooks/useAuth'
import { HStack, Heading, Icon, Text, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'

import defaultUserPhotoImg from '@assets/userPhotoDefault.png'

export const HomeHeader = () => {
  const { user } = useAuth()

  return (
    <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
      <UserPhoto
        size={16}
        source={user.avatar ? { uri: user.avatar } : defaultUserPhotoImg}
        alt='Imagem do usuário'
        mr={4}
      />
      <VStack flex={1}>
        <Text color='gray.100' fontSize='lg'>
          Olá,
        </Text>
        <Heading color='gray.100' fontSize='lg' fontFamily='heading'>
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name='logout' color='gray.200' size={7} />
      </TouchableOpacity>
    </HStack>
  )
}
