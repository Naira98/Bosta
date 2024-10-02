export interface Shipment {
  provider: string;
  CurrentStaus: State;
  promiseDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: State[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: Day[];
}

export interface Error {
  error: string;
  status: string;
}

interface State {
  state: string;
  timestamp: string;
  hub?: string;
}

interface Day {
  dayDate: string;
  dayName: string;
}

// {
//     "provider": "Bosta",
//     "CurrentStatus": {
//         "state": "DELIVERED",
//         "timestamp": "2024-05-19T13:58:44.866Z"
//     },
//     "PromisedDate": "2024-05-21T20:59:59.999Z",
//     "TrackingNumber": "84043113",
//     "TrackingURL": "bosta.co/tracking-shipment/?track_num=84043113",
//     "SupportPhoneNumbers": [
//         "19043"
//     ],
//     "TransitEvents": [
//         {
//             "state": "TICKET_CREATED",
//             "timestamp": "2024-05-19T12:39:17.729Z"
//         },
//         {
//             "state": "PACKAGE_RECEIVED",
//             "timestamp": "2024-05-19T12:42:34.477Z",
//             "hub": "El-Mansoura Hub"
//         },
//         {
//             "state": "OUT_FOR_DELIVERY",
//             "timestamp": "2024-05-19T12:42:57.625Z"
//         },
//         {
//             "state": "DELIVERED",
//             "timestamp": "2024-05-19T13:58:44.866Z"
//         }
//     ],
//     "CreateDate": "2024-05-19T12:39:17.828Z",
//     "isEditableShipment": false,
//     "nextWorkingDay": [
//         {
//             "dayDate": "2024-05-22",
//             "dayName": "Wednesday"
//         }
//     ]
// }

/* {
    "provider": "Bosta",
    "CurrentStatus": {
        "state": "CANCELLED",
        "timestamp": "2024-05-20T13:52:51.630Z"
    },
    "PromisedDate": "2024-05-21T20:59:59.999Z",
    "TrackingNumber": "3468570",
    "TrackingURL": "bosta.co/tracking-shipment/?track_num=3468570",
    "SupportPhoneNumbers": [
        "19043"
    ],
    "TransitEvents": [
        {
            "state": "TICKET_CREATED",
            "timestamp": "2024-05-20T09:53:09.809Z"
        },
        {
            "state": "NOT_YET_SHIPPED",
            "timestamp": "2024-05-20T10:20:40.643Z"
        },
        {
            "state": "AVAILABLE_FOR_PICKUP",
            "timestamp": "2024-05-20T10:20:40.767Z"
        },
        {
            "state": "WAITING_FOR_CUSTOMER_ACTION",
            "timestamp": "2024-05-20T11:46:29.350Z",
            "reason": "Cancellation - The customer refuses to give the shipment to the star"
        },
        {
            "state": "TICKET_CREATED",
            "timestamp": "2024-05-20T13:52:51.457Z"
        },
        {
            "state": "CANCELLED",
            "timestamp": "2024-05-20T13:52:51.630Z"
        }
    ],
    "CreateDate": "2024-05-20T09:53:09.866Z",
    "isEditableShipment": false
} */

/* {
    "provider": "Bosta",
    "CurrentStatus": {
        "state": "DELIVERED_TO_SENDER",
        "timestamp": "2024-05-30T07:58:57.160Z"
    },
    "PromisedDate": "2024-05-23T20:59:59.999Z",
    "TrackingNumber": "40106705",
    "TrackingURL": "bosta.co/tracking-shipment/?track_num=40106705",
    "SupportPhoneNumbers": [
        "19043"
    ],
    "TransitEvents": [
        {
            "state": "TICKET_CREATED",
            "timestamp": "2024-05-19T15:28:14.783Z"
        },
        {
            "state": "PACKAGE_RECEIVED",
            "timestamp": "2024-05-19T18:33:29.948Z",
            "hub": "Cairo Sorting Facility"
        },
        {
            "state": "IN_TRANSIT",
            "timestamp": "2024-05-20T01:04:47.580Z"
        },
        {
            "state": "PACKAGE_RECEIVED",
            "timestamp": "2024-05-20T05:51:15.083Z",
            "hub": "Beni Suef Hub"
        },
        {
            "state": "DELIVERY_FAILED",
            "timestamp": "2024-05-20T07:28:09.100Z",
            "reason": "Uncovered Zone"
        },
        {
            "state": "PACKAGE_RECEIVED",
            "timestamp": "2024-05-21T05:40:14.395Z"
        },
        {
            "state": "IN_TRANSIT",
            "timestamp": "2024-05-21T09:00:11.648Z"
        },
        {
            "state": "PACKAGE_RECEIVED",
            "timestamp": "2024-05-21T16:22:57.626Z",
            "hub": "Cairo Sorting Facility"
        },
        {
            "state": "IN_TRANSIT",
            "timestamp": "2024-05-22T01:47:29.070Z"
        },
        {
            "state": "PACKAGE_RECEIVED",
            "timestamp": "2024-05-22T05:39:20.086Z",
            "hub": "FM & Reverse Hub"
        },
        {
            "state": "NOT_YET_SHIPPED",
            "timestamp": "2024-05-22T16:25:37.144Z"
        },
        {
            "state": "PACKAGE_RECEIVED",
            "timestamp": "2024-05-25T17:50:57.692Z",
            "hub": "FM & Reverse Hub"
        },
        {
            "state": "DELIVERED_TO_SENDER",
            "timestamp": "2024-05-30T07:58:57.160Z"
        }
    ],
    "CreateDate": "2024-05-19T15:28:15.150Z",
    "isEditableShipment": false,
    "nextWorkingDay": [
        {
            "dayDate": "2024-05-25",
            "dayName": "Saturday"
        }
    ]
} */

// {
//     "error": "Invalid tracking number!",
//     "status": "Not Found."
// }
