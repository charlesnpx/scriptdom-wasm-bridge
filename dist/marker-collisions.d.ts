export type MarkerTemplate = {
    markerPrefix: string;
    markerSuffix: string;
};
export declare function collectReservedMarkerIndexes(sql: string, markerPrefix: string, markerSuffix?: string): Set<number>;
export declare function nextAvailableMarkerIndex(startIndex: number, reservedIndexes: Set<number>, context: string): number;
export declare function createMarker(marker: MarkerTemplate, index: number, context: string): string;
export declare function assertCollisionPrefix(markerPrefix: string, context: string): void;
