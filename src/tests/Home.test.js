import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';
import APIProvider from '../components/APIProvider';

const valueTypeRight = {
  url: 'https://myurl.com',
  subjectsArray: [1, 2, 3, 4],
  activeSubject: 'fakeactivesubject',
  setActiveSubject: () => {},
  subjectDataArray: [{ name: 'a' }, { title: 'b' }],
  loadingState: true,
  errorState: true
};

const valueTypeWrong = {
  url: 1,
  subjectsArray: { name: 1 },
  activeSubject: 1,
  setActiveSubject: () => {},
  subjectDataArray: { name: 1 },
  loadingState: 1,
  errorState: 1
};

it('Renders correctly when there are right type of values', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <APIProvider value={valueTypeRight}>
          <Home />
        </APIProvider>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there are the wrong type of values', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <APIProvider value={valueTypeWrong}>
          <Home />
        </APIProvider>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
