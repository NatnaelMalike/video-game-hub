import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const DarkModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()
  return (
    <HStack>
        <Switch colorScheme={'teal'} isChecked ={colorMode == 'dark'} onChange={toggleColorMode}/>
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default DarkModeSwitch