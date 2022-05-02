import { createClient } from '@supabase/supabase-js';
import { Button, Element } from '@threesdev/ds';
import { BookmarkSimple } from 'phosphor-react';
import { useState } from 'react';
import { mutate } from 'swr';
import { useAccount } from 'wagmi';

export function Vote({ id, voters, votes }: { id: any; voters: any; votes: number }): JSX.Element {
  const supabase = createClient(`https://${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}`, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY as string);

  const { data } = useAccount();
  const [loading, setLoading] = useState(false);

  const vote = voters.find((vote: any) => vote === data?.address);
  const [voteSync, setVoteSync] = useState(vote);

  async function handleVote({ action }: { action: 'add' | 'remove' }): Promise<void> {
    setVoteSync(action === 'add');
    setLoading(true);
    try {
      const res = await supabase.from('projects').upsert({
        id,
        // if aciton is add, check if the user has already voted, if so do nothing else add the vote
        // if action is remove, check if the user has already voted, if so remove the vote else do nothing
        voters: action === 'add' ? (vote ? voters : [...voters, data?.address]) : voters.filter((voter: any) => voter !== data?.address),
        votes: action === 'add' ? votes + 1 : votes > 1 ? votes - 1 : 0,
      });

      if (res.error) {
        throw new Error('Unknown error');
      } else if (res.data) {
        mutate('/projects/?order=id.desc');
        mutate(`/projects/?voters=cs.{${data?.address}}&order=name.asc`);
        mutate('/projects?order=votes.desc&limit=25');
      }
    } catch (error) {
      setVoteSync(!voteSync);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  if (!data) return <></>;

  return (
    <Element>
      <Button
        aria-label={voteSync ? 'Remove your vote' : 'Add your vote'}
        loading={loading ? true : undefined}
        onClick={(): Promise<void> => handleVote(voteSync ? { action: 'remove' } : { action: 'add' })}
        css={{
          borderRadius: '100%',
          svg: {
            height: '1.6rem',
            width: '1.6rem',
          },
        }}>
        {voteSync ? <BookmarkSimple weight='fill' /> : <BookmarkSimple weight='duotone' />}
      </Button>
    </Element>
  );
}
