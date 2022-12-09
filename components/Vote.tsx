import { createClient } from '@supabase/supabase-js';
import { BookmarkSimple } from 'phosphor-react';
import { useState } from 'react';
import { mutate } from 'swr';
import { useAccount } from 'wagmi';

import { Button, Element } from '../ui';

export function Vote({
  id,
  voters,
  votes,
}: {
  id: any;
  voters: any;
  votes: number;
}): JSX.Element {
  const supabase = createClient(
    `https://${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}`,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY as string
  );

  const { data } = useAccount();

  const vote = voters.find((vote: any) => vote === data?.address);
  const [voteSync, setVoteSync] = useState(vote);

  async function handleVote({ action }: { action: 'add' | 'remove' }): Promise<void> {
    setVoteSync(action === 'add');
    try {
      const res = await supabase.from('projects').upsert({
        id,
        voters:
          action === 'add'
            ? vote
              ? [...voters]
              : [...voters, data?.address]
            : voters.filter((voter: any) => voter !== data?.address),
        votes: action === 'add' ? votes + 1 : votes > 1 ? votes - 1 : 0,
      });

      if (res.error) {
        throw new Error('Unknown error');
      } else if (res.data) {
        mutate('/projects/?order=id.desc');
        mutate(`/projects/?voters=cs.{${data?.address}}&order=name.asc`);
        mutate('/projects?order=votes.desc.nullslast');
      }
    } catch (error) {
      setVoteSync(!voteSync);
    }
  }

  if (!data) return <></>;

  return (
    <Element>
      <Button
        aria-label={voteSync ? 'Remove your vote' : 'Add your vote'}
        onClick={(): Promise<void> =>
          handleVote(voteSync ? { action: 'remove' } : { action: 'add' })
        }
        css={{
          alignItems: 'center',
          borderRadius: '100%',
          display: 'flex',
          height: '3rem',
          justifyContent: 'center',
          margin: 0,
          padding: 0,
          svg: {
            height: '1.66rem',
            verticalAlign: 'middle',
            width: '1.66rem',
          },

          width: '3rem',
        }}>
        {voteSync ? (
          <BookmarkSimple weight='fill' />
        ) : (
          <BookmarkSimple weight='duotone' />
        )}
      </Button>
    </Element>
  );
}
