import React from 'react'
import { Box, Text, Flex, HStack, Spacer , Image, Input } from '@chakra-ui/react'
import appStore  from '../Image/appStore.png'
import { FaFacebookF , FaYoutube , FaInstagram, FaLinkedinIn , FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bgColor="#00aeef" color="white">
      <Box width="80%" m="auto" pt="2rem" pb="2rem" >
        <Flex justify="space-between" >
          <Box>
            <Text>Bitrix24</Text>
            <Text>Pricing</Text>
            <Text>Media kit</Text>
            <Text>Contact us</Text>
            <Text>In the press</Text>
          </Box>
          <Box>
            <Text>Helpdesk</Text>
            <Text>Webinars</Text>
            <Text>How-to videos</Text>
            <Text>Submit a ticket</Text>
            <Text>Schedule a demo</Text>
            <Text>Bitrix24 Status page</Text>
          </Box>
          <Box>
            <Text>Blog</Text>
            <Text>Solutions</Text>
            <Text>Testimonials</Text>
            <Text>Alternatives</Text>
            <Text>Uses</Text>
            <Text>Guides</Text>
            <Text>Research</Text>
          </Box>
          <Box>
            <Text>On-premise edition</Text>
            <Text>Download</Text>
            <Text>Documentation</Text>
          </Box>
          <Box>
            <Text>Market</Text>
            <Text>Mobile app</Text>
            <Text>Desktop app</Text>
            <Text>API/developers</Text>
          </Box>
          <Box>
            <Text>Find a partner</Text>
            <Text>Become a partner</Text>
            <Text>Partner login</Text>
          </Box>
        </Flex>
        <br />
        <hr />


        <HStack>
          <Box>
            <HStack>
              <Box>TERMS</Box>
              <Box>PRIVACY</Box>
              <Box>GDPR</Box>
              <Box>SECURITY</Box>
              <Box>ABUSE</Box>
              <Box>RULES FOR BITRIX24.SITES</Box>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <HStack>
              <Box>
              <Image w="20rem" src={appStore} />
              </Box>
            </HStack>
          </Box>
        </HStack>
        <HStack>
          <Box>Copyright © 2022 Bitrix24</Box>
          <Spacer />
          <Box>
            <HStack>
              <Box> 
                < FaFacebookF/>
              </Box>
              <Box> 
                < FaYoutube />
              </Box>
              <Box> 
                < FaInstagram/>
              </Box>
              <Box> 
                < FaLinkedinIn/>
              </Box>
              <Box> 
                < FaPinterestP/>
              </Box>
              <Box>
              <Input placeholder='Search' borderRadius="20px" />
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </Box>



  )
}

export default Footer