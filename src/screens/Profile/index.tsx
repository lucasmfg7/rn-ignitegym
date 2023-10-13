import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { Center, ScrollView, Skeleton, VStack } from 'native-base'
import { useState } from 'react'

const PHOTO_SIZE = 33

export const Profile = () => {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack>
      <ScreenHeader title='Perfil' />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded='full'
              startColor='gray.400'
              endColor='gray.300'
            />
          ) : (
            <UserPhoto
              size={PHOTO_SIZE}
              source={{
                uri: 'https://avatars.githubusercontent.com/u/95872678?v=4',
              }}
              alt='Imagem do usuário'
            />
          )}
        </Center>
      </ScrollView>
    </VStack>
  )
}
