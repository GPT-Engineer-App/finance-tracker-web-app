import { HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} padding={4}>
      <Link as={RouterLink} to="/">
        Home
      </Link>
      <Link as={RouterLink} to="/economias">
        Economias
      </Link>
      <Link as={RouterLink} to="/gastos">
        Gastos
      </Link>
      <Link as={RouterLink} to="/investimentos">
        Investimentos
      </Link>
    </HStack>
  );
};

export default Navigation;
