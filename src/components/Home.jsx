import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'
import imgSrc from '../assets/crypto.jpg'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <Box position={'relative'} bgColor={'whatsapp.700'} w={'full'} h={'85vh'}>
      
      <motion.div style={{
          height: "85vh",
        }}
        animate={{
          translateY: "10px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}>

      
      
      <Image position="absolute"
        top={0}
          left={0} w={'full'} h={'full'} objectFit={'inherit'} src={imgSrc} filter={'grayscale(1)'} />
        
      </motion.div>
      

      <Text position="absolute"
        top="15%"
        left="50%"
        transform="translate(-50%, -50%)" fontSize={'6xl'}  textAlign={'center'} fontWeight={'semibold'} color={'whiteAlpha.900'} >
        BitBlazeExchange
      </Text>
    </Box>
    
  )
}

export default Home