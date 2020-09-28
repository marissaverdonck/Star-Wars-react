import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

it('Renders correctly when there is no title and/or size', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a title', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Header title="Marissa" />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a size', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Header size="big" />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a unknown size', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Header size="5" />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
