import React, { FunctionComponent } from 'react';
import { UIContainer } from '../src/components/UIContainer';
import TabFilter from '../src/components/TabFilter';

interface OwnProps {
}

type Props = OwnProps;

const filters = [
	{
		title: 'первый',
		value: 'first',
	},
	{
		title: 'второй',
		value: 'second',
	},
	{
		title: 'третий',
		value: 'third',
	},
	{
		title: 'четвертый',
		value: 'fourth',
	},
];

export default {
	title: 'Tab filter',
};

export const TabFilterStory: FunctionComponent<Props> = (props) => {

	return (
		<UIContainer>
			<TabFilter filters={filters}/>
		</UIContainer>
	);
};

