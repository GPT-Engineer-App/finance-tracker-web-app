import { Container, Text, VStack, Button } from "@chakra-ui/react";

const Gastos = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Gastos</Text>
        <Text>Veja abaixo seus gastos:</Text>
        <VStack spacing={2} align="stretch">
          <Text>Gasto 1: R$ 50 - Compras no mercado</Text>
          <Text>Gasto 2: R$ 30 - Restaurante</Text>
        </VStack>
        <Button colorScheme="red" size="md">
          Adicionar Novo Gasto
        </Button>
      </VStack>
    </Container>
  );
};

export default Gastos;
