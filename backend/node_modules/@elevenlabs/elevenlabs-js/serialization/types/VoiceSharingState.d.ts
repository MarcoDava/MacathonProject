import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VoiceSharingState: core.serialization.Schema<serializers.VoiceSharingState.Raw, ElevenLabs.VoiceSharingState>;
export declare namespace VoiceSharingState {
    type Raw = "enabled" | "disabled" | "copied" | "copied_disabled";
}
