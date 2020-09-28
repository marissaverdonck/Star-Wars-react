import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';

const AppStyle = styled.main`
  background-color: ${({ theme }) => theme.secondaryColor};
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizeS};
  font-family: ${({ theme }) => theme.fontTitles};
  color: ${({ theme }) => theme.primaryColorLight};
  padding: ${({ theme }) => theme.indentS};
  word-break: break-word;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sectionWidth};
`;
const GoBack = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sectionWidth};
  a {
    font-size: ${({ theme }) => theme.fontSizeS};
    font-family: ${({ theme }) => theme.fontTitles};
    color: ${({ theme }) => theme.primaryColor};
    padding: ${({ theme }) => theme.indentS};
    word-break: break-word;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

function NotFound({ title, size, message, link }) {
  return (
    <AppStyle>
      <Header size={size} title={title} />
      <Title>{message}</Title>
      <GoBack>{link}</GoBack>
    </AppStyle>
  );
}

NotFound.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.element
};

NotFound.defaultProps = {
  title: 'Star Wars Universe.',
  size: 'big',
  message: '404, page not found.',
  link: <Link to="/"> Go back to the homepage &rarr; </Link>
};

export default NotFound;
