import { Container, Text, VStack } from "@chakra-ui/react";

const Gastos = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Gastos</Text>
        <Text>Detalhes sobre gastos virão aqui.</Text>
      </VStack>
    </Container>
  );
};

export default Gastos;
