const Component1 = styled.div`
	position: absolute;
	top: 0;
	display: block;
	z-index: 2;
`;

const Component101 = styled.div({
	position: 'absolute',
	top: 0,
	display: 'block',
	zIndex: 2
});

const Component201 = styled.div({
	position: 'absolute',
	top: '0px',
	display: 'block',
	zIndex: Layers.Foo,
});
