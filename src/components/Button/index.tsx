import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
}

export const Button = ({ title, ...props }: Props) => {
  return (
    <NativeBaseButton
      w='full'
      h={14}
      bg='green.700'
      rounded='sm'
      _pressed={{
        bg: 'green.500',
      }}
      {...props}
    >
      <Text color='white' fontFamily='heading' fontSize='sm'>
        {title}
      </Text>
    </NativeBaseButton>
  )
}
