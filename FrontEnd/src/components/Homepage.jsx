import React from "react";
import { Box, Button, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import { Heading, Image, Text } from "@chakra-ui/react";
import "./Homepage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Homepag = () => {
  return (
    <>
    <Navbar/>
      {/* 1 */}
      <Box className="firstBox">
        <Box className="header">
          <Heading>Bitrix24. Your ultimate workspace.</Heading>
        </Box>
        <Box className="list">
          <ul>
            <li>
              <h5>Collaboration</h5>
            </li>
            <li>
              <h5>CRM</h5>
            </li>
            <li>
              <h5>Tasks & Projects</h5>
            </li>
            <li>
              <h5>Sites & Stores</h5>
            </li>
            <li>
              <h5>HR & Automation</h5>
            </li>
          </ul>
        </Box>
        <Box className="listBox">
          <Box className="lists">
            <UnorderedList textAlign="left">
              <ListItem>
                <span className="listColor">Chats & video calls</span>
              </ListItem>
              <ListItem>
                <span className="listColor">Online meetings</span>
              </ListItem>
              <ListItem>
                <span className="listColor">Feed</span>
              </ListItem>
              <ListItem>
                <span className="listColor">Calender</span>
              </ListItem>
              <ListItem>
                <span className="listColor">Online documents</span>
              </ListItem>
              <ListItem>
                <span className="listColor">Drive</span>
              </ListItem>
              <ListItem>
                <span className="listColor">webmail</span>{" "}
              </ListItem>
              <ListItem>
                <span className="listColor">Workgroups</span>
              </ListItem>
              <ListItem>
                <span className="listColor">Marketing</span>
              </ListItem>
              <button className="startbtn">START FOR FREE</button>
            </UnorderedList>
          </Box>
          <Box className="gifs">
            <img
              src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/hr.1366w.png.webp?1664359517000"
              alt=""
            />
          </Box>
        </Box>
      </Box>
      {/* 2 */}
      <Box>
        <HStack className="blueBanner">
          <Box>
            <Box className="comment"></Box>10,000,000{" "}
          </Box>
          <Box>organisation has chosen Bitrix24</Box>
          <Box>available in 18 languages</Box>
        </HStack>
      </Box>
      {/* 3 */}
      <Box className="banner2">
        <Box className="header_details">
          <Box className="headerh2">
            <h2>
              What makes Bitrix24 <span>better than 99%</span> of other
              solutions on the market?
            </h2>
          </Box>
          <Box className="details">
            <UnorderedList>
              <ListItem className="greenCheck">
                <img
                  src="https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png"
                  alt=""
                />
                <span>Replaces all your current SaaS solutions</span>
              </ListItem>
              <ListItem className="greenCheck">
                <img
                  src="https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png"
                  alt=""
                />
                <span>Free forever for unlimited users</span>
              </ListItem>
              <ListItem className="greenCheck">
                <img
                  src="https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png"
                  alt=""
                />
                <span>Easy to migrate your data from other systems</span>
              </ListItem>
              <ListItem className="greenCheck">
                <img
                  src="https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png"
                  alt=""
                />
                <span>Integrated with all your favorite services and apps</span>
              </ListItem>
              <ListItem className="greenCheck">
                <img
                  src="https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png"
                  alt=""
                />
                <span>Used, loved, and trusted by 10,000,000+ users.</span>
              </ListItem>
              <ListItem className="greenCheck">
                <img
                  src="https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png"
                  alt=""
                />
                <span>
                  100% flat fee: predictable costs, no per-user pricing
                </span>
              </ListItem>
            </UnorderedList>
            <button className="startbtn">START FOR FREE</button>
          </Box>
        </Box>
        <Box className="detailImg">
          <img
            src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/crm/features.png.webp?1663340850000"
            alt=""
          />
        </Box>
      </Box>
      {/* 4 */}
      <Box w="100vw" bgColor="white">
        <Text fontSize="36px">Bitrix24 in the Press</Text>
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          w="100vw"
        >
          <Box>
            <Image src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_forbes.png.webp?1659434641000" />
          </Box>
          <Box>
            <Image src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcmag.png.webp?1659434641000" />
          </Box>
          <Box>
            <Image src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcworld.png.webp?1659434641000" />
          </Box>
          <Box>
            <Image src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_techradar.png.webp?1659434641000" />
          </Box>
          <Box>
            <Image src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_zdnet.png.webp?1659434641000" />
          </Box>
        </Box>
      </Box>

      {/* 5 */}
      <Box className="banner3">
        <Box className="detailImg">
          <img
            src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/section_on_premise.jpg.webp?1663227423000"
            alt=""
          />
        </Box>
        <Box className="heheader_detailsader">
          <Box className="headerh2">
            <h2>Bitrix24 On-Premise Edition</h2>
          </Box>
          <Box className="details">
            <UnorderedList color="#0ebaba" spacing="3" textAlign="left">
              <ListItem className="blueCheckbox">
                <img src="https://i.stack.imgur.com/bGgyE.png" alt="" />
                <span>Increased service performance and speed</span>
              </ListItem>
              <ListItem className="blueCheckbox">
                <img src="https://i.stack.imgur.com/bGgyE.png" alt="" />
                <span>Hosted on your own server</span>
              </ListItem>
              <ListItem className="blueCheckbox">
                <img src="https://i.stack.imgur.com/bGgyE.png" alt="" />
                <span>Enhanced security settings</span>
              </ListItem>
              <ListItem className="blueCheckbox">
                <img src="https://i.stack.imgur.com/bGgyE.png" alt="" />
                <span>
                  Fully customizable: fonts, colors, menus, texts, source code,
                  etc.
                </span>
              </ListItem>
              <ListItem className="blueCheckbox">
                <img src="https://i.stack.imgur.com/bGgyE.png" alt="" />
                <span>Easily scalable</span>
              </ListItem>
              <ListItem className="blueCheckbox">
                <img src="https://i.stack.imgur.com/bGgyE.png" alt="" />
                <span>100+ third-party integrations</span>
              </ListItem>
              <Button bgColor="gray" color="#000" borderRadius="20px">
                Learn More
              </Button>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
      {/* 6 */}
      <Box bgColor="#ffff">
        <Text fontSize="36px" mb="10px">
          Ready to try?
        </Text>
        <Button bgColor="#bdf300" borderRadius="20px">
          REGISTER FREE
        </Button>
      </Box>
      <Footer/>
    </>
  );
};

export default Homepag;
