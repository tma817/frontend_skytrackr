// export const seatMap = [
//     {
//         "id": "1",
//         "type": "seatmap",
//         "departure": {
//             "iataCode": "JFK",
//             "terminal": "5",
//             "at": "2026-03-15T08:15:00"
//         },
//         "arrival": {
//             "iataCode": "FLL",
//             "terminal": "3",
//             "at": "2026-03-15T11:25:00"
//         },
//         "carrierCode": "B6",
//         "number": "2201",
//         "operating": {
//             "carrierCode": "B6"
//         },
//         "aircraft": {
//             "code": "320"
//         },
//         "class": "L",
//         "flightOfferId": "5",
//         "segmentId": "7",
//         "decks": [
//             {
//                 "deckType": "MAIN",
//                 "deckConfiguration": {
//                     "width": 7,
//                     "length": 28,
//                     "startSeatRow": 1,
//                     "endSeatRow": 27,
//                     "startWingsX": 8,
//                     "endWingsX": 15,
//                     "startWingsRow": 8,
//                     "endWingsRow": 15,
//                     "exitRowsX": [
//                         10,
//                         11
//                     ]
//                 },
//                 "facilities": [
//                     {
//                         "code": "BK",
//                         "column": "A",
//                         "row": "1",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "code": "BK",
//                         "column": "B",
//                         "row": "1",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "code": "BK",
//                         "column": "C",
//                         "row": "1",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "code": "BK",
//                         "column": "F",
//                         "row": "1",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "code": "BK",
//                         "column": "E",
//                         "row": "1",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "code": "BK",
//                         "column": "D",
//                         "row": "1",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 4
//                         }
//                     }
//                 ],
//                 "seats": [
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "1A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "K",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "1B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "K",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "1C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "K",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "1D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "K",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "1E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "K",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "1F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "K",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "2A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "2B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "2C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "2D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "2E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "2F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "3A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "3B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "3C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "3D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "3E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "3F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "4A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "4B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "4C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "4D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "4E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "4F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "5A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "5B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "5C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "5D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "5E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "5F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "162.80",
//                                     "base": "162.80",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "W",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "A",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "A",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "W",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "W",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "A",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "A",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "W",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "128.60",
//                                     "base": "128.60",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 13,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 13,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 13,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 13,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 13,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "67.00",
//                                     "base": "67.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 13,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "18A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "18B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "18C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "18D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "18E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "18F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 25,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 25,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 25,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 25,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 25,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 25,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 26,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 26,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 26,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 26,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 26,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 26,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "V",
//                             "U",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 27,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "V",
//                             "U",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 27,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "V",
//                             "U",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 27,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 27,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 27,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 27,
//                             "y": 6
//                         }
//                     }
//                 ]
//             }
//         ],
//         "aircraftCabinAmenities": {
//             "power": {
//                 "isChargeable": false,
//                 "powerType": "PLUG_OR_USB_PORT",
//                 "usbType": "USB_A"
//             },
//             "seat": {
//                 "legSpace": 32,
//                 "spaceUnit": "INCHES",
//                 "tilt": "NORMAL",
//                 "medias": [
//                     {
//                         "title": "JetBlue Economy",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B9095%2B0&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F76613915%2D9e45%2D4fd5%2D95a4%2D54a13bb3a4c9%2Flarge%2F32in%5FSeat%2DInfographic%2Epng",
//                         "description": {
//                             "text": "Economy seat with 32\" / 81 cm of seat pitch",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     },
//                     {
//                         "title": "JetBlue Economy",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B9095%2B1&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F76613915%2D9e45%2D4fd5%2D95a4%2D54a13bb3a4c9%2Fsquare%5Fthumb%2F32in%5FSeat%2DInfographic%2Epng",
//                         "description": {
//                             "text": "Economy seat with 32\" / 81 cm of seat pitch",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     },
//                     {
//                         "title": "JetBlue Economy",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B9095%2B2&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F76613915%2D9e45%2D4fd5%2D95a4%2D54a13bb3a4c9%2Flarge%5Fsquare%5Fthumb%2F32in%5FSeat%2DInfographic%2Epng",
//                         "description": {
//                             "text": "Economy seat with 32\" / 81 cm of seat pitch",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     },
//                     {
//                         "title": "JetBlue Even More Space",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B24412%2B3&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2Fc41e62be%2D0ce7%2D444c%2D826b%2D84e215af12a8%2Flarge%2Fextra%2Dlegroom%2Dseat%2Dinformation%2Epng",
//                         "description": {
//                             "text": "Economy seat with extra legroom",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     },
//                     {
//                         "title": "JetBlue Even More Space",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B24412%2B4&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2Fc41e62be%2D0ce7%2D444c%2D826b%2D84e215af12a8%2Fsquare%5Fthumb%2Fextra%2Dlegroom%2Dseat%2Dinformation%2Epng",
//                         "description": {
//                             "text": "Economy seat with extra legroom",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     },
//                     {
//                         "title": "JetBlue Even More Space",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B24412%2B5&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2Fc41e62be%2D0ce7%2D444c%2D826b%2D84e215af12a8%2Flarge%5Fsquare%5Fthumb%2Fextra%2Dlegroom%2Dseat%2Dinformation%2Epng",
//                         "description": {
//                             "text": "Economy seat with extra legroom",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     }
//                 ]
//             },
//             "wifi": {
//                 "isChargeable": false,
//                 "wifiCoverage": "FULL"
//             },
//             "food": {
//                 "isChargeable": true,
//                 "foodType": "FRESH_SNACK"
//             },
//             "beverage": {
//                 "isChargeable": true,
//                 "beverageType": "ALCOHOLIC_AND_NON_ALCOHOLIC"
//             }
//         },
//         "availableSeatsCounters": [
//             {
//                 "travelerId": "1",
//                 "value": 145
//             }
//         ]
//     },
//     {
//         "id": "2",
//         "type": "seatmap",
//         "departure": {
//             "iataCode": "FLL",
//             "terminal": "3",
//             "at": "2026-03-15T12:30:00"
//         },
//         "arrival": {
//             "iataCode": "LAX",
//             "terminal": "1",
//             "at": "2026-03-15T15:25:00"
//         },
//         "carrierCode": "B6",
//         "number": "701",
//         "operating": {
//             "carrierCode": "B6"
//         },
//         "aircraft": {
//             "code": "32S"
//         },
//         "class": "L",
//         "flightOfferId": "5",
//         "segmentId": "8",
//         "decks": [
//             {
//                 "deckType": "MAIN",
//                 "deckConfiguration": {
//                     "width": 7,
//                     "length": 25,
//                     "startSeatRow": 6,
//                     "endSeatRow": 29,
//                     "startWingsX": 4,
//                     "endWingsX": 10,
//                     "startWingsRow": 9,
//                     "endWingsRow": 15,
//                     "exitRowsX": [
//                         1,
//                         13
//                     ]
//                 },
//                 "facilities": [
//                     {
//                         "code": "BK",
//                         "column": "A",
//                         "row": "6",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "code": "BK",
//                         "column": "B",
//                         "row": "6",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "code": "BK",
//                         "column": "C",
//                         "row": "6",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "code": "BK",
//                         "column": "F",
//                         "row": "6",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "code": "BK",
//                         "column": "E",
//                         "row": "6",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "code": "BK",
//                         "column": "D",
//                         "row": "6",
//                         "position": "FRONT",
//                         "coordinates": {
//                             "x": 0,
//                             "y": 4
//                         }
//                     }
//                 ],
//                 "seats": [
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "E",
//                             "K",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "E",
//                             "K",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "E",
//                             "K",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "E",
//                             "K",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "E",
//                             "K",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "6F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "E",
//                             "K",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 1,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "7F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 2,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "8F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 3,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "9F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 4,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "10F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "L",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "217.50",
//                                     "base": "217.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 5,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "11F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "H",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 6,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "12F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 7,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "13F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 8,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "14F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 9,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "15F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 10,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "16F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "O",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "94.40",
//                                     "base": "94.40",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 11,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "17F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 12,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "18A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "W",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "197.00",
//                                     "base": "197.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 13,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "18B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "197.00",
//                                     "base": "197.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 13,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "18C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "A",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "197.00",
//                                     "base": "197.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 13,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "18E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "197.00",
//                                     "base": "197.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 13,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "18F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "W",
//                             "E",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "197.00",
//                                     "base": "197.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 13,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "197.00",
//                                     "base": "197.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "197.00",
//                                     "base": "197.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "197.00",
//                                     "base": "197.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "V",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "197.00",
//                                     "base": "197.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "19F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "L",
//                             "T",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "197.00",
//                                     "base": "197.00",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 14,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "20F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 15,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "21F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 16,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "22F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 17,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "23F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 18,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "24F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "X",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 19,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "25F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 20,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "26F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 21,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27A",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27B",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27C",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27D",
//                         "characteristicsCodes": [
//                             "CH",
//                             "A",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27E",
//                         "characteristicsCodes": [
//                             "CH",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "27F",
//                         "characteristicsCodes": [
//                             "CH",
//                             "W",
//                             "1A_AQC_PREMIUM_SEAT"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE",
//                                 "price": {
//                                     "currency": "CAD",
//                                     "total": "46.50",
//                                     "base": "46.50",
//                                     "taxes": [
//                                         {
//                                             "amount": "0.00",
//                                             "code": "SUPPLIER"
//                                         }
//                                     ]
//                                 }
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 22,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "28A",
//                         "characteristicsCodes": [
//                             "W"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "28B",
//                         "characteristicsCodes": [
//                             "14",
//                             "LS",
//                             "9"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "28C",
//                         "characteristicsCodes": [
//                             "A"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "28D",
//                         "characteristicsCodes": [
//                             "A"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "28E",
//                         "characteristicsCodes": [
//                             "RS",
//                             "14",
//                             "9"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "28F",
//                         "characteristicsCodes": [
//                             "W"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "AVAILABLE"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 23,
//                             "y": 6
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "29A",
//                         "characteristicsCodes": [
//                             "W",
//                             "V",
//                             "U"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 0
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "29B",
//                         "characteristicsCodes": [
//                             "V",
//                             "U"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 1
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "29C",
//                         "characteristicsCodes": [
//                             "A",
//                             "V",
//                             "U"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 2
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "29D",
//                         "characteristicsCodes": [
//                             "A",
//                             "V"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 4
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "29E",
//                         "characteristicsCodes": [
//                             "V"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 5
//                         }
//                     },
//                     {
//                         "cabin": "ECONOMY",
//                         "number": "29F",
//                         "characteristicsCodes": [
//                             "W",
//                             "V"
//                         ],
//                         "travelerPricing": [
//                             {
//                                 "travelerId": "1",
//                                 "seatAvailabilityStatus": "BLOCKED"
//                             }
//                         ],
//                         "coordinates": {
//                             "x": 24,
//                             "y": 6
//                         }
//                     }
//                 ]
//             }
//         ],
//         "aircraftCabinAmenities": {
//             "power": {
//                 "isChargeable": false,
//                 "powerType": "PLUG_OR_USB_PORT",
//                 "usbType": "USB_A"
//             },
//             "seat": {
//                 "legSpace": 33,
//                 "spaceUnit": "INCHES",
//                 "tilt": "NORMAL",
//                 "medias": [
//                     {
//                         "title": "JetBlue Economy",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B9173%2B14&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F55824270%2D35ed%2D462d%2D86d8%2Dbe5e03d3a4f7%2Flarge%2F33in%5FSeat%2DInfographic%2Epng",
//                         "description": {
//                             "text": "Economy seat with 33\" / 84 cm of seat pitch",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     },
//                     {
//                         "title": "JetBlue Economy",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B9173%2B15&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F55824270%2D35ed%2D462d%2D86d8%2Dbe5e03d3a4f7%2Fsquare%5Fthumb%2F33in%5FSeat%2DInfographic%2Epng",
//                         "description": {
//                             "text": "Economy seat with 33\" / 84 cm of seat pitch",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     },
//                     {
//                         "title": "JetBlue Economy",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B9173%2B16&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F55824270%2D35ed%2D462d%2D86d8%2Dbe5e03d3a4f7%2Flarge%5Fsquare%5Fthumb%2F33in%5FSeat%2DInfographic%2Epng",
//                         "description": {
//                             "text": "Economy seat with 33\" / 84 cm of seat pitch",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     },
//                     {
//                         "title": "JetBlue Even More Space",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B24412%2B17&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2Fc41e62be%2D0ce7%2D444c%2D826b%2D84e215af12a8%2Flarge%2Fextra%2Dlegroom%2Dseat%2Dinformation%2Epng",
//                         "description": {
//                             "text": "Economy seat with extra legroom",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     },
//                     {
//                         "title": "JetBlue Even More Space",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B24412%2B18&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2Fc41e62be%2D0ce7%2D444c%2D826b%2D84e215af12a8%2Fsquare%5Fthumb%2Fextra%2Dlegroom%2Dseat%2Dinformation%2Epng",
//                         "description": {
//                             "text": "Economy seat with extra legroom",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     },
//                     {
//                         "title": "JetBlue Even More Space",
//                         "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=%23S7CYAN684%2431PYN1A%246SV%23530%2B24412%2B19&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2Fc41e62be%2D0ce7%2D444c%2D826b%2D84e215af12a8%2Flarge%5Fsquare%5Fthumb%2Fextra%2Dlegroom%2Dseat%2Dinformation%2Epng",
//                         "description": {
//                             "text": "Economy seat with extra legroom",
//                             "lang": "EN"
//                         },
//                         "mediaType": "image"
//                     }
//                 ]
//             },
//             "wifi": {
//                 "isChargeable": false,
//                 "wifiCoverage": "FULL"
//             },
//             "food": {
//                 "isChargeable": true,
//                 "foodType": "MEAL"
//             },
//             "beverage": {
//                 "isChargeable": true,
//                 "beverageType": "ALCOHOLIC_AND_NON_ALCOHOLIC"
//             }
//         },
//         "availableSeatsCounters": [
//             {
//                 "travelerId": "1",
//                 "value": 126
//             }
//         ]
//     }
// ]
export const seatMapMockupData = [ 
    {
      "id": "1",
      "type": "seatmap",
      "departure": {
        "iataCode": "NCE",
        "terminal": "2",
        "at": "2023-08-01T06:45:00"
      },
      "arrival": {
        "iataCode": "ORY",
        "terminal": "2",
        "at": "2023-08-01T08:15:00"
      },
      "carrierCode": "AF",
      "number": "6201",
      "operating": {
        "carrierCode": "AF"
      },
      "aircraft": {
        "code": "320"
      },
      "class": "X",
      "flightOfferId": "1",
      "segmentId": "1",
      "decks": [
        {
          "deckType": "MAIN",
          "deckConfiguration": {
            "width": 7,
            "length": 33,
            "startSeatRow": 1,
            "endSeatRow": 32,
            "startWingsRow": 13,
            "endWingsRow": 13,
            "exitRowsX": [
              12,
              13
            ]
          },
          "facilities": [
            {
              "code": "LA",
              "column": "A",
              "position": "FRONT",
              "coordinates": {
                "x": 0,
                "y": 0
              }
            },
            {
              "code": "G",
              "column": "F",
              "position": "FRONT",
              "coordinates": {
                "x": 0,
                "y": 6
              }
            },
            {
              "code": "G",
              "column": "E",
              "position": "FRONT",
              "coordinates": {
                "x": 0,
                "y": 5
              }
            },
            {
              "code": "G",
              "column": "D",
              "position": "FRONT",
              "coordinates": {
                "x": 0,
                "y": 4
              }
            },
            {
              "code": "CL",
              "column": "A",
              "row": "1",
              "position": "SEAT",
              "coordinates": {
                "x": 1,
                "y": 0
              }
            },
            {
              "code": "CL",
              "column": "B",
              "row": "1",
              "position": "SEAT",
              "coordinates": {
                "x": 1,
                "y": 1
              }
            },
            {
              "code": "SO",
              "column": "E",
              "row": "32",
              "position": "SEAT",
              "coordinates": {
                "x": 31,
                "y": 5
              }
            },
            {
              "code": "SO",
              "column": "F",
              "row": "32",
              "position": "SEAT",
              "coordinates": {
                "x": 31,
                "y": 6
              }
            },
            {
              "code": "LA",
              "column": "A",
              "row": "32",
              "position": "REAR",
              "coordinates": {
                "x": 32,
                "y": 0
              }
            },
            {
              "code": "G",
              "column": "F",
              "row": "32",
              "position": "REAR",
              "coordinates": {
                "x": 32,
                "y": 6
              }
            },
            {
              "code": "G",
              "column": "E",
              "row": "32",
              "position": "REAR",
              "coordinates": {
                "x": 32,
                "y": 5
              }
            },
            {
              "code": "G",
              "column": "D",
              "row": "32",
              "position": "REAR",
              "coordinates": {
                "x": 32,
                "y": 4
              }
            }
          ],
          "seats": [
            {
              "cabin": "ECONOMY",
              "number": "1D",
              "characteristicsCodes": [
                "1B",
                "A",
                "FC",
                "K",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 1,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "1E",
              "characteristicsCodes": [
                "1B",
                "9",
                "FC",
                "K",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 1,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "1F",
              "characteristicsCodes": [
                "1B",
                "FC",
                "K",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 1,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2A",
              "characteristicsCodes": [
                "1B",
                "FC",
                "K",
                "LS",
                "O",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2B",
              "characteristicsCodes": [
                "1B",
                "9",
                "FC",
                "K",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2C",
              "characteristicsCodes": [
                "1B",
                "A",
                "FC",
                "K",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2D",
              "characteristicsCodes": [
                "A",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2E",
              "characteristicsCodes": [
                "9",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2F",
              "characteristicsCodes": [
                "FC",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3A",
              "characteristicsCodes": [
                "FC",
                "LS",
                "O",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3B",
              "characteristicsCodes": [
                "9",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3C",
              "characteristicsCodes": [
                "A",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3D",
              "characteristicsCodes": [
                "A",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3E",
              "characteristicsCodes": [
                "9",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3F",
              "characteristicsCodes": [
                "FC",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4A",
              "characteristicsCodes": [
                "FC",
                "LS",
                "O",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4B",
              "characteristicsCodes": [
                "9",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4C",
              "characteristicsCodes": [
                "A",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4D",
              "characteristicsCodes": [
                "A",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4E",
              "characteristicsCodes": [
                "9",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4F",
              "characteristicsCodes": [
                "FC",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5A",
              "characteristicsCodes": [
                "FC",
                "LS",
                "O",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5B",
              "characteristicsCodes": [
                "9",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5C",
              "characteristicsCodes": [
                "A",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5D",
              "characteristicsCodes": [
                "A",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5E",
              "characteristicsCodes": [
                "9",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5F",
              "characteristicsCodes": [
                "FC",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6A",
              "characteristicsCodes": [
                "FC",
                "LS",
                "O",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6B",
              "characteristicsCodes": [
                "9",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6C",
              "characteristicsCodes": [
                "A",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6D",
              "characteristicsCodes": [
                "A",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6E",
              "characteristicsCodes": [
                "9",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6F",
              "characteristicsCodes": [
                "FC",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7A",
              "characteristicsCodes": [
                "CH",
                "FC",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7B",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7C",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7D",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7E",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7F",
              "characteristicsCodes": [
                "CH",
                "FC",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8A",
              "characteristicsCodes": [
                "CH",
                "FC",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8B",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8C",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8D",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8E",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8F",
              "characteristicsCodes": [
                "CH",
                "FC",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9A",
              "characteristicsCodes": [
                "CH",
                "FC",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9B",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9C",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9D",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9E",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9F",
              "characteristicsCodes": [
                "CH",
                "FC",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10A",
              "characteristicsCodes": [
                "CH",
                "FC",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10B",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10C",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10D",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10E",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10F",
              "characteristicsCodes": [
                "CH",
                "FC",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12A",
              "characteristicsCodes": [
                "1A",
                "1B",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12B",
              "characteristicsCodes": [
                "1A",
                "1B",
                "9",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12C",
              "characteristicsCodes": [
                "1A",
                "1B",
                "A",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12D",
              "characteristicsCodes": [
                "1A",
                "1B",
                "A",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12E",
              "characteristicsCodes": [
                "1A",
                "1B",
                "9",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12F",
              "characteristicsCodes": [
                "1A",
                "1B",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14A",
              "characteristicsCodes": [
                "1A",
                "1B",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14B",
              "characteristicsCodes": [
                "1A",
                "1B",
                "9",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14C",
              "characteristicsCodes": [
                "1A",
                "1B",
                "A",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14D",
              "characteristicsCodes": [
                "1A",
                "1B",
                "A",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14E",
              "characteristicsCodes": [
                "1A",
                "1B",
                "9",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14F",
              "characteristicsCodes": [
                "1A",
                "1B",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20A",
              "characteristicsCodes": [
                "C",
                "CH",
                "LS",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20B",
              "characteristicsCodes": [
                "9",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20C",
              "characteristicsCodes": [
                "A",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21A",
              "characteristicsCodes": [
                "C",
                "CH",
                "LS",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21B",
              "characteristicsCodes": [
                "9",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21C",
              "characteristicsCodes": [
                "A",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22A",
              "characteristicsCodes": [
                "C",
                "CH",
                "LS",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22B",
              "characteristicsCodes": [
                "9",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22C",
              "characteristicsCodes": [
                "A",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23A",
              "characteristicsCodes": [
                "C",
                "CH",
                "LS",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23B",
              "characteristicsCodes": [
                "9",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23C",
              "characteristicsCodes": [
                "A",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "U",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "U",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "U",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "U",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "31A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 30,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "31B",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 30,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "31D",
              "characteristicsCodes": [
                "A",
                "CH",
                "DE",
                "RS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 30,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "31E",
              "characteristicsCodes": [
                "9",
                "CH",
                "DE",
                "RS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 30,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "31F",
              "characteristicsCodes": [
                "CH",
                "DE",
                "RS",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 30,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "32A",
              "characteristicsCodes": [
                "1D",
                "CH",
                "LS",
                "V",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 31,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "32B",
              "characteristicsCodes": [
                "1D",
                "A",
                "CH",
                "LS",
                "V",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 31,
                "y": 1
              }
            }
          ]
        }
      ],
      "aircraftCabinAmenities": {
        "power": {
          "isChargeable": false,
          "powerType": "USB_PORT",
          "usbType": "USB_C"
        },
        "seat": {
          "legSpace": 29,
          "spaceUnit": "INCHES",
          "tilt": "NORMAL",
          "medias": [
            {
              "title": "Comfortable Seats",
              "href": "https://pdt.content.amadeus.com/AncillaryServicesMedia/14223418_395.jpg",
              "description": {
                "text": "Settle in with comfortable seats and an ecoTHREAD blanket made from 100% recycled plastic bottles.",
                "lang": "EN"
              },
              "mediaType": "image"
            },
            {
              "title": "Stay Connected",
              "href": "https://pdt.content.amadeus.com/AncillaryServicesMedia/71344149_DFL.jpg",
              "description": {
                "text": "Stay connected next time you fly. Choose from our great value Wi-Fi plans.",
                "lang": "EN"
              },
              "mediaType": "image"
            },
            {
              "title": "Be Curious",
              "href": "https://pdt.content.amadeus.com/AncillaryServicesMedia/42266150_401.jpg",
              "description": {
                "text": "With special seat,meals, toys, and dedicated children's ice channels, we encourage curious minds and inspire tomorrow's explorers.",
                "lang": "EN"
              },
              "mediaType": "image"
            }
          ]
        },
        "wifi": {
          "isChargeable": true,
          "wifiCoverage": "FULL"
        },
        "entertainment": [
          {
            "isChargeable": false,
            "entertainmentType": "AUDIO_VIDEO_ON_DEMAND"
          },
          {
            "isChargeable": false,
            "entertainmentType": "IP_TV"
          }
        ],
        "food": {
          "isChargeable": false,
          "foodType": "SNACK"
        },
        "beverage": {
          "isChargeable": false,
          "beverageType": "ALCOHOLIC_AND_NON_ALCOHOLIC"
        }
      },
      "availableSeatsCounters": [
        {
          "travelerId": "1",
          "value": 116
        },
        {
          "travelerId": "2",
          "value": 116
        }
      ]
    },
    {
      "id": "2",
      "type": "seatmap",
      "departure": {
        "iataCode": "ORY",
        "terminal": "3",
        "at": "2023-08-18T06:35:00"
      },
      "arrival": {
        "iataCode": "NCE",
        "terminal": "2",
        "at": "2023-08-18T08:00:00"
      },
      "carrierCode": "AF",
      "number": "6200",
      "operating": {
        "carrierCode": "AF"
      },
      "aircraft": {
        "code": "320"
      },
      "class": "X",
      "flightOfferId": "1",
      "segmentId": "4",
      "decks": [
        {
          "deckType": "MAIN",
          "deckConfiguration": {
            "width": 7,
            "length": 33,
            "startSeatRow": 1,
            "endSeatRow": 32,
            "startWingsRow": 13,
            "endWingsRow": 13,
            "exitRowsX": [
              12,
              13
            ]
          },
          "facilities": [
            {
              "code": "LA",
              "column": "A",
              "position": "FRONT",
              "coordinates": {
                "x": 0,
                "y": 0
              }
            },
            {
              "code": "G",
              "column": "F",
              "position": "FRONT",
              "coordinates": {
                "x": 0,
                "y": 6
              }
            },
            {
              "code": "G",
              "column": "E",
              "position": "FRONT",
              "coordinates": {
                "x": 0,
                "y": 5
              }
            },
            {
              "code": "G",
              "column": "D",
              "position": "FRONT",
              "coordinates": {
                "x": 0,
                "y": 4
              }
            },
            {
              "code": "CL",
              "column": "A",
              "row": "1",
              "position": "SEAT",
              "coordinates": {
                "x": 1,
                "y": 0
              }
            },
            {
              "code": "CL",
              "column": "B",
              "row": "1",
              "position": "SEAT",
              "coordinates": {
                "x": 1,
                "y": 1
              }
            },
            {
              "code": "SO",
              "column": "E",
              "row": "32",
              "position": "SEAT",
              "coordinates": {
                "x": 31,
                "y": 5
              }
            },
            {
              "code": "SO",
              "column": "F",
              "row": "32",
              "position": "SEAT",
              "coordinates": {
                "x": 31,
                "y": 6
              }
            },
            {
              "code": "LA",
              "column": "A",
              "row": "32",
              "position": "REAR",
              "coordinates": {
                "x": 32,
                "y": 0
              }
            },
            {
              "code": "G",
              "column": "F",
              "row": "32",
              "position": "REAR",
              "coordinates": {
                "x": 32,
                "y": 6
              }
            },
            {
              "code": "G",
              "column": "E",
              "row": "32",
              "position": "REAR",
              "coordinates": {
                "x": 32,
                "y": 5
              }
            },
            {
              "code": "G",
              "column": "D",
              "row": "32",
              "position": "REAR",
              "coordinates": {
                "x": 32,
                "y": 4
              }
            }
          ],
          "seats": [
            {
              "cabin": "ECONOMY",
              "number": "1D",
              "characteristicsCodes": [
                "1B",
                "A",
                "FC",
                "K",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 1,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "1E",
              "characteristicsCodes": [
                "1B",
                "9",
                "FC",
                "K",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 1,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "1F",
              "characteristicsCodes": [
                "1B",
                "FC",
                "K",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 1,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2A",
              "characteristicsCodes": [
                "1B",
                "FC",
                "K",
                "LS",
                "O",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2B",
              "characteristicsCodes": [
                "1B",
                "9",
                "FC",
                "K",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2C",
              "characteristicsCodes": [
                "1B",
                "A",
                "FC",
                "K",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2D",
              "characteristicsCodes": [
                "A",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2E",
              "characteristicsCodes": [
                "9",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "2F",
              "characteristicsCodes": [
                "FC",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 2,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3A",
              "characteristicsCodes": [
                "FC",
                "LS",
                "O",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3B",
              "characteristicsCodes": [
                "9",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3C",
              "characteristicsCodes": [
                "A",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3D",
              "characteristicsCodes": [
                "A",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3E",
              "characteristicsCodes": [
                "9",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "3F",
              "characteristicsCodes": [
                "FC",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 3,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4A",
              "characteristicsCodes": [
                "FC",
                "LS",
                "O",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4B",
              "characteristicsCodes": [
                "9",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4C",
              "characteristicsCodes": [
                "A",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4D",
              "characteristicsCodes": [
                "A",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4E",
              "characteristicsCodes": [
                "9",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "4F",
              "characteristicsCodes": [
                "FC",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 4,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5A",
              "characteristicsCodes": [
                "FC",
                "LS",
                "O",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5B",
              "characteristicsCodes": [
                "9",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5C",
              "characteristicsCodes": [
                "A",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5D",
              "characteristicsCodes": [
                "A",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5E",
              "characteristicsCodes": [
                "9",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "5F",
              "characteristicsCodes": [
                "FC",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 5,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6A",
              "characteristicsCodes": [
                "FC",
                "LS",
                "O",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6B",
              "characteristicsCodes": [
                "9",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6C",
              "characteristicsCodes": [
                "A",
                "FC",
                "LS",
                "O",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6D",
              "characteristicsCodes": [
                "A",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6E",
              "characteristicsCodes": [
                "9",
                "FC",
                "O",
                "RS",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "6F",
              "characteristicsCodes": [
                "FC",
                "O",
                "RS",
                "W",
                "1"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED"
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED"
                }
              ],
              "coordinates": {
                "x": 6,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7A",
              "characteristicsCodes": [
                "CH",
                "FC",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7B",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7C",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7D",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7E",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "7F",
              "characteristicsCodes": [
                "CH",
                "FC",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 7,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8A",
              "characteristicsCodes": [
                "CH",
                "FC",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8B",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8C",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8D",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8E",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "8F",
              "characteristicsCodes": [
                "CH",
                "FC",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 8,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9A",
              "characteristicsCodes": [
                "CH",
                "FC",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9B",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9C",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9D",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9E",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "9F",
              "characteristicsCodes": [
                "CH",
                "FC",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 9,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10A",
              "characteristicsCodes": [
                "CH",
                "FC",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10B",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10C",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10D",
              "characteristicsCodes": [
                "A",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10E",
              "characteristicsCodes": [
                "9",
                "CH",
                "FC",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "10F",
              "characteristicsCodes": [
                "CH",
                "FC",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 10,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "11F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 11,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12A",
              "characteristicsCodes": [
                "1A",
                "1B",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12B",
              "characteristicsCodes": [
                "1A",
                "1B",
                "9",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12C",
              "characteristicsCodes": [
                "1A",
                "1B",
                "A",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12D",
              "characteristicsCodes": [
                "1A",
                "1B",
                "A",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12E",
              "characteristicsCodes": [
                "1A",
                "1B",
                "9",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "12F",
              "characteristicsCodes": [
                "1A",
                "1B",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 12,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14A",
              "characteristicsCodes": [
                "1A",
                "1B",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14B",
              "characteristicsCodes": [
                "1A",
                "1B",
                "9",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14C",
              "characteristicsCodes": [
                "1A",
                "1B",
                "A",
                "CH",
                "E",
                "IE",
                "L",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14D",
              "characteristicsCodes": [
                "1A",
                "1B",
                "A",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14E",
              "characteristicsCodes": [
                "1A",
                "1B",
                "9",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "14F",
              "characteristicsCodes": [
                "1A",
                "1B",
                "CH",
                "E",
                "IE",
                "L",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "15.00",
                    "base": "15.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 13,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "15F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 14,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "16F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 15,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "17F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 16,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "18F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 17,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "19F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 18,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20A",
              "characteristicsCodes": [
                "C",
                "CH",
                "LS",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20B",
              "characteristicsCodes": [
                "9",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20C",
              "characteristicsCodes": [
                "A",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "20F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 19,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21A",
              "characteristicsCodes": [
                "C",
                "CH",
                "LS",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21B",
              "characteristicsCodes": [
                "9",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21C",
              "characteristicsCodes": [
                "A",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "21F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 20,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22A",
              "characteristicsCodes": [
                "C",
                "CH",
                "LS",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22B",
              "characteristicsCodes": [
                "9",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22C",
              "characteristicsCodes": [
                "A",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "22F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 21,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23A",
              "characteristicsCodes": [
                "C",
                "CH",
                "LS",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23B",
              "characteristicsCodes": [
                "9",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23C",
              "characteristicsCodes": [
                "A",
                "C",
                "CH",
                "LS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "23F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 22,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "U",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "24F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 23,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "U",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "25F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 24,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "U",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "26F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 25,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "U",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "U",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "27F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 26,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "28F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 27,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "29F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 28,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30B",
              "characteristicsCodes": [
                "9",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30C",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 2
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30D",
              "characteristicsCodes": [
                "A",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30E",
              "characteristicsCodes": [
                "9",
                "CH",
                "RS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "30F",
              "characteristicsCodes": [
                "CH",
                "RS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 29,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "31A",
              "characteristicsCodes": [
                "CH",
                "LS",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 30,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "31B",
              "characteristicsCodes": [
                "A",
                "CH",
                "LS",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "AVAILABLE",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 30,
                "y": 1
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "31D",
              "characteristicsCodes": [
                "A",
                "CH",
                "DE",
                "RS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 30,
                "y": 4
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "31E",
              "characteristicsCodes": [
                "9",
                "CH",
                "DE",
                "RS",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 30,
                "y": 5
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "31F",
              "characteristicsCodes": [
                "CH",
                "DE",
                "RS",
                "W",
                "1",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 30,
                "y": 6
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "32A",
              "characteristicsCodes": [
                "1D",
                "CH",
                "LS",
                "V",
                "W",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 31,
                "y": 0
              }
            },
            {
              "cabin": "ECONOMY",
              "number": "32B",
              "characteristicsCodes": [
                "1D",
                "A",
                "CH",
                "LS",
                "V",
                "1A_AQC_PREMIUM_SEAT"
              ],
              "travelerPricing": [
                {
                  "travelerId": "1",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                },
                {
                  "travelerId": "2",
                  "seatAvailabilityStatus": "BLOCKED",
                  "price": {
                    "currency": "EUR",
                    "total": "11.00",
                    "base": "11.00",
                    "taxes": [
                      {
                        "amount": "0.00",
                        "code": "SUPPLIER"
                      }
                    ]
                  }
                }
              ],
              "coordinates": {
                "x": 31,
                "y": 1
              }
            }
          ]
        }
      ],
      "aircraftCabinAmenities": {
        "power": {
          "isChargeable": false,
          "powerType": "USB_PORT",
          "usbType": "USB_C"
        },
        "seat": {
          "legSpace": 29,
          "spaceUnit": "INCHES",
          "tilt": "NORMAL",
          "medias": [
            {
              "title": "Comfortable Seats",
              "href": "https://pdt.content.amadeus.com/AncillaryServicesMedia/14223418_395.jpg",
              "description": {
                "text": "Settle in with comfortable seats and an ecoTHREAD blanket made from 100% recycled plastic bottles.",
                "lang": "EN"
              },
              "mediaType": "image"
            },
            {
              "title": "Stay Connected",
              "href": "https://pdt.content.amadeus.com/AncillaryServicesMedia/71344149_DFL.jpg",
              "description": {
                "text": "Stay connected next time you fly. Choose from our great value Wi-Fi plans.",
                "lang": "EN"
              },
              "mediaType": "image"
            },
            {
              "title": "Be Curious",
              "href": "https://pdt.content.amadeus.com/AncillaryServicesMedia/42266150_401.jpg",
              "description": {
                "text": "With special seat,meals, toys, and dedicated children's ice channels, we encourage curious minds and inspire tomorrow's explorers.",
                "lang": "EN"
              },
              "mediaType": "image"
            }
          ]
        },
        "wifi": {
          "isChargeable": true,
          "wifiCoverage": "FULL"
        },
        "entertainment": [
          {
            "isChargeable": false,
            "entertainmentType": "AUDIO_VIDEO_ON_DEMAND"
          },
          {
            "isChargeable": false,
            "entertainmentType": "IP_TV"
          }
        ],
        "food": {
          "isChargeable": false,
          "foodType": "SNACK"
        },
        "beverage": {
          "isChargeable": false,
          "beverageType": "ALCOHOLIC_AND_NON_ALCOHOLIC"
        }
      },
      "availableSeatsCounters": [
        {
          "travelerId": "1",
          "value": 116
        },
        {
          "travelerId": "2",
          "value": 116
        }
      ]
    }
]