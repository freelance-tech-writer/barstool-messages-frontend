/* Utility helper functions */

export function handleErrors(response) {
	if (!response.ok) {
		console.log('Error connecting');
		throw Error(response.statusText);
	}
	return response;
}

export function mutateDate(date) {
	const fancyDate = new Date(date)
	return fancyDate.toString();
}

export function mutateName(name) {
	return name.replace(/\./g, ' ').replace(/[0-9]/g, '');
}
