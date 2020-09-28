import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import APIContext from './APIContext';
import { getFirstLetter, urlPath } from './utils/index';
import LoadingState from './LoadingState';
import { device } from './Device';

const loadCard = keyframes`
  from {
    bottom: -100px;
    opacity: 0;
  }

  to {
    bottom: 0;
    opacity: 1;
  }
`;

const ResultSection = styled.section`
	width: 100vw;
	margin: 0 auto;
	padding: ${({ theme }) => theme.indentS};
`;

const WrapperElementBoxes = styled.div`
	font-family: ${({ theme }) => theme.fontDescription};
	display: flex;
	flex-wrap: wrap;
	max-width: ${({ theme }) => theme.sectionWidth};
	margin: 0 auto;
	@media ${device.mobileL} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1em;
		column-gap: ${({ theme }) => theme.indentS};
		row-gap: ${({ theme }) => theme.indentS};
	}
	@media ${device.tablet} {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

const ElementBox = styled.article`
	background-color: ${({ theme }) => theme.primaryColorLight};
	width: 100%;
	text-align: center;
	margin: 0 0 ${({ theme }) => theme.indentS} 0;
	text-decoration: none;
	color: ${({ theme }) => theme.secondaryColorDark};
	position: relative;

	&:hover {
		background-color: ${({ theme }) => theme.primaryColorDark};
	}
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.secondaryColorDark};
	}

	:nth-child(${(props) => props.number + 1}) {
		opacity: 0;
		animation: ${loadCard} 1s forwards;
		animation-delay: ${(props) => props.number * 0.2}s;
	}
	@media ${device.mobileL} {
		margin: 0;
	}
`;

const InitialElementBox = styled.h2`
	font-family: ${({ theme }) => theme.fontTitles};
	font-size: ${({ theme }) => theme.fontSizeXXL};
	text-decoration: none;
	margin: ${({ theme }) => theme.indentXS};
	text-transform: uppercase;
`;

const TitleElementBox = styled.p` 
    font-family: ${({ theme }) => theme.fontDescription};
    font-size: ${({ theme }) => theme.fontSizeXXS};
    text-decoration: none;
    text-transform: capitalize;
}
`;

const SubjectData = () => {
	const {
		activeSubject,
		subjectDataArray,
		loadingState,
		errorState,
	} = useContext(APIContext);

	return (
		<ResultSection>
			<WrapperElementBoxes>
				{loadingState ? (
					<LoadingState />
				) : errorState ? (
					<p>{`${errorState}`}</p>
				) : (
					subjectDataArray &&
					subjectDataArray.map((data, index) => (
						<ElementBox key={index} number={index}>
							<Link
								to={{
									pathname: urlPath(data.url, activeSubject),
									key: { index },
								}}
							>
								<InitialElementBox>
									{data.name
										? getFirstLetter(data.name)
										: getFirstLetter(data.title)}
								</InitialElementBox>
								<TitleElementBox>
									{data.name ? data.name : data.title}
								</TitleElementBox>
							</Link>
						</ElementBox>
					))
				)}
			</WrapperElementBoxes>
		</ResultSection>
	);
};

SubjectData.propTypes = {};

export default SubjectData;
