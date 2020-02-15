import React, { FC } from 'react';
import cn from 'classnames';

import './Button.scss';

type TButtonType = 'primary' | 'secondary';

interface IProps {
	type?: TButtonType;
	onClick?: () => void;
}

const Button: FC<IProps> = ({ type = 'primary', onClick, children }) => {
	return (
		<button className={cn(type, 'button')} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
