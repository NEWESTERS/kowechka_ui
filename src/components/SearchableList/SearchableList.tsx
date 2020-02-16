import React, { FC } from 'react';

import { Input } from '../Input';
import { UIContainer } from '../UIContainer';
import { ISearchProps, useSearch } from './searchLogic';
import ItemList, { IProps as IItemListProps } from '../ItemList/ItemList';

type IProps = ISearchProps & IItemListProps;

const SearchableList: FC<IProps> = ({ onItemClick, ...searchProps }) => {
	const { searchString, handleSearch, filteredItems } = useSearch(searchProps);

	return (
		<UIContainer className="searchable-list">
			<Input value={searchString} onChange={handleSearch} />

			<ItemList
				items={filteredItems}
				onItemClick={onItemClick}
				searchString={searchString}
			/>
		</UIContainer>
	);
};

export default SearchableList;
