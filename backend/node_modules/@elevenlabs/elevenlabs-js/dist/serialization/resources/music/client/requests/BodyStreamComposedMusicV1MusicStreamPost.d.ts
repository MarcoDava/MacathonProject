import type * as ElevenLabs from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
import { MusicPrompt } from "../../../../types/MusicPrompt";
export declare const BodyStreamComposedMusicV1MusicStreamPost: core.serialization.Schema<serializers.BodyStreamComposedMusicV1MusicStreamPost.Raw, Omit<ElevenLabs.BodyStreamComposedMusicV1MusicStreamPost, "outputFormat">>;
export declare namespace BodyStreamComposedMusicV1MusicStreamPost {
    interface Raw {
        prompt?: string | null;
        composition_plan?: MusicPrompt.Raw | null;
        music_length_ms?: number | null;
        model_id?: "music_v1" | null;
        force_instrumental?: boolean | null;
        store_for_inpainting?: boolean | null;
    }
}
