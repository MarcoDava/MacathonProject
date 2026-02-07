import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const CreatePvcVoiceRequest: core.serialization.Schema<serializers.voices.CreatePvcVoiceRequest.Raw, ElevenLabs.voices.CreatePvcVoiceRequest>;
export declare namespace CreatePvcVoiceRequest {
    interface Raw {
        name: string;
        language: string;
        description?: string | null;
        labels?: Record<string, string | null | undefined> | null;
    }
}
