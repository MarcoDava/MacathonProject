import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TwilioRegionId: core.serialization.Schema<serializers.TwilioRegionId.Raw, ElevenLabs.TwilioRegionId>;
export declare namespace TwilioRegionId {
    type Raw = "us1" | "ie1" | "au1";
}
