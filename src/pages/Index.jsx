import { Container, Box, Text, VStack, HStack, Button, IconButton, Flex, Spacer, Center } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" p={4}>
      {/* Top Bar */}
      <Flex width="100%" alignItems="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold" color="#e53935">
          Pomofocus
        </Text>
        <Spacer />
        <HStack spacing={4}>
          <Button variant="ghost" color="#424242" bg="#bdbdbd">
            Report
          </Button>
          <Button variant="ghost" color="#424242" bg="#bdbdbd">
            Setting
          </Button>
          <Button variant="ghost" color="#424242" bg="#bdbdbd">
            Sign In
          </Button>
        </HStack>
      </Flex>

      {/* Timer */}
      <VStack spacing={4}>
        <Text fontSize="6xl" fontWeight="bold" color="#c62828">
          25:00
        </Text>
        <HStack spacing={4} bg="#ef9a9a" p={2} borderRadius="md">
          <Button variant="ghost" color="white">
            Pomodoro
          </Button>
          <Button variant="ghost" color="white">
            Short Break
          </Button>
          <Button variant="ghost" color="white">
            Long Break
          </Button>
        </HStack>
        <Button size="lg" color="#c62828" borderColor="#b71c1c" borderWidth="2px" bg="white">
          START
        </Button>
      </VStack>

      {/* Bottom Bar */}
      <Box width="100%" bg="#e53935" p={2} textAlign="center">
        <Text color="white">#1 Time to focus!</Text>
      </Box>

      {/* Task List */}
      <VStack width="100%" bg="#bdbdbd" p={4} borderRadius="md" spacing={4}>
        <Button color="white" bg="#e53935">
          Add Task
        </Button>
      </VStack>

      {/* Bottom Right Menu Icon */}
      <Box position="fixed" bottom={4} right={4}>
        <IconButton aria-label="Menu" icon={<FaBars />} size="lg" color="#424242" bg="#bdbdbd" />
      </Box>
    </Container>
  );
};

export default Index;
