const Component1 = styled.div`
	z-index: 2;
	top: 0;
	${props => props.great && 'color: red'};
	position: absolute;
	display: block;
`;

const Component101 = styled.div(props => ({
	zIndex: 2,
	top: 0,
	...(props.great && { color: 'red' }),
	position: 'absolute',
	display: 'block'
}));

const Component201 = styled.div(props => ({
	zIndex: Layers.Foo,
	top: '0px',
	...(props.great && { color: 'red', }),
	position: 'absolute',
	display: 'block',
}));

