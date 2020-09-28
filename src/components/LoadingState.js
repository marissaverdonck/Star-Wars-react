import React from 'react';
import styled from 'styled-components';

const LoadingSection = styled.div`
	font-family: ${({ theme }) => theme.fontDescription};
	display: flex;
	flex-wrap: wrap;
	max-width: ${({ theme }) => theme.sectionWidth};
	margin: 0 auto;
	padding: ${({ theme }) => theme.indentS};
`;

const LoadingState = () => {
	return (
		<LoadingSection>
			<p>Loading data</p>
		</LoadingSection>
	);
};

export default LoadingState;
