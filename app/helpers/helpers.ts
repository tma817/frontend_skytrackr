import { ApiFlightSegment } from "../types/flight";

export function toTitleCase(str: string) {
	return str
		.toLowerCase()
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

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

export function getTotalFlightTime(segments: ApiFlightSegment[]) {
	if (!segments.length) return "0h 0m";

	const firstDepartureAt = segments[0]?.departure?.at;
	const lastArrivalAt = segments[segments.length - 1]?.arrival?.at;

	if (!firstDepartureAt || !lastArrivalAt) return "0h 0m";

	const firstDeparture = new Date(firstDepartureAt);
	const lastArrival = new Date(lastArrivalAt);

	if (isNaN(firstDeparture.getTime()) || isNaN(lastArrival.getTime()))
		return "0h 0m";

	const minDiff = lastArrival.getTime() - firstDeparture.getTime();
	const totalMinutes = Math.floor(minDiff / (1000 * 60));
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;

	return `${hours}h ${minutes}m`;
}
