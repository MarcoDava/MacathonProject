import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TelephonyProvider: core.serialization.Schema<serializers.TelephonyProvider.Raw, ElevenLabs.TelephonyProvider>;
export declare namespace TelephonyProvider {
    type Raw = "twilio" | "sip_trunk";
}
