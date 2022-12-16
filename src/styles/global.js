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

  --fontfamily: 'Outfit', sans-serif;

	/* PRIMARY PALLETE */
	--color-primary: #27AE60;
	--color-primary-hover: #93D7AF;
	--color-secondary: #EB5757;

	/* GRAY SCALE PALLETE */
	--gray-4: #333333;
	--gray-3: #828282;
	--gray-2: #E0E0E0;
	--gray-1: #F5F5F5;

	/* SINALIZAÇÔES */
	--negative: #E60000;
	--warning: #FFCD07;
	--sucess: #168821;
	--information: #155BCB;

	/* HEADINGS */
	--heading-1: 26px;
	--heading-2: 22px;
	--heading-3: 18px;
	--heading-4: 14px;
	--headline: 16px;
	--body: 14px;
	--body-600: 14px;
	--caption: 12px;
}
`;
