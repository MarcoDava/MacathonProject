import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SpeakerUpdatedResponse: core.serialization.ObjectSchema<serializers.SpeakerUpdatedResponse.Raw, ElevenLabs.SpeakerUpdatedResponse>;
export declare namespace SpeakerUpdatedResponse {
    interface Raw {
        version: number;
    }
}
