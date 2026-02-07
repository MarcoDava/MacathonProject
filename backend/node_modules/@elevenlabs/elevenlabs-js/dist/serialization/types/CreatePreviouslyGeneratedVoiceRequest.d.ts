import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatePreviouslyGeneratedVoiceRequest: core.serialization.ObjectSchema<serializers.CreatePreviouslyGeneratedVoiceRequest.Raw, ElevenLabs.CreatePreviouslyGeneratedVoiceRequest>;
export declare namespace CreatePreviouslyGeneratedVoiceRequest {
    interface Raw {
        voice_name: string;
        voice_description: string;
        generated_voice_id: string;
        played_not_selected_voice_ids?: string[] | null;
        labels?: Record<string, string | null | undefined> | null;
    }
}
