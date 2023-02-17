import { Inter } from '@next/font/google'
import { MainLayout } from "components/MainLayout"
import MainSectionOne from 'components/MainSectionOne'
import ManhattanButton from 'components/ManhattanButton'
import MainSectionTwo from 'components/MainSectionTwo'
import MainSectionThree from 'components/MainSectionThree'
import MainSectionFour from 'components/MainSectionFour'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout title={'ГЛАВНАЯ'}>
      <MainSectionOne/>
      <ManhattanButton title={'menu'}/>
      <MainSectionTwo/>
      <MainSectionThree/>
      <ManhattanButton title={'party'} />
      <MainSectionFour />
      <ManhattanButton title={'place'} />
    </MainLayout>
  )
}
