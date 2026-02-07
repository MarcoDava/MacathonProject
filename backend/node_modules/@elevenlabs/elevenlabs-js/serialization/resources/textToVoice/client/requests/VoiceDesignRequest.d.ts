import type * as ElevenLabs from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
export declare const VoiceDesignRequest: core.serialization.Schema<serializers.VoiceDesignRequest.Raw, Omit<ElevenLabs.VoiceDesignRequest, "outputFormat">>;
export declare namespace VoiceDesignRequest {
    interface Raw {
        voice_description: string;
        text?: string | null;
        auto_generate_text?: boolean | null;
        loudness?: number | null;
        quality?: number | null;
        seed?: number | null;
        guidance_scale?: number | null;
        should_enhance?: boolean | null;
    }
}
