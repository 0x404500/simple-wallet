import { useRouter } from 'next/router';
import { Code, List, ListIcon, ListItem, Image, Flex } from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { useAccount } from '../context/Account';

import { Container } from '../components/Container';
import Button from '../components/Shared/Button';
import Heading from '../components/Shared/Heading';
import Text from '../components/Shared/Text';
import Link from '../components/Shared/Link';

const Index = () => {
  const router = useRouter();

  // Context
  const { wallet } = useAccount();

  if (wallet?.address) {
    router.push('/dashboard');
    return false;
  }

  return (
    <Flex height='100vh' w={'100vw'} justifyContent={'center'} alignItems={'center'}>
      <Container maxW={'md'} px='20px' bg='#fff'>
        <Flex flexDirection={'column'} gap={4}>
          {/* Content */}
          <Flex>
            <Image src='./150x150.png' />
          </Flex>
          <Heading>Lorem, ipsum dolor.</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti minus autem, reiciendis libero enim.
          </Text>

          {/* Buttons */}
          <Flex w='100%' flexDirection={'column'} gap='10px'>
            <Link href='/create' passHref>
              Create
            </Link>
            <Link href='/signup' color='secondary' passHref>
              Sign up
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Index;