import { useEffect, useRef } from 'react';

/**
 * Хук, позволяющий подписаться на клики вне элемента
 * @param elementRef отслеживаемый элемент
 * @param onClick обработчик события
 *
 * @returns функция подписки, возвращающая функцию отписки
 */
export function useClickOutsideListener(
	elementRef: React.MutableRefObject<HTMLElement | null>,
	onClick: () => void
) {
	// Обработчик события оборачивается в ref-контейнер
	const onClickRef = useRef(onClick),
		unsubscribeRef = useRef(() => {});

	useEffect(() => {
		// Актуализация значения в контейнере при изменении
		onClickRef.current = onClick;
	}, [onClick]);

	function handleOutsidePopupClick(event: MouseEvent) {
		if (
			elementRef.current &&
			!elementRef.current.contains(event.target as Node)
		) {
			// Обработчик события всегда актуален, тк находится в контейнере
			onClickRef.current();
		}
	}

	// Функция подписки
	function subscribe() {
		document.addEventListener('click', handleOutsidePopupClick, true);

		// Функция отписки
		unsubscribeRef.current = () => {
			document.removeEventListener('click', handleOutsidePopupClick, true);
		};

		return unsubscribeRef.current;
	}

	// При размонтировании компонента происходит отписка
	useEffect(() => unsubscribeRef.current, []);

	return subscribe;
}
