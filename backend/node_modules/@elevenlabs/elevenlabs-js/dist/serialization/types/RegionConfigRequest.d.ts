import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { TwilioEdgeLocation } from "./TwilioEdgeLocation";
import { TwilioRegionId } from "./TwilioRegionId";
export declare const RegionConfigRequest: core.serialization.ObjectSchema<serializers.RegionConfigRequest.Raw, ElevenLabs.RegionConfigRequest>;
export declare namespace RegionConfigRequest {
    interface Raw {
        region_id: TwilioRegionId.Raw;
        token: string;
        edge_location: TwilioEdgeLocation.Raw;
    }
}
