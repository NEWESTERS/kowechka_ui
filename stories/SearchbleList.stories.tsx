import React, { useState } from 'react';

import { SearchableList } from '../src/components';

export default {
	title: 'Searchable List',
};

const items = [
	{ key: 'A', text: 'Вариант номер раз' },
	{ key: 'B', text: 'Вариант номер два' },
	{ key: 'C', text: 'Вариант номер три' },
	{ key: 'D', text: 'Вариант номер четыре' },
	{ key: 'E', text: 'Вариант номер пять' },
	{ key: 'F', text: 'Вариант номер шесть' },
];

export const SearchableListStory = () => {
	return <SearchableList items={items} />;
};
