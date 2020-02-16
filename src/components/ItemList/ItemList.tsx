import React, { FC } from 'react';
import { isNil } from 'ramda';
import cn from 'classnames';

import { IDictionaryItem, TDictionaryItemKey } from '../../typeHelpers';
import { HighlightedText } from '../HighlightedText';
import './ItemList.scss';

export interface IProps {
	items: IDictionaryItem[];
	onItemClick?: (key: TDictionaryItemKey) => void;
	searchString?: string;
}

const ItemList: FC<IProps> = ({ items, onItemClick, searchString }) => {
	const clickable = !isNil(onItemClick);

	const createClickHandler = (key: TDictionaryItemKey) => {
		if (!isNil(onItemClick)) {
			return () => onItemClick(key);
		} else {
			return undefined;
		}
	};

	const renderItem = !isNil(searchString)
		? (text: string) => (
				<HighlightedText text={text} hightlightedText={searchString} />
		  )
		: (text: string) => text;

	return (
		<div className={cn({ clickable }, 'item-list')}>
			{items.map(({ key, text }) => (
				<div
					key={key}
					className="item-list-item"
					onClick={createClickHandler(key)}
				>
					{renderItem(text)}
				</div>
			))}
		</div>
	);
};

export default ItemList;
