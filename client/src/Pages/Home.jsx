import {
  Button,
  Center,
  Container,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";
import React from "react";
import { Header } from "../Component/Header";
import background from "../assests/background.jpg";
import promotion1 from "../assests/promotion1.jpg";
import promotion2 from "../assests/promotion2.jpg";
import promotion3 from "../assests/promotion3.jpg";
import promotion4 from "../assests/promotion4.jpg";
export const Home = () => {
  return (
    <Container minW="100%" p="0%">
      <Container
        minW="100%"
        minH="820px"
        bgImage={background}
        borderBottom="8px"
        borderBottomColor={"rgb(34,34,34)"}
      >
        <Header />
        <Center
          color="white"
          height={"500px"}
          borderRadius="40px"
          pb="320px"
          pt="320px"
        >
          <Stack gap="5px" justifyContent={"center"} textAlign="center">
            <Heading as={"h2"} fontSize="55px" maxW={"590px"}>
              Unlimited movies, TV shows and more.
            </Heading>
            <Text fontSize={"25px"}>Watch anywhere. Cancel anytime.</Text>
            <Text fontWeight={"600"} fontSize={"20px"}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Text>
            <Stack direction={"row"}>
              <Input
                bgColor={"white"}
                color="black"
                placeholder="Enter Email"
                pr="10px"
                height={"50px"}
              />
              <Button
                bgColor="rgb(244,6,18)"
                height="50px"
                _hover={{}}
                fontSize="22px"
                pl="50px"
                pr="50px"
              >
                Get Started
              </Button>
            </Stack>
          </Stack>
        </Center>
      </Container>

      <Container  borderBottom="8px"
        borderBottomColor={"rgb(34,34,34)"} p="40px" minW="100%" justifyContent={"center"} justifyItems="center" bgColor="rgb(0,0,0)">
      <Stack color="rgb(178,178,178)" direction="row" alignItems={"center"} justifySelf={"center"} m="auto" maxW="80%">
        <Stack direction={"column"}>
          <Heading fontSize="55px">Enjoy on your TV.</Heading>
          <Text fontSize={"30px"}>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </Text>
        </Stack>
        <Image width="500px" src={promotion1} />
      </Stack>
      </Container>

      <Container  borderBottom="8px"
        borderBottomColor={"rgb(34,34,34)"} p="40px" minW="100%" justifyContent={"center"} justifyItems="center" bgColor="rgb(0,0,0)">
      <Stack color="rgb(178,178,178)" direction="row-reverse" alignItems={"center"} justifySelf={"center"} m="auto" maxW="80%">
        <Stack direction={"column"}>
          <Heading fontSize="55px">Download your shows to watch offline.
</Heading>
          <Text fontSize={"30px"}>
          Save your favourites easily and always have something to watch.

          </Text>
        </Stack>
        <Image width="500px" src={promotion2} />
      </Stack>
      </Container>

      <Container  borderBottom="8px"
        borderBottomColor={"rgb(34,34,34)"} p="40px" minW="100%" justifyContent={"center"} justifyItems="center" bgColor="rgb(0,0,0)">
      <Stack color="rgb(178,178,178)" direction="row" alignItems={"center"} justifySelf={"center"} m="auto" maxW="80%">
        <Stack direction={"column"}>
          <Heading fontSize="55px">Watch everywhere.

</Heading>
          <Text fontSize={"30px"}>
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.


          </Text>
        </Stack>
        <Image width="500px" src={promotion3} />
      </Stack>
      </Container>

      <Container  borderBottom="8px"
        borderBottomColor={"rgb(34,34,34)"} p="40px" minW="100%" justifyContent={"center"} justifyItems="center" bgColor="rgb(0,0,0)">
      <Stack color="rgb(178,178,178)" justifyContent={"space-between"} direction="row-reverse" alignItems={"center"} justifySelf={"center"} m="auto" maxW="80%">
        <Stack direction={"column"}>
          <Heading fontSize="55px">Create profiles for children.


</Heading>
          <Text fontSize={"30px"}>
          Send children on adventures with their favourite characters in a space made just for them—free with your membership.



          </Text>
        </Stack>
        <Image width="500px" src={promotion4} />
      </Stack>
      </Container>

     <Container  borderBottom="8px"
        borderBottomColor={"rgb(34,34,34)"} minW="100%" bgColor="rgb(0,0,0)">

     <Container pb="40px" gap="20px" spacing="10px" color="rgb(255,255,255)" minW="65%" bgColor="rgb(0,0,0)">
      <Stack direction="column" gap="10px">
      <Heading fontSize="66px" pb="40px">
        Frequently Asked Questions

        </Heading>
      <Accordion defaultIndex={[0]} allowMultiple>

<Stack direction="column" gap="10px">
<AccordionItem  bgColor="rgb(48,48,48)" border="0px">
    <h2>
      <AccordionButton height="60px">
        <Box fontSize={"29px"} as="span" flex='1' textAlign='left'>
          What is Netflix?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize="20px">
    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  bgColor="rgb(48,48,48)" border="0px">
    <h2>
      <AccordionButton height="60px">
        <Box fontSize={"29px"} as="span" flex='1' textAlign='left'>
         How much does Netflix cost?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize="20px">
    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  bgColor="rgb(48,48,48)" border="0px">
    <h2>
      <AccordionButton height="60px">
        <Box fontSize={"29px"} as="span" flex='1' textAlign='left'>
        Where can I watch?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize="20px">
    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  bgColor="rgb(48,48,48)" border="0px">
    <h2>
      <AccordionButton height="60px">
        <Box fontSize={"29px"} as="span" flex='1' textAlign='left'>
        How do I cancel?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize="20px">
    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.

    </AccordionPanel>
  </AccordionItem>

    <AccordionItem  bgColor="rgb(48,48,48)" border="0px">
    <h2>
      <AccordionButton height="60px">
        <Box fontSize={"29px"} as="span" flex='1' textAlign='left'>
        What can I watch on Netflix?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize="20px">
    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.

    </AccordionPanel>
  </AccordionItem>



<AccordionItem  bgColor="rgb(48,48,48)" border="0px">
<h2>
  <AccordionButton height="60px">
    <Box fontSize={"29px"} as="span" flex='1' textAlign='left'>
Is Netflix good for Kids?    </Box>
    <AccordionIcon />
  </AccordionButton>
</h2>
<AccordionPanel pb={4} fontSize="20px">
The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
</AccordionPanel>
</AccordionItem>
</Stack>
</Accordion>

      </Stack>
      </Container>
      <Center p="20px" color="white"><Heading fontSize="19px">Made with ❤️ by _ </Heading> <Heading pr="10px"fontSize="19px" color="red">Farman</Heading></Center>
     </Container>
    
    </Container>
  );
};
