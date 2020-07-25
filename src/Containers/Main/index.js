import React from 'react';
import MainBanner from './Banner';
import KnowInstitute from './KnowInstitute';
import AttendanceData from './AttendanceData';
import ReportingChannel from './ReportingChannel';
import TestimonialsContainer from './TestimonialsContainer'

const Main = () => {
  return (
    <>
      <MainBanner />
      <KnowInstitute />
      <AttendanceData />
      <ReportingChannel />
      <TestimonialsContainer />
    </>
  )
}

export default Main;