const createExpectedOrder = require('../createExpectedOrder');
const hasTrailingComma = require('../hasTrailingComma');
const isInObjectLiteral = require('../isInObjectLiteral');
const isRuleWithNodes = require('../isRuleWithNodes');
const processLastComments = require('../processLastComments');
const processMostNodes = require('../processMostNodes');
const getContainingNode = require('../getContainingNode');
const sorting = require('../sorting');

module.exports = function order(css, opts) {
	const expectedOrder = createExpectedOrder(opts.order);

	css.walk((input) => {
		const node = getContainingNode(input);

		if (isRuleWithNodes(node)) {
			// Nodes for sorting
			let processed = [];

			// Add indexes to nodes
			node.each((childNode, index) => {
				processed = processMostNodes(childNode, index, expectedOrder, processed);
			});

			// Add last comments in the rule. Need this because last comments are not belonging to anything
			node.each((childNode, index) => {
				processed = processLastComments(childNode, index, processed);
			});

			// Sort declarations saved for sorting
			processed.sort(sorting.sortByIndexes);

			if (isInObjectLiteral(node)) {
				// By setting semicolon with true, trailing comma added for css-in-js object literal syntax
				node.raws.semicolon = hasTrailingComma(node);
			} else {
				// Enforce semicolon for the last node
				node.raws.semicolon = true;
			}

			// Replace rule content with sorted one
			node.removeAll();
			node.append(processed);
		}
	});
};
