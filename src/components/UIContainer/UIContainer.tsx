import React, { FC, CSSProperties } from 'react';
import cn from 'classnames';

import './UIContainer.scss';

type TAlignment = 'left' | 'center' | 'right';

interface IProps {
	label?: string;
	style?: CSSProperties;
	align?: TAlignment;
	className?: string;
}

const UIContainer: FC<IProps> = props => {
	const { label, children, style, align = 'left', className } = props;

	return (
		<div className={cn(className, 'ui-container', align)} style={style}>
			{label && <label>{label}</label>}
			{children}
		</div>
	);
};

export default UIContainer;
