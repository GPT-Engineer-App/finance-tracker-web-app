import { Container, Text, VStack, Button } from "@chakra-ui/react";

const Economias = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Economias</Text>
        <Text>Veja abaixo suas economias:</Text>
        <VStack spacing={2} align="stretch">
          <Text>Economia 1: R$ 1000</Text>
          <Text>Economia 2: R$ 500</Text>
        </VStack>
        <Button colorScheme="teal" size="md">
          Adicionar Nova Economia
        </Button>
      </VStack>
    </Container>
  );
};

export default Economias;
