import React, { FC, CSSProperties } from 'react';
import cn from 'classnames';

import './UIContainer.scss';

type TAlignment = 'left' | 'center' | 'right';

interface IProps {
	label?: string;
	style?: CSSProperties;
	align?: TAlignment;
}

const UIContainer: FC<IProps> = ({
	label,
	children,
	style,
	align = 'left',
}) => {
	return (
		<div className={cn('ui-container', align)} style={style}>
			{label && <label>{label}</label>}
			{children}
		</div>
	);
};

export default UIContainer;
