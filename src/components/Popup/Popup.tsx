import React, { FC, ReactElement, useRef, useEffect } from 'react';
import cn from 'classnames';

import { ISwitchProps, useSwitch } from './switchLogic';
import { useClickOutsideListener } from '../../hooks/useClickOutside';
import './Popup.scss';

type IProps = ISwitchProps & {
	className?: string;
	trigger: ReactElement;
};

const Popup: FC<IProps> = props => {
	const { className, trigger, children, ...switchProps } = props,
		{ open, handleOpen, handleClose } = useSwitch(switchProps),
		popupRef = useRef<HTMLDivElement>(null),
		unsubscribeRef = useRef(() => {}),
		subscribe = useClickOutsideListener(popupRef, handleClose);

	useEffect(() => {
		if (open) {
			unsubscribeRef.current = subscribe();
		} else {
			unsubscribeRef.current();
		}
	}, [open]);

	const handleClick = () => (open ? handleClose() : handleOpen());

	return (
		<div ref={popupRef} className={cn('popup-container')} onClick={handleClick}>
			{trigger}

			<div
				className={cn({ open }, 'popup-content', className)}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default Popup;
