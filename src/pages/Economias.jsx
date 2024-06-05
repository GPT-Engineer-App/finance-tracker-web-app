import { Container, Text, VStack } from "@chakra-ui/react";

const Economias = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Economias</Text>
        <Text>Detalhes sobre economias virão aqui.</Text>
      </VStack>
    </Container>
  );
};

export default Economias;
