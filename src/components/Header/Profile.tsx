import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
         <Box mr="4" textAlign="right">
           <Text> Gabriel Zanin</Text>
           <Text color="gray.300" fontSize="small">
             gabriel.zaninde@gmail.com
           </Text>
         </Box>

         <Avatar size="md" name="Gabriel Zanin" src="https://github.com/ZaninDe.png"/>
       </Flex>
  )
}