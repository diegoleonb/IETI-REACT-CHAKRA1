import { Box, Button, ChakraProvider, Container, Flex} from "@chakra-ui/react"
import { useState } from "react"

export const Header = () => {
    const [color, setColor] = useState("whiteAlpha.300")
    const [color2, setColor2] = useState("whiteAlpha.300")
  
    const handleMouseOver = (e) => {
      if(e.target.innerText === "VER VIDEO") setColor2("whiteAlpha.700")
      else setColor("whiteAlpha.700")
    }
  
    const handleMouseOut = (e) => {
      if(e.target.innerText === "VER VIDEO") setColor2("whiteAlpha.300")
      else setColor("whiteAlpha.300")
    }
  
  
    return (
      <ChakraProvider>
        <Flex bgImage="linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.9)) , url('https://th.bing.com/th/id/R.cbf13ec416debc1e3c3ca6ffbdd62fd9?rik=Od7FN0lkYLhVww&riu=http%3a%2f%2f2.bp.blogspot.com%2f-ihH3aofvj2k%2fUMIo_gbiHHI%2fAAAAAAAADOg%2fnhI05GB8uLM%2fs1600%2fSunset%2bfrom%2bBittern%2bHide.jpg&ehk=kcDosGvLhhTs6UrNteuYj6UPrJMc9F4Y4TCvY1mUOcE%3d&risl=&pid=ImgRaw&r=0')">
          <Box position="center" bgImage="linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) ,url('https://i.pinimg.com/736x/ec/34/7d/ec347dd07f46b0a20639d6c12564bee5--female-photos-bicycle-girl.jpg')"  bgPosition="center" bgRepeat="no-repeat" bgSize="auto" h="100vh" w="100vw">
            <Container maxW="550px" h="100%">
              <Flex h="100%" w="100%" align="center" justify="center" textColor="white" fontSize="2xl" as="i" paddingBottom={100}>
                DOMINA EL TERRENO
                <Flex paddingTop={150} position={"absolute"}> 
                  <Button colorScheme="white" variant="outline" background={color} size="lg" mr="2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >VER DETALLES</Button>
                  <Button colorScheme="white" variant="outline" background={color2} size="lg" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>VER VIDEO</Button>
                </Flex>
              </Flex>
            </Container>
          </Box>
        </Flex>
      </ChakraProvider>
    )
};