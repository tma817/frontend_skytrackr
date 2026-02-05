export function splitAt(at: string) {
	const [date, timeFull] = at.split("T");
	return {
		date,
		time: timeFull.slice(0, 5),
	};
}

export function formatDuration(iso: string) {
	const hours = iso.match(/(\d+)H/)?.[1] ?? "0";
	const minutes = iso.match(/(\d+)M/)?.[1] ?? "0";
	return `${hours}h ${minutes}m`;
}
