import {
  Box,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Show,
  Button,
  useDisclosure,
  Center
} from '@chakra-ui/react'
import bitrix24 from '../Image/logo.svg'
import React, { useState } from 'react'
import { BsPersonFill } from 'react-icons/bs';
import { FaGlobeAmericas } from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [len, setLen] = useState("EN")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  return (
    <Box p="1rem" bg="#ffffff">

      <Show above="md">
        <Flex>
          <Box p='4' maxW="4rem" >
            <Image src={bitrix24} />
          </Box>
          <Spacer />
          <HStack p='4'>
            <Box mr="9rem">
              <HStack spacing='20px'>
                <Box h='40px' fontWeight="bold"  >
                  <Link>  TOOLS</Link>

                </Box>
                <Box h='40px' fontWeight="bold" >
                  <Link> PRICING</Link>

                </Box>
                <Box h='40px' fontWeight="bold" >
                  <Link>SOLUTIONS</Link>

                </Box>
                <Box h='40px' fontWeight="bold" >
                  <Link>PARTNERS</Link>

                </Box>
                <Box h='40px' fontWeight="bold" >
                  <Link> APPS</Link>

                </Box>
                <Box h='40px' fontWeight="bold" >
                  <Link>BLOG</Link>

                </Box>
                <Box h='40px' fontWeight="bold" >
                  <Link> SUPPORT</Link>

                </Box>
              </HStack>
            </Box>

            <Box>
              <HStack spacing='24px'>
                <Box fontSize="10px" pt="0.3rem" pb="0.3rem" pl="1.3rem" pr="1.3rem" color="#525C69" bgColor="#bdf300" borderRadius="30px" >
                  <Link to="/register" > START FOR FREE</Link>
                </Box>
                <Box h="40px">

                  <Menu isLazy>
                    <MenuButton>
                      <HStack>
                        <Box><BsPersonFill /></Box>
                        <Box fontSize="10px">
                         LOG IN
                        </Box>
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      <Text fontSize="32px" >Your Bitrix24</Text>
                      <br />
                      <br />
                      <Text fontSize="19px" >Authorize to enter</Text>
                      <Text fontSize="19px">your company's Bitrix24.</Text>

                      <HStack >
                        <Box borderRadius="20px" ml="1rem" p="0.4rem" bgColor="#00aeef" >
                        <Link to="/login" >ENTER</Link>
                          </Box>
                        <Box></Box>
                      </HStack>
                      <Text>Don't have Bitrix24 yet?</Text>
                      <Text>CREATE YOUR BITRIX24 NOW</Text>
                    </MenuList>
                  </Menu>
                </Box>
                <Box h='40px' >
                  <Menu isLazy>
                    <MenuButton>
                      <HStack fontSize="10px">
                        <Box> <FaGlobeAmericas />  </Box>
                        <Box>{len}</Box>
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      <HStack align="start">
                        <Box>
                          <MenuItem>America</MenuItem>
                          <br />
                          <MenuItem onClick={() => setLen("EN")} >United States (English)</MenuItem>
                          <MenuItem onClick={() => setLen("LA")} >América Latina (Español)</MenuItem>
                          <MenuItem onClick={() => setLen("BR")} >Brasil (Português)</MenuItem>
                          <MenuItem onClick={() => setLen("LA")} >México (Español)</MenuItem>
                          <MenuItem onClick={() => setLen("LA")} >Colombia (Español)</MenuItem>
                        </Box>
                        <Box>
                          <MenuItem>Europe</MenuItem>
                          <br />
                          <MenuItem onClick={() => setLen("EN")} >Europe (English)</MenuItem>
                          <MenuItem onClick={() => setLen("DE")} >Deutschland (Deutsch)</MenuItem>
                          <MenuItem onClick={() => setLen("FR")} >France (Français)</MenuItem>
                          <MenuItem onClick={() => setLen("PL")} >Polska (Polski)</MenuItem>
                          <MenuItem onClick={() => setLen("IT")} >Italia (Italiano)</MenuItem>
                          <MenuItem onClick={() => setLen("UK")} >United Kingdom (English)</MenuItem>
                        </Box>
                        <Box>
                          <MenuItem>Asia</MenuItem>
                          <br />
                          <MenuItem onClick={() => setLen("EN")} >India (English)</MenuItem>
                          <MenuItem onClick={() => setLen("TR")} >Türkiye (Türkçe)</MenuItem>
                          <MenuItem onClick={() => setLen("SC")} >中国 (简体中文)</MenuItem>
                          <MenuItem onClick={() => setLen("TC")} >台灣 (繁體中文)</MenuItem>
                          <MenuItem onClick={() => setLen("ID")} >Indonesia (Bahasa Indonesia)</MenuItem>
                          <MenuItem onClick={() => setLen("MS")} >Malaysia (Bahasa Melayu)</MenuItem>
                          <MenuItem onClick={() => setLen("TH")} >ประเทศไทย (ภาษาไทย)</MenuItem>
                          <MenuItem onClick={() => setLen("VN")} >Việt Nam (Tiếng Việt)</MenuItem>
                          <MenuItem onClick={() => setLen("JA")} >日本 (日本語)</MenuItem>
                        </Box>
                      </HStack>
                    </MenuList>
                  </Menu>
                </Box>
              </HStack>
            </Box>
          </HStack>
        </Flex>
      </Show>
      <Show below="md" >
        <HStack>
          <Box>
            <Button ref={btnRef} onClick={onOpen}>
              <HamburgerIcon />
            </Button>
          </Box>
          <Spacer />
          <Box> <Image src={bitrix24} /></Box>
          <Spacer />
          <Box></Box>
        </HStack>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <HStack>
              <Box> <Button ref={btnRef} onClick={onOpen}>
                <DrawerCloseButton />
              </Button>
              </Box>
              <Spacer />
              <Box><DrawerHeader> <Image src={bitrix24} /></DrawerHeader></Box>
              <Spacer />
              <Box></Box>
            </HStack>
            <Center>
              <DrawerBody>
                <Box textAlign="center" >TOOLS</Box>
                <Box textAlign="center" >PRICING</Box>
                <Box textAlign="center" >SOLUTIONS</Box>
                <Box textAlign="center" >PARTERS</Box>
                <Box textAlign="center" >APPS</Box>
                <Box textAlign="center" >BLOG</Box>
                <Box textAlign="center" >SUPPORT</Box>
                <HStack>
                  <Box fontSize="10px" pt="0.3rem" pb="0.3rem" pl="1.3rem" pr="1.3rem" color="#525C69" bgColor="#bdf300" borderRadius="30px" >
                   <Link to="/register" >START FOR FREE</Link>
                  </Box>
                  <Box>
                    <HStack>
                      <Box><BsPersonFill /></Box>
                      <Box fontSize="12px" >
                        <Link to="/login" >LOG IN</Link>
                        </Box>
                    </HStack>
                  </Box>
                  <Box></Box>
                </HStack>
              </DrawerBody>
            </Center>
          </DrawerContent>
        </Drawer>
      </Show>
    </Box>

  )
}

export default Navbar
