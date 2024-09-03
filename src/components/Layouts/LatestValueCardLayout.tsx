import {
    Box,
    Image,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    StatHelpText,
    StatArrow,
    Text,
  } from '@chakra-ui/react';
import UseLatestCard from '../../Services/Hooks/UseLatestCard';

  
  interface LatestValueLayoutProps {
    title: string;
    deviceLabel : string;
    telemetry : string;
    titleColor : string;
    stat: string;
    statColor : string;
    src: string;
    w: number[];
    h: number[];
    border : string;
    bg: string;
    value2: string;
    value2Color : string;
    showArrow : boolean;
    sparkline: React.ReactNode;
    unit? : string;
  }
  
  export default function LatestValueCardLayout(props: LatestValueLayoutProps) {
    const { title, deviceLabel, telemetry, titleColor, src, w, h, border,value2,value2Color ,showArrow, sparkline, statColor, unit="" } = props;
    
    const latestValue = UseLatestCard(deviceLabel, telemetry , title) || [0];
    let stat = Number(latestValue[0]);
    
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        bg={"#FFFFFF"}
        _dark={{bg:"gray.800"}}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        border={border}
        shadow={'xl'}
        rounded={'lg'}
        width={"289px"}
        height={"110px"}
      >
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            <Image src={src} w={w} h={h} borderRadius={"50%"} />
          </Box>
          <Box pl={{ base: 2, md: 5 }}>
            <StatLabel fontWeight={'500'} fontSize={'1xl'} fontFamily={"inter"} color={titleColor} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} color={statColor} fontWeight={'600'}>
              {stat + unit}
            </StatNumber>
            <Flex alignItems={'center'}>
              <Text ml={1} fontSize={12} color={value2Color}>{value2}</Text>
              {showArrow &&<StatArrow type="increase" ml={1} />}
            </Flex>
          </Box>
          <Box>
            {sparkline}
          </Box>
        </Flex>
      </Stat>
    );
  }