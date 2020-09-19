const Component1 = styled.div`
	z-index: 1;
	top: 1px;
	${props => props.great && 'color: red'};
	position: absolute;
	display: block;

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
`;

const Component2 = styled.div`
	position: absolute;
	top: 1px;
	display: block;
	z-index: 1;

	div {
		z-index: 2;
		${props => props.great && 'color: red'};
		position: static;
		top: 2px;
		display: inline-block;

		span {
			position: relative;
			top: 3px;
			display: flex;
			z-index: 3;
		}
	}
`;

const Component3 = styled.div`
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
			z-index: 3;
			top: 3px;
			display: flex;
			${props => props.great && 'color: red'};
			position: relative;
		}
	}
`;

const Component101 = styled.div(props => ({
	zIndex: 1,
	top: 1,
	...(props.great && { color: 'red' }),
	position: 'absolute',
	display: 'block',

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
	}
}));

const Component102 = styled.div(props => ({
	position: 'absolute',
	top: 1,
	display: 'block',
	zIndex: 1,

	div: {
		zIndex: 2,
		...(props.great && { color: 'red' }),
		position: 'static',
		top: 2,
		display: 'inline-block',

		span: {
			position: 'relative',
			top: 3,
			display: 'flex',
			zIndex: 3
		}
	}
}));

const Component203 = styled.div(props => ({
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
			zIndex: Layers.Baz,
			top: '3px',
			display: 'flex',
			...(props.great && { color: 'red', }),
			position: 'relative',
		},
	},
}));
