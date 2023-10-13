import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { Center, ScrollView, VStack } from 'native-base'
import React from 'react'

export const Profile = () => {
  return (
    <VStack>
      <ScreenHeader title='Perfil' />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            size={33}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/95872678?v=4',
            }}
            alt='Imagem do usuário'
          />
        </Center>
      </ScrollView>
    </VStack>
  )
}
