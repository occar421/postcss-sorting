module.exports = function hasTrailingComma(node) {
	const styleObjectNode = node.raws.node;

	if (!styleObjectNode) {
		return false;
	}

	switch (styleObjectNode.type) {
		case 'ObjectExpression':
			return !!styleObjectNode.extra && !!styleObjectNode.extra.trailingComma;
		case 'ObjectProperty':
			return !!styleObjectNode.value.extra && !!styleObjectNode.value.extra.trailingComma;
		default:
			return false;
	}
};
