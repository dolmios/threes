import { Stack, Text, View, Badge, Box, Loading, Element } from '@threesdev/ds';
import dayjs from 'dayjs';
import { NextSeo } from 'next-seo';
import useSWR from 'swr';

import { Vote } from '../components';

export default function Home(): JSX.Element {
  const { data, error } = useSWR(`/projects/?order=id.desc`);

  return (
    <>
      <NextSeo title='Threes' titleTemplate='%s' />
      <View container={true} top={7}>
        <Stack direction='row' flex='center'>
          <Stack direction='column' align='center' offset={20} width={60} widthLaptop={90} offsetLaptop={5} widthTablet={90} offsetTablet={5}>
            <Text as='h1'>Bringing together the finest and most user-friendly projects in web3 to inspire those building the next thing. </Text>
          </Stack>
        </Stack>
      </View>
      <View container={true} top={8} bottom={7}>
        <Stack direction='row' flex='stretch'>
          {!data ? (
            <Stack direction='column' align='center'>
              <Loading />
            </Stack>
          ) : error ? (
            <Stack direction='column' align='center'>
              <Text as='h1'>🫠</Text>
              <Badge theme='red'>There was an error fetching projects. Please try again later.</Badge>
            </Stack>
          ) : data && !data.length ? (
            <Stack direction='column' align='center'>
              <Text as='h1'>🧃</Text>
              <Badge theme='purple'>There are no projects to be found (yet).</Badge>
            </Stack>
          ) : (
            data.map((project: any) => {
              return (
                <Stack direction='column' key={project.id} width={25} widthTablet={50} widthWide={20} bottom={6}>
                  <Box
                    image={`https://${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/storage/v1/object/public/projects/${project.id}.png`}
                    imageAlt={project.name || ''}
                    imageHeight={'17.420rem'}
                    imageCTA={`/project/${project.id}`}
                    imageTarget='_self'
                    imagePosition='top'>
                    <Element flexduo>
                      <Element>
                        <Text as='h4'>
                          <a target='_blank' rel='noreferrer' href={`https://${project.website}?utm_source=threes.dev`}>
                            {project.name}
                          </a>
                        </Text>
                        <Text as='h6' top={2}>
                          {dayjs(project.indexed).format('MMMM D, YYYY')}
                        </Text>
                      </Element>
                      {project.voters && <Vote id={project.id} voters={project.voters} votes={project.votes} />}
                    </Element>
                  </Box>
                </Stack>
              );
            })
          )}
        </Stack>
      </View>
    </>
  );
}
