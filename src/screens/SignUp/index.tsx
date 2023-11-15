import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { Controller, useForm } from 'react-hook-form'

type FormDataProps = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export const SignUp = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  })

  function handleGoBack() {
    navigation.goBack()
  }

  function handleSignUp(data: FormDataProps) {
    console.log(data)
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt='Pessoas treinando'
          resizeMode='contain'
          position='absolute'
        />
        <Center my={24}>
          <LogoSvg />

          <Text color='gray.100' fontSize='sm'>
            Treine sua mente e o seu corpo.
          </Text>
        </Center>

        <Center>
          <Heading color='gray.100' fontSize='xl' mb={6} fontFamily='heading'>
            Crie a sua conta
          </Heading>

          <Controller
            control={control}
            name='name'
            render={({ field: { onChange, value } }) => (
              <Input placeholder='Nome' onChangeText={onChange} value={value} />
            )}
            rules={{
              required: 'Informe o nome.',
            }}
          />

          <Text color='white'>{errors.name?.message}</Text>

          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='E-mail'
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, value } }) => (
              <Input
                secureTextEntry
                placeholder='Senha'
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='password_confirmation'
            render={({ field: { onChange, value } }) => (
              <Input
                secureTextEntry
                placeholder='Confirme a Senha'
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType='send'
              />
            )}
          />

          <Button
            title='Criar e acessar'
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>
      </VStack>
      <Center mb={12} px={10}>
        <Button
          title='Voltar para login'
          variant='outline'
          onPress={handleGoBack}
        />
      </Center>
    </ScrollView>
  )
}
