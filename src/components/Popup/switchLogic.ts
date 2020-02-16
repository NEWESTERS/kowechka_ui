import { useState, useEffect } from 'react';
import { isNil } from 'ramda';

import { AllOrNothing } from '../../typeHelpers';

export type ISwitchProps = AllOrNothing<{
	open: boolean;
	onOpen: () => void;
	onClose: () => void;
}>;

export function useSwitch(props: ISwitchProps) {
	const { open, onClose, onOpen } = props;

	const [localOpen, setLocalOpen] = useState(false);

	useEffect(() => {
		if (!isNil(open)) {
			setLocalOpen(open);
		}
	}, [open]);

	const handleOpen = () => {
		if (isNil(onOpen)) {
			setLocalOpen(true);
		} else {
			onOpen();
		}
	};

	const handleClose = () => {
		if (isNil(onClose)) {
			setLocalOpen(false);
		} else {
			onClose();
		}
	};

	return {
		open: localOpen,
		handleOpen,
		handleClose,
	};
}
