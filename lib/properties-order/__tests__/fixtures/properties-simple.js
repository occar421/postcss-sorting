const Component1 = styled.div`
	z-index: 2;
	top: 0;
	position: absolute;
	display: block;
`;

const Component101 = styled.div({
	zIndex: 2,
	top: 0,
	position: 'absolute',
	display: 'block'
});

const Component201 = styled.div({
	zIndex: Layers.Foo,
	top: '0px',
	position: 'absolute',
	display: 'block',
});
