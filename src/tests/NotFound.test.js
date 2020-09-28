import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';

it('Renders correctly when there is no title , size and/or message', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a title', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NotFound title="Marissa" />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a size', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NotFound size="big" />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a message', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NotFound message="hello" />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a unknown title', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NotFound title={null} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a array as title', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NotFound title={[1, 2, 3]} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a unknown size', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NotFound size={null} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a array as size', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NotFound size={[1, 2, 3]} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a unknown message', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NotFound message={null} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there is a array as message', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NotFound message={[1, 2, 3]} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
