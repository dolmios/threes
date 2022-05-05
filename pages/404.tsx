import { View, Stack, Text, Image } from '@threesdev/ds';
import { NextSeo } from 'next-seo';

export default function Custom404(): JSX.Element {
  return (
    <>
      <NextSeo title='Page not found' />
      <View container={true} top={7}>
        <Stack direction='row' flex='center'>
          <Stack direction='column' align='center' offset={20} width={60}>
            <Text as='h2' bottom={6}>
              Page not found
            </Text>
            <Image borderRadius={3} src='/taxidriver.gif' width={560} height={420} alt='' placeholder='blur' blurDataURL='/taxidriver.gif' />
          </Stack>
        </Stack>
      </View>
    </>
  );
}
