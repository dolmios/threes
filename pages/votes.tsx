/* eslint-disable react-hooks/rules-of-hooks */
import { Badge, Box, Button, Dialog, Divider, Element, Loading, Stack, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Text, View } from '@threesdev/ds';
import dayjs from 'dayjs';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { ArrowUpRight, CurrencyEth, Lock, Database, TreeStructure, Buildings, GameController, Question } from 'phosphor-react';
import { useState } from 'react';
import useSWR from 'swr';

import { useTruncate } from '../hooks/useTruncate';

export default function Votes(): JSX.Element {
  const [filter, setFilter] = useState('all' as 'all' | 'finance' | 'privacy' | 'data' | 'infrastructure' | 'community' | 'nfts');
  const { data, error } = useSWR(filter === 'all' ? '/projects?order=votes.desc.nullslast&limit=50' : `/projects/?category=eq.${filter}&order=votes.desc&limit=50`);

  return (
    <>
      <NextSeo title='Top Voted Projects' />
      <View container={true} top={7}>
        <Stack direction='row' flex='center'>
          <Stack direction='column' align='center' offset={20} width={60}>
            <Text as='h2'>Top Voted Projects</Text>
          </Stack>
        </Stack>
      </View>
      <View top={8} bottom={8} container={true}>
        {filter !== 'all' && (
          <Stack direction='row' bottom={4}>
            <Stack direction='column' align='center'>
              <Text
                as='h6'
                css={{
                  opacity: 0.5,
                }}
                inline={4}>
                Filtered by{' '}
                <Text
                  as='span'
                  css={{
                    textTransform: 'capitalize',
                  }}>
                  {filter}
                </Text>
              </Text>
              <Button aria-label='Reset Filters' onClick={(): void => setFilter('all')}>
                Reset
              </Button>
            </Stack>
          </Stack>
        )}
        <Stack direction='row' top={2}>
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
              <Badge theme='purple'>There are no projects (yet) for the {filter} category.</Badge>
            </Stack>
          ) : (
            <Stack direction='column'>
              <Box>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeadCell>Rank</TableHeadCell>
                      <TableHeadCell>Project</TableHeadCell>
                      <TableHeadCell>Website</TableHeadCell>
                      <TableHeadCell
                        css={{
                          hidden: 'phone',
                        }}>
                        Added
                      </TableHeadCell>
                      <TableHeadCell
                        css={{
                          hidden: 'phone',
                        }}>
                        Category
                      </TableHeadCell>
                      <TableHeadCell>Votes</TableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.map((project: any, index: number) => (
                      <TableRow
                        key={project.id}
                        css={{
                          opacity: project.votes && project.votes >= 1 ? 1 : 0.5,
                        }}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          <Link href={`/project/${project.id}`}>
                            <a style={{ display: 'block' }}>{project.name}</a>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <a style={{ display: 'block' }} href={`https://${project.website}?utm_source=threes.dev`} target='_blank' rel='noreferrer'>
                            {project.website}
                            &nbsp;
                            <ArrowUpRight />
                          </a>
                        </TableCell>
                        <TableCell
                          css={{
                            hidden: 'phone',
                          }}>
                          {dayjs(project.indexed).format('MMMM D, YYYY')}
                        </TableCell>

                        <TableCell
                          css={{
                            hidden: 'phone',
                          }}>
                          <Badge
                            css={{
                              cursor: 'pointer',
                              textTransform: 'capitalize',
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
                            onClick={(): void => setFilter(filter === project.category ? 'all' : project.category)}
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
                        </TableCell>
                        <TableCell>
                          {project.votes && project.votes >= 1 && project.voters !== '[]' ? (
                            <Dialog trigger={<Element css={{ cursor: 'pointer' }}>{project.votes}</Element>}>
                              <Text as='h3' inline={4}>
                                Voters
                              </Text>

                              <Divider bottom={5} top={4} />
                              {project.voters.map((voter: any) => (
                                <Badge inline={4} key={voter}>
                                  <a target='_blank' href={`https://etherscan.io/address/${voter}?utm_source=threes.dev`} rel='noreferrer'>
                                    {useTruncate(voter)}
                                  </a>
                                </Badge>
                              ))}
                            </Dialog>
                          ) : (
                            0
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Stack>
          )}
        </Stack>
      </View>
    </>
  );
}
