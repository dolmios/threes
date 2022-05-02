import { createClient } from '@supabase/supabase-js';
import { Badge, Button, Divider, Element, Input, Text, Dialog } from '@threesdev/ds';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { useAccount } from 'wagmi';

export function Submit(): JSX.Element {
  const [submissionValue, setSubmissionValue] = useState('');
  const [submissionConfirmation, setSubmissionConfirmation] = useState(null as null | string);
  const { data } = useAccount();

  const supabase = createClient(`https://${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}`, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY as string);

  const reg = /[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,256}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)?/gi;

  function handleChange(e: any): void {
    setSubmissionValue(e.target.value);
    setSubmissionConfirmation(null);
  }

  async function handleSubmit(): Promise<void> {
    const { data: submitData, error: submitError } = await supabase.from('submissions').upsert({ submitted_by: data?.address || 'N/A', website: submissionValue });

    if (submitError) {
      setSubmissionConfirmation('error');
    } else if (submitData) {
      setSubmissionConfirmation('success');
    } else {
      setSubmissionConfirmation('unknown');
    }
  }

  return (
    <Dialog
      trigger={
        <Button aria-label='Submit a Project' inline={3} disabled={!data}>
          <Text as='span' css={{ hiddenInline: 'phone' }}>
            Submit
          </Text>
          <Text as='span' css={{ visible: 'phone' }}>
            <PlusCircle weight='duotone' />
          </Text>
        </Button>
      }>
      <Text as='h3'>Contribute to Threes</Text>
      <Divider bottom={5} top={4} />
      {data ? (
        <>
          <Input
            error={submissionConfirmation === 'error'}
            onChange={handleChange}
            placeholder='Enter the project URL'
            submit='Submit'
            submitFunction={handleSubmit}
            submitValid={reg.test(submissionValue)}
            success={submissionConfirmation === 'success'}
            warning={submissionConfirmation === 'unknown'}>
            Open Submissions
          </Input>

          {submissionConfirmation && (
            <Element top={5}>
              {submissionConfirmation === 'error' ? (
                <Badge theme='red'>There was an error, please try again later.</Badge>
              ) : submissionConfirmation === 'success' ? (
                <Badge theme='green'>Thanks for your contribution, we will review it shortly.</Badge>
              ) : (
                <Badge theme='orange'>Unknown error 🫣</Badge>
              )}
            </Element>
          )}
        </>
      ) : (
        <Element>
          <Badge theme='orange'>You must be logged in to submit a project.</Badge>
        </Element>
      )}
    </Dialog>
  );
}
