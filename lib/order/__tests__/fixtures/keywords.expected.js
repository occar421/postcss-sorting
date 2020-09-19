const Component1 = styled.div`
	color: tomato;
	a {
		color: blue;
	}

	@media screen {
		color: black;
	}
`;

const Component2 = styled.div`
	color: tomato;
	${Button} {
		color: blue;
	}
	@media screen {
		color: black;
	}
`;

const Component3 = styled.div`
	div {
		color: tomato;
		a {
			color: blue;
		}
	}
`;

const Component4 = styled.div`

	display: none;
	span {
	}

	div {
	}

	@media (min-width: 100px) {
	}
`;

const Component5 = styled.div`
	div {

		display: none;
		span {
		}

		div {
		}

		@media (min-width: 100px) {
		}
	}
`;

const Component101 = styled.div({
	color: 'tomato',
	a: {
		color: 'blue'
	},

	'@media screen': {
		color: 'black'
	}
});

const Component201 = styled.div({
	color: 'tomato',
	a: {
		color: 'blue',
	},

	'@media screen': {
		color: 'black',
	},
});

const Component102 = styled.div({
	color: 'tomato',
	[Button]: {
		color: 'black'
	},
	'@media screen': {
		color: 'black'
	}
});

const Component202 = styled.div({
	color: 'tomato',
	[Button]: {
		color: 'black',
	},
	'@media screen': {
		color: 'black',
	},
});

const Component103 = styled.div({
	div: {
		color: 'tomato',
		a: {
			color: 'blue'
		}
	}
});

const Component203 = styled.div({
	div: {
		color: 'tomato',
		a: {
			color: 'blue',
		},
	},
});

const Component104 = styled.div({
	display: 'none',
	span: {
	},

	div: {
	},

	'@media (min-width: 100px)': {
	}
});

const Component204 = styled.div({
	display: 'none',
	span: {
	},

	div: {
	},

	'@media (min-width: 100px)': {
	},
});

const Component105 = styled.div({
	div: {

		display: 'none',
		span: {
		},

		div: {
		},

		'@media (min-width: 100px)': {
		}
	}
});

const Component205 = styled.div({
	div: {

		display: 'none',
		span: {
		},

		div: {
		},

		'@media (min-width: 100px)': {
		},
	},
});
