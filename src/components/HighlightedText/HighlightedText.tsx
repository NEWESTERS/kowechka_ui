import React, { FC } from 'react';
import { isEmpty } from 'ramda';

import './HighlightedText.scss';

interface IProps {
	text: string;
	hightlightedText: string;
}

const HighlightedText: FC<IProps> = ({ text, hightlightedText }) => {
	const matchStartIndex = text
			.toLowerCase()
			.search(hightlightedText.toLowerCase()),
		matchEndIndex = matchStartIndex + hightlightedText.length;

	if (isEmpty(hightlightedText) || matchStartIndex === -1) {
		return <span>{text}</span>;
	}

	return (
		<span className="text">
			<span>{text.slice(0, matchStartIndex)}</span>
			<span className="highlight">
				{text.slice(matchStartIndex, matchEndIndex)}
			</span>
			<span>{text.slice(matchEndIndex)}</span>
		</span>
	);
};

export default HighlightedText;
