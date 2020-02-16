export function searchBy(searchString: string) {
	const lowerCaseSearchString = searchString.toLowerCase();

	return (value: string) => value.toLowerCase().includes(lowerCaseSearchString);
}
