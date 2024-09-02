import { useEffect } from "react";
export function useScrollToSection() {
	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const element = document.getElementById(hash.substring(1).toLocaleLowerCase());
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, []);
}
