import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Heading,
  Container,
  Stack,
  HStack,
} from "@chakra-ui/react";

import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import {Link as Scroll} from "react-scroll"
export const Info = ({ data}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <BsFillInfoCircleFill onClick={onOpen} cursor={"pointer"} />

      <Modal
        colorScheme={"white"}
        minW="600px"
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent minW={{base:"80%",md:"600px"}} maxW={{base:"80%",md:"600px"}}>
          <ModalHeader
            minH={{base:"100px",md:"300px"}}
            maxH={{base:"100px",md:"300px"}}
            minW={{base:"80%",md:"600px"}}
            maxW={{base:"100%",md:"600px"}}
            bgSize={"cover"}
            bgImage={data?.poster}
          ></ModalHeader>
          <ModalCloseButton color={"white"} />
          <ModalBody bgColor={"rgb(25,24,25)"} color="white">
            <Stack
              height={{base:"150px",md:"110px"}}
              overflow={"hidden"}
              p="0px"
              pt="10px"
              direction="column"
            
            >
              <Heading fontSize={{base:"19px",md:"unset"}}>{data?.title}</Heading>
              <Text fontSize={{base:"14px",md:"17px"}}>   {data?.description || data?.decription}</Text>
            </Stack>
            <Heading  pt="30px" fontSize={{base:"14px",md:"20px"}}>Info on {data?.title}</Heading>
            <HStack>
                <Text color="rgb(78,77,79)">Genres : </Text>
                <Text>{data?.genre?.join(" | ")}</Text>
            </HStack>
            <HStack>
                <Text color="rgb(78,77,79)">Release Date : </Text>
                <Text>{data.releasedate}</Text>
            </HStack>
        
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>
  );
};
