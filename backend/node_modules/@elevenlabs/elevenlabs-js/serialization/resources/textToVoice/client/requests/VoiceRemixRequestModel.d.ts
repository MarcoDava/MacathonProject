import type * as ElevenLabs from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
export declare const VoiceRemixRequestModel: core.serialization.Schema<serializers.VoiceRemixRequestModel.Raw, Omit<ElevenLabs.VoiceRemixRequestModel, "outputFormat">>;
export declare namespace VoiceRemixRequestModel {
    interface Raw {
        voice_description: string;
        text?: string | null;
        auto_generate_text?: boolean | null;
        loudness?: number | null;
        seed?: number | null;
        guidance_scale?: number | null;
        stream_previews?: boolean | null;
        remixing_session_id?: string | null;
        remixing_session_iteration_id?: string | null;
        prompt_strength?: number | null;
    }
}
