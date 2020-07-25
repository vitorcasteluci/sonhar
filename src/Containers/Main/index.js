import React from 'react';
import MainBanner from './Banner';
import KnowInstitute from './KnowInstitute';
import AttendanceData from './AttendanceData';
import ReportingChannel from './ReportingChannel';
import TestimonialsContainer from './TestimonialsContainer'
import ArticleContainer from '../../components/ArticleContainer'

const Main = () => {
  return (
    <>
      <MainBanner />
      <KnowInstitute />
      <AttendanceData />
      <ArticleContainer />
      <TestimonialsContainer />
      <ReportingChannel />
    </>
  )
}

export default Main;