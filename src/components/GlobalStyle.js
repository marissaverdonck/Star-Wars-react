import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	html {
		margin: 0;
		padding:0;
	}

	body {
		margin: -1em 0 0 0;
		padding:0;
		background-color: ${({ theme }) => theme.primaryColor};
	}
	`;

export default GlobalStyle;
