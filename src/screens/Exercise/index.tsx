import { HStack, Heading, Icon, Image, Text, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

import BodySVG from '@assets/body.svg'

export const Exercise = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px={8} pt={12} bg='gray.600'>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name='arrow-left' color='green.500' size={6} />
        </TouchableOpacity>
        <HStack
          justifyContent='space-between'
          alignItems='center'
          mt={4}
          mb={8}
        >
          <Heading
            color='gray.100'
            fontSize='lg'
            textTransform='capitalize'
            flexShrink={1}
          >
            Puxada Frontal
          </Heading>
          <HStack alignItems='center'>
            <BodySVG />
            <Text color='gray.200' ml={1} textTransform='uppercase'>
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <VStack p={8}>
        <Image
          w='full'
          h={80}
          source={{
            uri: 'https://williamcarvalhoamaral.files.wordpress.com/2020/01/dorsal-blog.jpg?w=640',
          }}
          alt='Imagem do exercício'
          mb={3}
          resizeMode='cover'
          rounded='lg'
        />
      </VStack>
    </VStack>
  )
}
