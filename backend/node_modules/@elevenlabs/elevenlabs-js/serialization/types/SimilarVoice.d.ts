import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SimilarVoiceCategory } from "./SimilarVoiceCategory";
export declare const SimilarVoice: core.serialization.ObjectSchema<serializers.SimilarVoice.Raw, ElevenLabs.SimilarVoice>;
export declare namespace SimilarVoice {
    interface Raw {
        voice_id: string;
        name: string;
        category: SimilarVoiceCategory.Raw;
        description?: string | null;
        preview_url?: string | null;
    }
}
