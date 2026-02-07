import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SpeakerCreatedResponse: core.serialization.ObjectSchema<serializers.SpeakerCreatedResponse.Raw, ElevenLabs.SpeakerCreatedResponse>;
export declare namespace SpeakerCreatedResponse {
    interface Raw {
        version: number;
        speaker_id: string;
    }
}
