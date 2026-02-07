import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { MusicPrompt } from "../../../../../../types/MusicPrompt";
export declare const BodyGenerateCompositionPlanV1MusicPlanPost: core.serialization.Schema<serializers.music.BodyGenerateCompositionPlanV1MusicPlanPost.Raw, ElevenLabs.music.BodyGenerateCompositionPlanV1MusicPlanPost>;
export declare namespace BodyGenerateCompositionPlanV1MusicPlanPost {
    interface Raw {
        prompt: string;
        music_length_ms?: number | null;
        source_composition_plan?: MusicPrompt.Raw | null;
        model_id?: "music_v1" | null;
    }
}
