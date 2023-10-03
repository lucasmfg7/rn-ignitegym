import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
  variant?: 'solid' | 'outline'
}

export const Button = ({ title, variant = 'solid', ...props }: Props) => {
  return (
    <NativeBaseButton
      w='full'
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 2 : 0}
      borderColor='green.700'
      rounded='sm'
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'green.500',
      }}
      {...props}
    >
      <Text
        color={variant === 'outline' ? 'green.500' : 'white'}
        fontFamily='heading'
        fontSize='sm'
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}
