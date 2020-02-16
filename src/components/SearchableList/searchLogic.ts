import { useState, useEffect } from 'react';
import { isNil, propSatisfies } from 'ramda';

import { AllOrNothing, IDictionaryItem } from '../../typeHelpers';
import { searchBy } from '../../helpers';

export type ISearchProps = AllOrNothing<{
	onSearch: (searchString: string) => void;
	searchString: string;
}> & {
	items: IDictionaryItem[];
};

export function useSearch({ searchString, onSearch, items }: ISearchProps) {
	const [localSearchString, setLocalSearchString] = useState('');

	useEffect(() => {
		if (!isNil(searchString)) {
			setLocalSearchString(searchString);
		}
	}, [searchString]);

	const handleSearch = (searchString: string) => {
		if (isNil(onSearch)) {
			setLocalSearchString(searchString);
		} else {
			onSearch(searchString);
		}
	};

	const filteredItems = items.filter(
		propSatisfies(searchBy(localSearchString), 'text')
	);

	return {
		searchString: localSearchString,
		handleSearch,
		filteredItems,
	};
}
