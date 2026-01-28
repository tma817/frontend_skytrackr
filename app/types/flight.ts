import {
	formatDuration,
	getTotalFlightTime,
	splitAt,
} from "../helpers/helpers";

interface FlightLocation {
	time: string;
	date: string;
	iataCode: string;
	terminal?: string;
}

interface TravelerPricing {
	fareOption: string;
	travelerType: string;
	cabin: string;
	amenities?: any[];
}

interface FlightSegment {
	departure: any;
	arrival: any;
	carrierCode: string;
	flightNumber: string;
	aircraft: string;
	duration: string;
	layover?: string;
}

export interface FlightResult {
	_id?: string;
	id: string;
	search_id?: string;
	airlineName: string;
	airlineLogo: string;
	departure: FlightLocation;
	arrival: FlightLocation;
	originCode?: string;
	destinationCode?: string;
	duration?: string;
	price: number;
	currency: string;
	stops?: string;
	segments: FlightSegment[];
	travelerPricings: TravelerPricing[];
}

export interface ApiFlightSegment {
	departure: {
		iataCode: string;
		terminal?: string;
		at: string;
	};
	arrival: {
		iataCode: string;
		terminal?: string;
		at: string;
	};
	carrierCode: string;
	number: string;
	aircraft: {
		code: string;
	};
	duration: string;
	id: string;
	numberOfStops: number;
}

export interface ApiTravelerPricing {
	travelerId: string;
	travelerType: string;
	fareOption: string;
	cabin?: string;
	amenities?: any[];
	price: {
		currency: string;
		total: string;
		base: string;
	};
	fareDetailsBySegment: {
		segmentId: string;
		cabin: string;
		amenities?: any[];
	}[];
}

type ApiPrice =
	| number
	| {
			total: string;
			currency: string;
	  };

export interface ApiFlightOffer {
	id: string;
	search_id?: string;
	departure?: ApiFlightSegment;
	arrival?: ApiFlightSegment;
	segments: ApiFlightSegment[];
	duration?: string;
	itineraries?: {
		duration: string;
		segments: ApiFlightSegment[];
	}[];
	price: ApiPrice;
	currency?: string;
	travelerPricings: ApiTravelerPricing[];
	airlineName: string;
	airlineLogo: string;
	stops?: string;
	originCode?: string;
	destinationCode?: string;
}

function mapApiSegmentsToFlightSegments(
	segments: ApiFlightSegment[],
): FlightSegment[] {
	return segments.map((segment, idx) => {
		const departure = {
			iataCode: segment.departure.iataCode,
			...(segment.departure.terminal ? { terminal: segment.departure.terminal } : {}),
			at: segment.departure.at,
			...splitAt(segment.departure.at),
		};

		const arrival = {
			iataCode: segment.arrival.iataCode,
			...(segment.arrival.terminal ? { terminal: segment.arrival.terminal } : {}),
			at: segment.arrival.at,
			...splitAt(segment.arrival.at),
		};

		let layover: string | undefined = undefined;
		if (idx < segments.length - 1) {
			const nextDepartureAt = new Date(segments[idx + 1].departure.at);
			const arrivalAt = new Date(segment.arrival.at);
			const diffMs = nextDepartureAt.getTime() - arrivalAt.getTime();
			const hours = Math.floor(diffMs / (1000 * 60 * 60));
			const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
			layover = `${hours > 0 ? hours + "h " : ""}${minutes}m`;
		}

		return {
			departure,
			arrival,
			carrierCode: segment.carrierCode,
			flightNumber: segment.number,
			aircraft: segment.aircraft.code ?? segment.aircraft,
			duration: formatDuration(segment.duration),
			layover,
		};
	});
}

function mapApiTravelerPricing(pricing: ApiTravelerPricing): TravelerPricing {
	return {
		fareOption: pricing.fareOption,
		travelerType: pricing.travelerType,
		cabin: pricing.fareDetailsBySegment?.[0]?.cabin ?? pricing.cabin,
		amenities: pricing.fareDetailsBySegment?.[0].amenities ?? pricing.amenities,
	};
}

export function mapFlightOfferToFlightResult(f: ApiFlightOffer): FlightResult {
	const itinerary = f.itineraries?.[0];
	let segments = f.segments;
	if (itinerary?.segments) {
		segments = itinerary.segments;
	}

	const stops = segments.length > 1 ? `${segments.length} stops` : "1 stop";
	const first = segments[0];
	const last = segments[segments.length - 1];

	const currency = typeof f.price === "number" ? f.currency : f.price.currency;

	if (!currency) {
		throw new Error("Currency missing in API response");
	}

	return {
		id: f.id,
		search_id: f.search_id,
		airlineName: f.airlineName,
		airlineLogo: f.airlineLogo,
		departure: {
			iataCode: first.departure.iataCode,
			terminal: first.departure.terminal,
			...splitAt(first.departure.at),
		},
		arrival: {
			iataCode: last.arrival.iataCode,
			terminal: last.arrival.terminal,
			...splitAt(last.arrival.at),
		},
		price: typeof f.price === "number" ? f.price : Number(f.price.total),
		currency: currency,
		segments: mapApiSegmentsToFlightSegments(segments),
		duration: itinerary ? formatDuration(itinerary.duration) : f.duration,
		travelerPricings: f.travelerPricings.map(mapApiTravelerPricing),
		stops: stops,
		originCode: f.originCode,
		destinationCode: f.destinationCode,
	};
}
