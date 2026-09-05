export type AppViewMode = 'website' | 'mobile_app' | 'authority_command';

export type MobileTab = 'radar' | 'preparedness' | 'dossier' | 'safe_zones' | 'profile' | 'sms_gateway' | 'route_compare' | 'live_guidance' | 'sos' | 'recovery';

export type OperatingMode = 'peacetime' | 'drill' | 'emergency';

export interface AccessibilityProfile {
  wheelchairRequired?: boolean;
  electricityRequired?: boolean; // Oxygen concentrator or medical device
  mobilityImpaired?: boolean;
  stepFreeOnly?: boolean;
  visualAssistance?: boolean;
  auditoryAlerts?: boolean;
  wheelchairAccessible?: boolean;
  avoidSteepSlopes?: boolean;
  medicalPriority?: boolean;
  audioHapticGuidance?: boolean;
}

export interface ArchitectureDecisionRecord {
  id: string;
  title: string;
  status: string;
  context: string;
  decision: string;
  consequences: string;
}


export interface ShelterFacility {
  id: string;
  name: string;
  icon: string;
  available: boolean;
  statusText: string;
}

export interface ShelterData {
  id: string;
  name: string;
  sector: string;
  distanceKm: number;
  walkTimeMins: number;
  totalCapacity: number;
  occupiedCount: number;
  occupancyPct: number;
  availableSpaces: number;
  arrivalRatePerMin: number;
  expectedFullMins: number;
  wheelchairBedsLeft: number;
  elevationMsl: string;
  roadStatus: string;
  hasWheelchairRamp: boolean;
  hasMedicalGenerator: boolean;
  hasDoctorsOnDuty: boolean;
  visitorPositivePct: number;
  facilities: ShelterFacility[];
  groundUpdates: {
    timeAgo: string;
    text: string;
  }[];
  volunteerHomes: {
    name: string;
    spots: number;
    distance: string;
    features: string[];
    isVerified: boolean;
  }[];
}

export interface HazardReport {
  id: string;
  reportNumber: string;
  title: string;
  locationName: string;
  coordinates: [number, number];
  edgeId: number;
  reportedMinsAgo: number;
  severity: 'ACTIVE_FLOOD' | 'ROAD_BLOCKED' | 'DEBRIS' | 'WARNING';
  waterDepthCm: number;
  passableForCars: boolean;
  communityConfirmationPct: number;
  neighborsConfirmed: number;
  iotSensorDepthCm: number;
  culvertNode: string;
  rescueAlertSent: boolean;
  imageUrl: string;
  photoVerified: boolean;
  detourName: string;
  detourAddedMins: number;
  detourSafeUsersCount: number;
  authorityReviewStatus: 'UNDER_REVIEW' | 'ENFORCED' | 'DISMISSED';
}

export interface RouteOption {
  id: string;
  name: string;
  corridorName: string;
  travelTimeMins: number;
  distanceKm: number;
  elevationGainM: number;
  status: 'RECOMMENDED' | 'HAZARD_BLOCKED';
  groundStatus: 'High Ground' | 'Flooded Ahead';
  isSafe: boolean;
  description: string;
  hazardDepthCm?: number;
  wheelchairAccessible: boolean;
}

export interface GoBagItem {
  id: string;
  name: string;
  category: string;
  packed: boolean;
  essential: boolean;
  note: string;
}
