import React, { useContext, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Header from './Header';
import useFetchData from './FetchData';
import properties from '../consts/Const';
import APIContext from './APIContext';
import LoadingState from './LoadingState';
import { getFirstLetter, urlPath, removeUnderscores } from './utils/index';
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

const AppStyle = styled.main`
	background-color: ${({ theme }) => theme.primaryColor};
	min-width: 100vw;
	min-height: 100vh;
	margin: 0;
	padding: 0;
`;

const DataDetailSection = styled.section`
	background-color: ${({ theme }) => theme.primaryColor};
	margin: 0 auto;
	padding: ${({ theme }) => theme.indentS};
	width: 100vw;
`;
const DetailWrapper = styled.div`
	max-width: ${({ theme }) => theme.sectionWidth};
	margin: 0 auto ${({ theme }) => theme.indentXXL} auto;

	@media ${device.mobileL} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: ${({ theme }) => theme.indentL};
		row-gap: ${({ theme }) => theme.indentS};
	}
`;

const Article = styled.article`
	width: 100%;
`;

const Title = styled.h1`
	font-size: ${({ theme }) => theme.fontSizeL};
	font-family: ${({ theme }) => theme.fontTitles};
	padding: 0 ${({ theme }) => theme.indentS} 0 0;
	word-break: break-word;
	margin: 0;

	@media ${device.mobileL} {
		font-size: ${({ theme }) => theme.fontSizeXL};
  }
  
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSizeXXL};
`;

const List = styled.ul`
	list-style-type: none;
	padding-left: 0;
`;

const ListItem = styled.li`
    font-family: ${({ theme }) => theme.fontDescription};
    line-height: ${({ theme }) => theme.indentL} ;
    text-transform: capitalize;
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.secondaryColorDark};
    :hover {
    text-decoration: underline;
    }}
}

`;
const PropertyTitle = styled.span`
	font-weight: bolder;
`;

const SuggestionsSection = styled.section`
	width: 100vw;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.secondaryColor};
	padding: ${({ theme }) => theme.indentS} ${({ theme }) => theme.indentS}
		${({ theme }) => theme.indentXXL} ${({ theme }) => theme.indentS};
	min-height: 50vh;
`;

const SuggestionsSectionDiv = styled.div`
	max-width: ${({ theme }) => theme.sectionWidth};
	margin: 0 auto;
`;
const SuggestionsSectionTitle = styled.h2`
	font-size: ${({ theme }) => theme.fontSizeS};
	font-family: ${({ theme }) => theme.fontTitles};
	color: ${({ theme }) => theme.primaryColorLight};
	max-width: ${({ theme }) => theme.sectionWidth};
	margin: 0 auto;
	padding: ${({ theme }) => theme.indentS} 0;
`;
const SuggestionsSectionTitleYellow = styled.span`
	color: ${({ theme }) => theme.primaryColor};
	text-transform: capitalize;
`;

const WrapperElementBoxes = styled.div`
	font-family: ${({ theme }) => theme.fontDescription};
	display: flex;
	flex-wrap: wrap;
	max-width: 60rem;
	margin: 0 auto;

	@media ${device.mobileL} {
		display: grid;
		grid-template-columns: 1fr 1fr;
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
`;

const Detail = () => {
	const { url, subjectDataArray } = useContext(APIContext);
	const id = useParams();
	const detailUrl = url + id.type + '/' + id.id + '/';
	const detailDataObject = useFetchData(detailUrl);
	const detailData = detailDataObject.data && detailDataObject.data;
	const nameOrTitle =
		detailData && detailData.name
			? detailData.name
			: detailData && detailData.title && detailData.title;
	const initialNameOrTitle =
		detailData && nameOrTitle && getFirstLetter(nameOrTitle);
	const loadingState = detailDataObject.loading;
	const errorState = detailDataObject.error;
	const elementsWithMatchingInitials =
		subjectDataArray &&
		subjectDataArray.filter((element) => {
			return element.name
				? element.name.includes(initialNameOrTitle)
				: element.title.includes(initialNameOrTitle);
		});
	const getTwoInitials = (name) => {
		return name
			.split(' ')
			.map((x) => getFirstLetter(x))
			.join('')
			.substr(0, 2);
	};
	const getNeededProperties = (property) => {
		if (detailData) {
			return (
				typeof detailData[property] === 'string' &&
				!detailData[property].includes('swapi.dev')
			);
		}
	};
	const neededProperties = properties.filter(getNeededProperties);

	return (
		<AppStyle>
			<Header title='Star Wars Universe.' />
			<Suspense fallback={<LoadingState />}>
				<DataDetailSection>
					<DetailWrapper>
						<Article>
							{loadingState ? (
								<List>
									<ListItem>Loading data</ListItem>
								</List>
							) : errorState ? (
								<List>
									<ListItem>{`${errorState}`}</ListItem>
									<ListItem>
										{' '}
										<Link to='/'>
											{' '}
											Back to the homepage &rarr;
										</Link>
									</ListItem>
								</List>
							) : (
								<Title>{nameOrTitle}</Title>
							)}
						</Article>
						<Article>
							<List>
								{neededProperties.map((property, index) => (
									<ListItem key={index}>
										<PropertyTitle>{`${removeUnderscores(
											property
										)}: `}</PropertyTitle>
										{detailData[property]}
									</ListItem>
								))}
							</List>
						</Article>
					</DetailWrapper>
				</DataDetailSection>
			</Suspense>
			<SuggestionsSection>
				{subjectDataArray && !loadingState && !errorState ? (
					<SuggestionsSectionDiv>
						<SuggestionsSectionTitle>
							{' '}
							Other{' '}
							<SuggestionsSectionTitleYellow>{`${id.type}`}</SuggestionsSectionTitleYellow>{' '}
							includes letter{' '}
							<SuggestionsSectionTitleYellow>
								{' '}
								{`${initialNameOrTitle}`}
							</SuggestionsSectionTitleYellow>
						</SuggestionsSectionTitle>
						<WrapperElementBoxes>
							{elementsWithMatchingInitials &&
								elementsWithMatchingInitials.map(
									(element, index) => (
										<ElementBox key={index} number={index}>
											<Link
												to={`/${urlPath(
													element.url,
													id.type
												)}`}
											>
												<InitialElementBox>
													{element.name
														? getTwoInitials(
																element.name
														  )
														: getTwoInitials(
																element.title
														  )}
												</InitialElementBox>
												<TitleElementBox>
													{element.name
														? element.name
														: element.title}
												</TitleElementBox>
											</Link>
										</ElementBox>
									)
								)}
						</WrapperElementBoxes>
					</SuggestionsSectionDiv>
				) : loadingState && !errorState ? (
					<SuggestionsSectionDiv>
						<SuggestionsSectionTitle>
							Other{' '}
							<SuggestionsSectionTitleYellow>{`${id.type}`}</SuggestionsSectionTitleYellow>{' '}
							loading
						</SuggestionsSectionTitle>
					</SuggestionsSectionDiv>
				) : null}
			</SuggestionsSection>
		</AppStyle>
	);
};

Detail.propTypes = {};

export default Detail;
