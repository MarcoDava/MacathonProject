import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SpeakerSeparationResponseModelStatus: core.serialization.Schema<serializers.SpeakerSeparationResponseModelStatus.Raw, ElevenLabs.SpeakerSeparationResponseModelStatus>;
export declare namespace SpeakerSeparationResponseModelStatus {
    type Raw = "not_started" | "pending" | "completed" | "failed";
}
