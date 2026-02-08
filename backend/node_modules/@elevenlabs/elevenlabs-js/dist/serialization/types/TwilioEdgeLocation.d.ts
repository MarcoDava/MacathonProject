import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TwilioEdgeLocation: core.serialization.Schema<serializers.TwilioEdgeLocation.Raw, ElevenLabs.TwilioEdgeLocation>;
export declare namespace TwilioEdgeLocation {
    type Raw = "ashburn" | "dublin" | "frankfurt" | "sao-paulo" | "singapore" | "sydney" | "tokyo" | "umatilla" | "roaming";
}
