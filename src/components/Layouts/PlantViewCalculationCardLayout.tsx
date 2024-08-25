import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Tab,
  Tabs,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';


interface PlantViewCalculatedCardContentProps {
  valueIndex : number;
  data : string[][];
}

const PlantViewCalculatedCardContent:React.FC<PlantViewCalculatedCardContentProps> = ({valueIndex, data}) => {
    const dataLabels = ["Grid kW:", "CUF %:", "Grid Hz:", "Consumption kWh:", "Feed kWh:"];
    // const data = [
    //     [299.79, 36, 131, 49, 9999999.99],  //Daily
    //     [399.79, 18, 231, 59, 10999999.99], //Monthly
    //     [499.79, 16, 331, 69, 20999999.99]  //Yearly
    // ]
    return (
        <Box>
                <Flex mx={-5} flexDirection={"row"} w={430} flexWrap={"wrap"}>
                  {data[0].map((_, index) => (
                    <VStack key={index} mr={"120px"} ml={5} spacing={"0px"} mb={2} alignItems={"start"} textAlign={"left"}>
                      <Text color={"#3D3D3D"} fontWeight={500} fontSize={12}>{dataLabels[index]}</Text>
                      <Text color={"#000000"} fontWeight={700} fontSize={12}>{parseFloat(data[valueIndex][index]).toFixed(2) || 0}</Text>
                    </VStack>
                  ))}
                </Flex>
        </Box>
    )
}



interface PlantViewCalculationCardLayoutProps {
  title: string;
  bg? : string;
  width: string[];
  height: string;
  px? : string;
  data : string[][];
}

const PlantViewCalculationCardLayout: React.FC<PlantViewCalculationCardLayoutProps> = ({ title, bg, width, height, px, data }) => {
  return (
    <Box
      w={width}
      h={height}
      borderRadius="5px"
      bgColor={useColorModeValue('white', 'gray.800')}
      p={3}
      px={px}
      boxShadow="md"
      overflow={"hidden"}
      bg = {bg}
    >
      <HStack>
        <Text 
          mt={6}
          ml={4}
          mb={5}
         fontSize={"29px"}
         fontFamily={"inter"} 
         fontWeight={600} 
         color={useColorModeValue('#000000', 'white')}
         letterSpacing={1}
         >{title}</Text>
      </HStack>
      <Box as='main' pb={6} height={"full"} width={"full"} _dark={{color : "white"}}>
      <Tabs position='relative' variant='unstyled' >
        <TabList color={"#000000"}>
          <Tab fontSize={12} fontWeight={700}>Daily</Tab>
          <Tab fontSize={12} fontWeight={700}>Monthly</Tab>
          <Tab fontSize={12}fontWeight={700}>Yearly</Tab>
        </TabList>
        <TabIndicator mt='-2.5px' height='4px' bg='#000000' borderRadius='1px' />
        <hr style={{border: "1px solid #000", width:"400px"}} />
        <TabPanels>
          <TabPanel>
            <PlantViewCalculatedCardContent data={data} valueIndex={0} />
          </TabPanel>
          <TabPanel>
            <PlantViewCalculatedCardContent data={data} valueIndex={1} />
          </TabPanel>
          <TabPanel>
            <PlantViewCalculatedCardContent data={data} valueIndex={2} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Box>
    </Box>
  );
};

export default PlantViewCalculationCardLayout;
