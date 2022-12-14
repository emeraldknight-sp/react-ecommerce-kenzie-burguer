import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body, select, input, button, textarea {
	font-family: var(--fontfamily);
}

:root {

	/* TIPOGRAPHY */
  --fontfamily: 'Outfit', sans-serif;

	/* PRIMARY PALLETE */
	--color-primary: #27AE60;
	--color-primary-hover: #93D7AF;
	--color-secondary: #EB5757;
	--white: #FFFFFF;
	--transparent: transparent;

	/* GRAY SCALE PALLETE */
	--gray-4: #333333;
	--gray-3: #828282;
	--gray-2: #E0E0E0;
	--gray-1: #F5F5F5;

	/* ALERTS */
	--negative: #E60000;
	--warning: #FFCD07;
	--sucess: #168821;
	--information: #155BCB;

	/* HEADING-1 - 24px */
	--heading-1: 1.5rem;
	--line-height-h1: 2rem;
	
	/* HEADING-2 - 20px */
	--heading-2: 1.25rem;
	--line-height-h2: 1.75rem;
	
	/* HEADING-3 - 18px */
	--heading-3: 1.125rem;
  --line-height-h3: 1.75rem;
	
	/* CONTENT MD - 16px */
	--content-md: 1rem;
	--line-height-md: 1.5rem;
	
	/* CONTENT SM - 14px */
	--content-sm: 0.875rem;
	--line-height-sm: 1.25rem;

	/* CONTENT XS - 12px */
	--content-xs: 0.75rem;
	--line-height-xs: 1rem;
	
}
`;
