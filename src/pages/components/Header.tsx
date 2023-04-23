import { Box, Flex, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {

    const router = useRouter()

    return (
        <>
            <Box as='header' position={'relative'}>
                <Flex position={'fixed'} top={0} w={'100%'} h={'8vh'}>
                    <Text
                        fontSize={{ base: '4xl', lg: '6xl' }}
                        w={'50%'}
                        paddingLeft={'10rem'}
                        fontWeight={'extrabold'}
                    >ECC Blog</Text>
                    <UnorderedList
                        w={'50%'}
                        h={'8vh'}
                        display={'flex'}
                        listStyleType={'none'}
                        justifyContent={'space-around'}
                        padding={'2rem'}
                        fontWeight={'bold'}
                    >
                        <ListItem
                            onClick={() => router.push('/')}
                            cursor={'pointer'}
                            fontSize={{ base: '2xl', lg: '3xl' }}
                        >Profile</ListItem>
                        <ListItem
                            onClick={() => router.push('/')}
                            cursor={'pointer'}
                            fontSize={{ base: '2xl', lg: '3xl' }}
                        >article</ListItem>
                        <ListItem
                            onClick={() => router.push('/')}
                            cursor={'pointer'}
                            fontSize={{ base: '2xl', lg: '3xl' }}
                        >Mail</ListItem>
                    </UnorderedList>
                </Flex>
            </Box>
        </>
    )
}