import React, { useState } from 'react';
import APIContext from './APIContext';
import useFetchData from './FetchData';

const APIProvider = ({ children }) => {
  const url = 'https://swapi.dev/api/';
  const subjectsObject = useFetchData(url);
  const subjectsArray =
    subjectsObject.data &&
    Object.keys(subjectsObject.data).map(key => ({
      title: key,
      url: url + key
    }));
  const [activeSubject, setActiveSubject] = useState('people');
  const subjectDataObject = useFetchData(url + activeSubject);
  const subjectDataArray = subjectDataObject.data
    ? subjectDataObject.data.results
    : subjectDataObject.data;
  const loadingState = subjectDataObject.loading;
  const errorState = subjectDataObject.error;

  const value = {
    url,
    subjectsArray,
    activeSubject,
    setActiveSubject,
    subjectDataArray,
    loadingState,
    errorState
  };
  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
};

export default APIProvider;
