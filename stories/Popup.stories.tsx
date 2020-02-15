import React, { useState } from 'react';

import { Popup } from '../src/components/Popup';
import { Button } from '../src/components/Button';
import { UIContainer } from '../src/components/UIContainer';
import { Field } from '../src/components/Input';

export default {
	title: 'Popup',
};

export const ButtonStory = () => {
	return (
		<UIContainer style={{ width: 200 }} align="center">
			<Popup trigger={<Button type="primary">Основная кнопка</Button>}>
				<UIContainer label="Попап" style={{ width: 100 }}>
					<Button type="secondary">ОК</Button>
				</UIContainer>
			</Popup>
		</UIContainer>
	);
};
