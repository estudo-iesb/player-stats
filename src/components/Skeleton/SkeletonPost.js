import React from 'react'
import { Skeleton, VStack, Center, NativeBaseProvider } from "native-base";

const SkeletonPost = () => {
    return (
        <NativeBaseProvider>
            <Center w="350">
                <VStack m={10} w="90%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
                    borderColor: 'coolGray.00'
                }} _light={{
                    borderColor: 'coolGray.200'
                }}>
                    <Skeleton h="40" />
                    <Skeleton.Text px="4" />
                    <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
                </VStack>
            </Center>
        </NativeBaseProvider>
    )
}

export default SkeletonPost