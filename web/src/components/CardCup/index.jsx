import React from 'react'
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Link,
  Image
} from '@chakra-ui/react'

export default function CardCup({ nameCup, description, photo, route }) {
  return (
    <>
      <Box
        w={['23rem', '30rem']}
        h={['17rem', '20rem']}
        mx="auto"
        py={10}
        px={8}
        bg={useColorModeValue('white', 'brand.400')}
        shadow="lg"
        rounded="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        textAlign="center"
      >
        <Flex justifyContent={{ base: 'center', md: 'end' }} mt={-16}>
          <Image
            w={20}
            h={20}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            borderWidth={2}
            borderColor={useColorModeValue('brand.100', 'brand.100')}
            alt="Testimonial avatar"
            src={photo}
          />
        </Flex>

        <chakra.h2
          color={useColorModeValue('brand.700', 'brand.700')}
          fontSize={{ base: '2xl', md: '3xl' }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          {nameCup}
        </chakra.h2>

        <chakra.p mt={2} color={useColorModeValue('brand.300', 'brand.300')}>
          {description}
        </chakra.p>

        <div>
          <Flex justifyContent="end" mt={4}>
            <Link
              fontSize="xl"
              color={useColorModeValue('brand.200', 'brand.200')}
              href={route}
            >
              Clique aqui!
            </Link>
          </Flex>
        </div>
      </Box>
    </>
  )
}
