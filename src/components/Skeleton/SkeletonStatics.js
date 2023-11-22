
import React from 'react';
import { Skeleton, VStack, HStack, Center, NativeBaseProvider } from "native-base";

const SkeletonStatics = () => {
    return (
        <NativeBaseProvider>
            <Center w="100%">
                <HStack
                    w="90%"
                    maxW="400"
                    borderWidth="1"
                    space={6}
                    rounded="md"
                    _dark={{
                        borderColor: "coolGray.500"
                    }}
                    _light={{
                        borderColor: "coolGray.200"
                    }}
                    p="4"
                    alignItems="flex-end" // Adicione esta linha para alinhar os elementos na parte inferior
                >
                    
                    <Skeleton flex="1" h="90" rounded="md" startColor="green.300" />
                    <Skeleton flex="1" h="150" rounded="md" startColor="yellow.300" />
                    <Skeleton flex="1" h="60" rounded="md" startColor="red.300" />

                    <Skeleton flex="1" h="90" rounded="md" startColor="green.300" />
                    <Skeleton flex="1" h="150" rounded="md" startColor="yellow.300" />
                    <Skeleton flex="1" h="60" rounded="md" startColor="red.300" />

                    <Skeleton flex="1" h="90" rounded="md" startColor="green.300" />
                    <Skeleton flex="1" h="150" rounded="md" startColor="yellow.300" />
                    <Skeleton flex="1" h="60" rounded="md" startColor="red.300" />

                </HStack>
            </Center>
        </NativeBaseProvider>

    )
}

export default SkeletonStatics