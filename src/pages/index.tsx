import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from '../components/Form/Input';
import { yupResolver } from '@hookform/resolvers/yup';


type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState


  const handleSignIn: SubmitHandler<SignInFormData> = async (value) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(value)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')}></Input>
          <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')}></Input>
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Sign in
        </Button>
      </Flex>
    </Flex>

  )
}
