import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from './Device';

const HeaderStyle = styled.header`
	width: 100vw;
	margin: ${({ theme }) => theme.indentS} auto;
	padding: ${({ theme }) => theme.indentS};
	background-color: ${({ theme }) => theme.primaryColor};
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.secondaryColorDark};
	}
`;

const HeaderTitle = styled.h1`
	font-family: ${({ theme }) => theme.fontTitles};
	font-size: ${(props) =>
		props.size === 'big'
			? ({ theme }) => theme.fontSizeM
			: ({ theme }) => theme.fontSizeS};
	margin: 0;
	padding: 0;
	max-width: ${({ theme }) => theme.sectionWidth};
	margin: 0 auto;

	@media ${device.mobileL} {
		font-size: ${(props) =>
			props.size === 'big'
				? ({ theme }) => theme.fontSizeXL
				: ({ theme }) => theme.fontSizeS};
	}

	@media ${device.laptop} {
		font-size: ${(props) =>
			props.size === 'big'
				? ({ theme }) => theme.fontSizeXXL
				: ({ theme }) => theme.fontSizeS};
	}
`;

const Header = ({ size, title }) => {
	return (
		<HeaderStyle>
			<Link to='/'>
				<HeaderTitle size={size}>{title} </HeaderTitle>
			</Link>
		</HeaderStyle>
	);
};

Header.propTypes = {
	size: PropTypes.string,
	title: PropTypes.string,
};
Header.defaultProps = {
	title: 'Star Wars Universe.',
	size: 'small',
};

export default Header;
