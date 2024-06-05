// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Bem-vindo ao seu Gerenciador Financeiro</Text>
        <Text>Gerencie suas economias e gastos de forma fácil e eficiente.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
