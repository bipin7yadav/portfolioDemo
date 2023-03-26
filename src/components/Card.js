import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      {/* <HStack style={{borderRadius:"5px",border:"1px solid white", height:"auto"}}>
        <VStack style={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
          <Image  style={{width:"100%",height:"auto"}}
           objectFit='cover' src={`${imageSrc}`} alt="n"/>
          <Heading style={{fontSize:'14px' ,textAlign:"start"}} >{title}</Heading>
          <Text>{description}</Text>
          <Text>see more <FontAwesomeIcon icon={faArrowRight } size="1x"/> </Text>
        </VStack>
    </HStack> */}
    <VStack 
       color="black" 
       backgroundColor="white" 
       cursor="pointer" 
       borderRadius="xl" 
     > 
       <Image borderRadius="xl" src={imageSrc} alt={title} /> 
       <VStack spacing={4} p={4} alignItems="flex-start"> 
         <HStack justifyContent="space-between" alignItems="center"> 
           <Heading as="h3" size="md"> 
             {title} 
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize="lg"> 
           {description} 
         </Text> 
         <HStack spacing={2} alignItems="center"> 
           <p>See more</p> 
           <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
         </HStack> 
       </VStack> 
     </VStack> 
    </>
  )
};

export default Card;
