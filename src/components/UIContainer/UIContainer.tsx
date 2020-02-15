import React, { FC, CSSProperties } from 'react';

import './UIContainer.scss';

interface IProps {
    label?: string;
    style?: CSSProperties;
}

const UIContainer: FC<IProps> = ({ label, children, style }) => {
	return (
		<div className="ui-container" style={style}>
			{label && <label>{label}</label>}
			{children}
		</div>
	);
};

export default UIContainer;
