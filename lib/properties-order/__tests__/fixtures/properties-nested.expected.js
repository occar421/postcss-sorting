const Component1 = styled.div`
	position: absolute;
	top: 1px;
	display: block;
	z-index: 1;

	div {
		position: static;
		top: 2px;
		display: inline-block;
		z-index: 2;

		span {
			position: relative;
			top: 3px;
			display: flex;
			z-index: 3;
		}
	}

	${Container} {
		position: fixed;
		top: 4px;
		display: inline;
		z-index: 4;
	}
`;

const Component101 = styled.div({
	position: 'absolute',
	top: 1,
	display: 'block',
	zIndex: 1,

	div: {
		position: 'static',
		top: 2,
		display: 'inline-block',
		zIndex: 2,

		span: {
			position: 'relative',
			top: 3,
			display: 'flex',
			zIndex: 3
		}
	},

	[Container]: {
		position: 'fixed',
		top: 4,
		display: 'inline',
		zIndex: 4
	}
});

const Component201 = styled.div({
	position: 'absolute',
	top: '1px',
	display: 'block',
	zIndex: Layers.Foo,

	div: {
		position: 'static',
		top: '2px',
		display: 'inline-block',
		zIndex: Layers.Bar,

		span: {
			position: 'relative',
			top: '3px',
			display: 'flex',
			zIndex: Layers.Baz,
		},
	},

	[Container]: {
		position: 'fixed',
		top: '4px',
		display: 'inline',
		zIndex: Layers.Qux,
	},
});
