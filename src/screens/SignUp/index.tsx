import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

type FormDataProps = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o email').email('E-mail inválido'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .required('Confirme a senha')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .oneOf([yup.ref('password'), ''], 'As senhas devem ser iguais'),
})

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
    resolver: yupResolver(signUpSchema),
  })

  function handleGoBack() {
    navigation.goBack()
  }

  function handleSignUp({ name, email, password }: FormDataProps) {
    fetch('http://192.168.0.54:3333/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
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
              <Input
                placeholder='Nome'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

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
                errorMessage={errors.email?.message}
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
                errorMessage={errors.password?.message}
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
                errorMessage={errors.password?.message}
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
