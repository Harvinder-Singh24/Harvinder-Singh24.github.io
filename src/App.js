import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import {
  Flex,
  Button,
  Spacer,
  IconButton,
  useColorMode,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import Home from "./home";
import About from "./About";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
  return (
    <>
      <Flex m={30}>
        <IconButton
        borderRadius= {10}
          border="1px"
          borderColor={isDark ? "white" : "black"}
          variant="solid"
          aria-label="Email_Button"
          fontSize="30px"
          icon={<CgMail />}
        />
        <Spacer></Spacer>
        <IconButton
        borderRadius= {10}
          border="1px"
          borderColor={isDark ? "white" : "black"}
          onClick={toggleColorMode}
          icon={isDark ? <FaSun /> : <FaMoon />}
        />
      </Flex>

      <Home 
      isDark = {isDark}
      isNotSmallerScreen = {isNotSmallerScreen}
      ></Home>

      <About
      isDark = {isDark}
      isNotSmallerScreen = {isNotSmallerScreen}
      ></About>
    </>
  );
}
