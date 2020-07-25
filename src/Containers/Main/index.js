import React from 'react';
import MainBanner from './Banner';
import KnowInstitute from './KnowInstitute';
import AttendanceData from './AttendanceData';
import TestimonialsContainer from './TestimonialsContainer'

const Main = () => {
  return (
    <>
      <MainBanner />
      <KnowInstitute />
      <AttendanceData />
      <TestimonialsContainer />
    </>
  )
}

export default Main;