const Component1 = styled.div`
	z-index: 1;
	top: 1px;
	position: absolute;
	display: block;

	div {
		z-index: 2;
		position: static;
		top: 2px;
		display: inline-block;

		span {
			z-index: 3;
			top: 3px;
			display: flex;
			position: relative;
		}
	}

	${Container} {
		z-index: 4;
		top: 4px;
		display: inline;
		position: fixed;
	}
`;

const Component101 = styled.div({
	zIndex: 1,
	top: 1,
	position: 'absolute',
	display: 'block',

	div: {
		zIndex: 2,
		position: 'static',
		top: 2,
		display: 'inline-block',

		span: {
			zIndex: 3,
			top: 3,
			display: 'flex',
			position: 'relative'
		}
	},

	[Container]: {
		zIndex: 4,
		top: 4,
		display: 'inline',
		position: 'fixed'
	}
});

const Component201 = styled.div({
	zIndex: Layers.Foo,
	top: '1px',
	position: 'absolute',
	display: 'block',

	div: {
		zIndex: Layers.Bar,
		position: 'static',
		top: '2px',
		display: 'inline-block',

		span: {
			zIndex: Layers.Baz,
			top: '3px',
			display: 'flex',
			position: 'relative',
		},
	},

	[Container]: {
		zIndex: Layers.Qux,
		top: '4px',
		display: 'inline',
		position: 'fixed',
	},
});
