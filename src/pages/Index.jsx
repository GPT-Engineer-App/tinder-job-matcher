import React, { useState } from "react";
import { Container, VStack, Box, Text, IconButton, Image, HStack } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    description: "We are looking for a skilled frontend developer...",
    image: 'https://images.unsplash.com/photo-1607001172087-308413970c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcm9udGVuZCUyMGRldmVsb3BlcnxlbnwwfHx8fDE3MTc2OTI3MjB8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Innovate Ltd",
    description: "Join our backend team to build robust APIs...",
    image: 'https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwZGV2ZWxvcGVyfGVufDB8fHx8MTcxNzY5MjcyMXww&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Web Solutions",
    description: "We need a full stack developer to work on various projects...",
    image: 'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdWxsJTIwc3RhY2slMjBkZXZlbG9wZXJ8ZW58MHx8fHwxNzE3NjkyNzIxfDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
];

const Index = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "right") {
      console.log("Accepted:", jobData[currentJobIndex].title);
    } else {
      console.log("Rejected:", jobData[currentJobIndex].title);
    }

    setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobData.length);
  };

  const currentJob = jobData[currentJobIndex];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" p={4} textAlign="center">
          <Image src={currentJob.image} alt={currentJob.title} boxSize="200px" objectFit="cover" mx="auto" />
          <Text fontSize="2xl" mt={4}>
            {currentJob.title}
          </Text>
          <Text fontSize="lg" color="gray.500">
            {currentJob.company}
          </Text>
          <Text mt={2}>{currentJob.description}</Text>
        </Box>
        <HStack spacing={8}>
          <IconButton aria-label="Reject" icon={<FaThumbsDown />} size="lg" colorScheme="red" onClick={() => handleSwipe("left")} />
          <IconButton aria-label="Accept" icon={<FaThumbsUp />} size="lg" colorScheme="green" onClick={() => handleSwipe("right")} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
