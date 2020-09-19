module.exports = function isInObjectLiteral(node) {
	const styleObjectNode = node.raws.node;

	if (!styleObjectNode) {
		return false;
	}

	const type = styleObjectNode.type;

	return type === 'ObjectExpression' || type === 'ObjectProperty';
};
