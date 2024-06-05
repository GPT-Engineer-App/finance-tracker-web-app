import { Container, Text, VStack, Button } from "@chakra-ui/react";

const Investimentos = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Investimentos</Text>
        <Text>Veja abaixo seus investimentos:</Text>
        <VStack spacing={2} align="stretch">
          <Text>Investimento 1: R$ 2000 - Ações</Text>
          <Text>Investimento 2: R$ 1500 - Fundos Imobiliários</Text>
        </VStack>
        <Button colorScheme="blue" size="md">
          Adicionar Novo Investimento
        </Button>
      </VStack>
    </Container>
  );
};

export default Investimentos;
