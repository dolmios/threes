import dayjs from 'dayjs';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Browser, Buildings, CurrencyEth, Database, DiscordLogo, GameController, GithubLogo, Lock, Question, TreeStructure, TrendDown, TrendUp, TwitterLogo } from 'phosphor-react';
import useSWR from 'swr';
import { useEnsName } from 'wagmi';

import { Vote } from '../../components';
import { useTruncate } from '../../hooks';
import { Badge, Box, breakpoints, Button, Element, Image, Loading, Stack, Text, View } from '../../ui';

export default function DynamicProject(): JSX.Element {
  const router = useRouter();

  const { data, error } = useSWR(router.query.id ? `/projects/?id=eq.${router.query.id}` : null);

  const ens = useEnsName({ address: data?.[0]?.submitted_by || '' });
  const address = useTruncate(data?.[0]?.submitted_by || '');
  const display = ens?.data || address;

  const { data: tokenData, error: tokenError } = useSWR(data?.[0]?.token ? `/coin/${data?.[0]?.token}` : null);

  return (
    <>
      <NextSeo
        title={data?.[0]?.name || 'Project'}
        openGraph={{
          images: [
            {
              alt: data?.[0]?.name || 'Project',
              url: `https://${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/storage/v1/object/public/projects/${router?.query?.id}.png` || 'https://threes.dev/meta.jpg',
            },
          ],
        }}
      />

      <View container top={7} bottom={8}>
        {!data ? (
          <Stack direction='row'>
            <Stack direction='column' align='center'>
              <Loading />
            </Stack>
          </Stack>
        ) : error || (data && !data.length) ? (
          <Stack direction='row'>
            <Stack direction='column' align='center'>
              <Text as='h1'>🫠</Text>
              <Badge theme='red'>There was an error fetching this project. It may not exist.</Badge>
            </Stack>
          </Stack>
        ) : (
          data.map((project: any) => (
            <Element key={project.id}>
              <Stack direction='row'>
                <Stack direction='column' align='center'>
                  <Text
                    as='h2'
                    inline={6}
                    css={{
                      verticalAlign: 'middle',
                    }}>
                    {project.name}
                  </Text>
                  <Badge
                    css={{
                      textTransform: 'capitalize',
                      verticalAlign: 'middle',
                    }}
                    icon={
                      project.category === 'finance' ? (
                        <CurrencyEth weight='duotone' />
                      ) : project.category === 'privacy' ? (
                        <Lock weight='duotone' />
                      ) : project.category === 'data' ? (
                        <Database weight='duotone' />
                      ) : project.category === 'infrastructure' ? (
                        <TreeStructure weight='duotone' />
                      ) : project.category === 'community' ? (
                        <Buildings weight='duotone' />
                      ) : project.category === 'nfts' ? (
                        <GameController weight='duotone' />
                      ) : (
                        <Question weight='duotone' />
                      )
                    }
                    theme={
                      project.category === 'finance'
                        ? 'green'
                        : project.category === 'privacy'
                        ? 'pink'
                        : project.category === 'data'
                        ? 'purple'
                        : project.category === 'infrastructure'
                        ? 'orange'
                        : project.category === 'community'
                        ? 'red'
                        : project.category === 'gaming'
                        ? 'blue'
                        : undefined
                    }>
                    {project.category}
                  </Badge>
                  <Text as='h6' top={3}>
                    <a href={`https://${project.website}?utm_source=threes.dev`} target='_blank' rel='noreferrer'>
                      {project.website}
                    </a>
                  </Text>
                </Stack>
              </Stack>
              <Stack direction='row' top={8}>
                <Stack direction='column' bottom={6} css={{ visible: 'phone' }}>
                  <a href={`https://${project.website}?utm_source=threes.dev`} target='_blank' rel='noreferrer'>
                    <Image
                      priority
                      hover
                      fillHeight='20rem'
                      src={`https://${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/storage/v1/object/public/projects/${project.id}.png`}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='top'
                      borderRadius={2}
                      alt=''
                    />
                  </a>
                </Stack>
                <Stack
                  direction='column'
                  width={35}
                  css={{
                    paddingRight: '$6',
                    [breakpoints.phone]: {
                      paddingRight: '$3 !important',
                    },
                  }}>
                  <Box>
                    <Element bottom={5} flexduo>
                      <Text as='h3'>Project Details</Text>
                      {project.voters && <Vote id={project.id} voters={project.voters} votes={project.votes} />}
                    </Element>

                    <Text as='h5'>{project.description || 'No description available.'}</Text>
                    <Text
                      as='small'
                      css={{
                        opacity: 0.6,
                      }}>
                      This description was sourced (read: copied) from the project meta description at the time of indexing. We only endorse design and usability.
                    </Text>

                    <Element top={6} flexduo>
                      <Text as='h4'>Added</Text>
                      <Text as='h6'>{dayjs(project.indexed).format('MMMM D, YYYY')}</Text>
                    </Element>
                    <Element top={2} flexduo>
                      <Text as='h4'>Contributor</Text>

                      <Text as='h6'>
                        {!project.submitted_by ? (
                          <Loading />
                        ) : (
                          <a href={`https://rainbow.me/${ens?.data || project.submitted_by}?utm_source=threes.dev`} target='_blank' rel='noopener noreferrer'>
                            {display}
                          </a>
                        )}
                      </Text>
                    </Element>
                    <Element top={2} flexduo>
                      <Text as='h4'>Votes</Text>
                      <Text as='h6'>{project.votes || 0}</Text>
                    </Element>
                    {project.token && (
                      <Element
                        top={2}
                        flexduo
                        css={{
                          '*': {
                            alignSelf: 'center',
                          },
                        }}>
                        <Text
                          as='h4'
                          css={{
                            marginBottom: ' 0 !important',
                          }}>
                          Token
                        </Text>
                        <Element>
                          {!tokenData && !tokenError ? (
                            <Loading />
                          ) : tokenData ? (
                            <a href={`https://www.coingecko.com/en/coins/${project.token}?utm_source=threes.dev`} target='_blank' rel='noreferrer'>
                              <Badge
                                css={{
                                  marginRight: '$2 !important',
                                }}>
                                {project.token_ticker || project.token.cap} ${tokenData[project.token].usd.toLocaleString()}
                              </Badge>

                              {tokenData[project.token].usd_24h_change > 0.05 ? (
                                <Badge theme='green' icon={<TrendUp />}>
                                  {tokenData[project.token].usd_24h_change.toFixed(2)}%
                                </Badge>
                              ) : tokenData[project.token].usd_24h_change < -0.05 ? (
                                <Badge theme='orange' icon={<TrendDown />}>
                                  {tokenData[project.token].usd_24h_change.toFixed(2)}%
                                </Badge>
                              ) : (
                                <Badge icon={<TrendDown />}>0</Badge>
                              )}
                            </a>
                          ) : (
                            'N/A'
                          )}
                        </Element>
                      </Element>
                    )}
                    <Stack direction='row' flex='center' top={6}>
                      <Stack
                        direction='column'
                        minimal
                        width={50}
                        widthPhone={50}
                        css={{
                          paddingRight: '$2',
                        }}>
                        <a href={`https://${project.website}?utm_source=threes.dev`}>
                          <Button aria-label='Website' icon={<Browser weight='duotone' />} disabled={!project.website} block>
                            Website
                          </Button>
                        </a>
                      </Stack>
                      <Stack
                        direction='column'
                        width={50}
                        widthPhone={50}
                        minimal
                        css={{
                          paddingLeft: '$2',
                        }}>
                        <a href={`${project.discord}?utm_source=threes.dev`} target='_blank' rel='noopener noreferrer'>
                          <Button aria-label='Discord' icon={<DiscordLogo weight='duotone' />} disabled={!project.discord} block>
                            Discord
                          </Button>
                        </a>
                      </Stack>
                    </Stack>
                    <Stack direction='row' flex='center' top={3}>
                      <Stack
                        direction='column'
                        minimal
                        width={50}
                        widthPhone={50}
                        css={{
                          paddingRight: '$2',
                        }}>
                        <a href={`${project.github}?utm_source=threes.dev`} target='_blank' rel='noopener noreferrer'>
                          <Button aria-label='Github' icon={<GithubLogo weight='duotone' />} disabled={!project.github} block>
                            Github
                          </Button>
                        </a>
                      </Stack>
                      <Stack
                        direction='column'
                        minimal
                        width={50}
                        widthPhone={50}
                        css={{
                          paddingLeft: '$2',
                        }}>
                        <a href={`${project.twitter}?utm_source=threes.dev`} target='_blank' rel='noopener noreferrer'>
                          <Button aria-label='Twitter' icon={<TwitterLogo weight='duotone' />} disabled={!project.twitter} block>
                            Twitter
                          </Button>
                        </a>
                      </Stack>
                    </Stack>

                    <Text
                      top={5}
                      as='small'
                      css={{
                        opacity: 0.5,
                      }}>
                      <a href='mailto:mail@threes.dev'>Report an error (mail@threes.dev)</a>
                    </Text>
                  </Box>
                </Stack>
                <Stack direction='column' width={65} css={{ hidden: 'phone' }}>
                  <a href={`https://${project.website}?utm_source=threes.dev`} target='_blank' rel='noreferrer'>
                    <Image
                      priority
                      hover
                      src={`https://${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/storage/v1/object/public/projects/${project.id}.png`}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='top'
                      borderRadius={2}
                      alt=''
                    />
                  </a>
                </Stack>
              </Stack>
            </Element>
          ))
        )}
      </View>
    </>
  );
}
