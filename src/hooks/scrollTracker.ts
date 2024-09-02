import { useState, useEffect, useCallback } from 'react';

export function useScrollTracker() {
	const [prevScroll, setPrevScroll] = useState<number>(0);
	const [currentScroll, setCurrentScroll] = useState<number>(0);

	const handleScroll = useCallback(() => {
		const position = window.scrollY;
		setPrevScroll(currentScroll);
		setCurrentScroll(position);
	}, [currentScroll]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	return { prevScroll, currentScroll };
}
