import { HStack, Heading, Icon, Image, Text, VStack } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {}

export const ExerciseCard = ({ ...props }: Props) => {
  return (
    <TouchableOpacity {...props}>
      <HStack
        bg='gray.500'
        alignItems='center'
        p={2}
        pr={4}
        rounded='md'
        mb={3}
      >
        <Image
          source={{
            uri: 'https://williamcarvalhoamaral.files.wordpress.com/2020/01/dorsal-blog.jpg?w=640',
          }}
          alt='Imagem do exercício'
          w={16}
          h={16}
          rounded='md'
          mr={4}
          resizeMode='center'
        />

        <VStack flex={1}>
          <Heading textTransform='uppercase' fontSize='md' color='white'>
            Puxada alta
          </Heading>
          <Text fontSize='sm' color='gray.200' mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name='chevron-right' color='gray.300' size={7} />
      </HStack>
    </TouchableOpacity>
  )
}
