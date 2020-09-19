const Component1 = styled.div`
	z-index: 1;
	top: 1px;
	${props => props.great && 'color: red'};
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
`;

const Component2 = styled.div`
	z-index: 1;
	top: 1px;
	position: absolute;
	display: block;

	div {
		z-index: 2;
		${props => props.great && 'color: red'};
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
`;

const Component3 = styled.div`
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
	}
}));

const Component102 = styled.div(props => ({
	zIndex: 1,
	top: 1,
	position: 'absolute',
	display: 'block',

	div: {
		zIndex: 2,
		...(props.great && { color: 'red' }),
		position: 'static',
		top: 2,
		display: 'inline-block',

		span: {
			zIndex: 3,
			top: 3,
			display: 'flex',
			position: 'relative'
		}
	}
}));

const Component203 = styled.div(props => ({
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
			...(props.great && { color: 'red', }),
			position: 'relative',
		},
	},
}));
