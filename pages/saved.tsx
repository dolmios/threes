import { Badge, Box, Loading, Stack, Text, View, Element } from '@threesdev/ds';
import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import { useAccount } from 'wagmi';

import { Vote } from '../components';

export default function Votes(): JSX.Element {
  const { data: dataAccount } = useAccount();
  const { data, error } = useSWR(dataAccount?.address ? `/projects/?voters=cs.{${dataAccount.address}}&order=name.asc` : null);

  return (
    <>
      <NextSeo title='Saved Projects' />
      <View container={true} top={7}>
        <Stack direction='row' flex='center'>
          <Stack direction='column' align='center' offset={20} width={60}>
            <Text as='h2'>Saved Projects</Text>
          </Stack>
        </Stack>
      </View>
      <View top={8} bottom={7} container={true}>
        <Stack direction='row'>
          {!dataAccount ? (
            <Stack direction='column' align='center'>
              <Badge theme='purple'>You need to be signed in, connect your wallet to start saving your favorite projects.</Badge>
            </Stack>
          ) : error ? (
            <Stack direction='column' align='center'>
              <Text as='h1'>🫠</Text>
              <Badge theme='red'>There was an error fetching projects. Please try again later.</Badge>
            </Stack>
          ) : !data ? (
            <Stack direction='column' align='center'>
              <Loading />
            </Stack>
          ) : data && !data.length ? (
            <Stack direction='column' align='center'>
              <Text as='h1'>🧃</Text>
              <Badge theme='purple'>You haven&apos;t saved any projects, hit that little heart button and start saving your favorite projects.</Badge>
            </Stack>
          ) : (
            data.map((project: any) => (
              <Stack direction='column' key={project.id} width={25} widthTablet={50} widthWide={20} bottom={6}>
                <Box
                  image={`https://${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/storage/v1/object/public/projects/${project.id}.png`}
                  imageAlt={project.name || ''}
                  imageCTA={`/project/${project.id}`}
                  imageTarget='_self'
                  imageHeight='13.33rem'>
                  <Element flexduo>
                    <Element>
                      <Text as='h4'>
                        <a href={`https://${project.website}?utm_source=threes.dev`} target='_blank' rel='noreferrer'>
                          {project.name}
                        </a>
                      </Text>
                    </Element>
                    {project.voters && <Vote id={project.id} voters={project.voters} votes={project.votes} />}
                  </Element>
                </Box>
              </Stack>
            ))
          )}
        </Stack>
      </View>
    </>
  );
}
