import { useState, useEffect } from 'react';

export function useScrollDetector() {
	const [isScrolling, setIsScrolling] = useState(false);

	//@ts-ignore
	let scrollTimeout = null;

	useEffect(() => {
		const handleScrollStart = () => {
			if (!isScrolling) {
				setIsScrolling(true);
			}

			//@ts-ignore
			if (scrollTimeout) {
				clearTimeout(scrollTimeout);
			}

			scrollTimeout = setTimeout(() => {
				setIsScrolling(false);
			}, 500);
		};

		window.addEventListener('scroll', handleScrollStart);

		return () => {
			window.removeEventListener('scroll', handleScrollStart);
			//@ts-ignore
			if (scrollTimeout) {
				clearTimeout(scrollTimeout);
			}
		};
	}, [isScrolling]);

	return isScrolling
}
