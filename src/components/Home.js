import React, { useContext, lazy, Suspense } from 'react';
import styled from 'styled-components';
import Header from './Header';
import APIContext from './APIContext';
import LoadingState from './LoadingState';
const SubjectData = lazy(() => import('./SubjectData'));

const AppStyle = styled.main`
  background-color: ${({ theme }) => theme.primaryColor};
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const SelectSubject = styled.section`
  font-family: ${({ theme }) => theme.fontDescription};
  font-size: ${({ theme }) => theme.fontSizeXS};
  margin: 0 auto;
  padding: ${({ theme }) => theme.indentS};
  width: 100vw;
  p {
    font-family: ${({ theme }) => theme.fontDescription};
    font-size: ${({ theme }) => theme.fontSizeXS};
  }
`;
const SelectSubjectElements = styled.div`
  max-width: ${({ theme }) => theme.sectionWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const SelectBox = styled.select`
  padding: ${({ theme }) => theme.indentXXS} ${({ theme }) => theme.indentM};
  margin: 0 ${({ theme }) => theme.indentS};
  border: none;
  text-transform: capitalize;
`;

const Home = () => {
  const selectFunction = event => {
    setActiveSubject(event.target.value);
  };
  const { subjectsArray, activeSubject, setActiveSubject } = useContext(
    APIContext
  );

  return (
    <AppStyle>
      <Header size='big' title='Star Wars Universe.' />
      <Suspense fallback={<LoadingState />}>
        <SelectSubject>
          <SelectSubjectElements>
            <p>What are you looking for?</p>
            <SelectBox value={activeSubject} onChange={selectFunction}>
              {subjectsArray &&
                subjectsArray.map((subject, index) => (
                  <option
                    value={subject.title}
                    label={subject.title}
                    key={index}
                  >
                    {subject.title}
                  </option>
                ))}
            </SelectBox>
          </SelectSubjectElements>
        </SelectSubject>
        <SubjectData />
      </Suspense>
    </AppStyle>
  );
};

export default Home;
