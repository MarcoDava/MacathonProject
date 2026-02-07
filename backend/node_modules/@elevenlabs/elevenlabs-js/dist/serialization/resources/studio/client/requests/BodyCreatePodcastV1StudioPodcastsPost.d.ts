import type * as ElevenLabs from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
import { BodyCreatePodcastV1StudioPodcastsPostApplyTextNormalization } from "../../types/BodyCreatePodcastV1StudioPodcastsPostApplyTextNormalization";
import { BodyCreatePodcastV1StudioPodcastsPostDurationScale } from "../../types/BodyCreatePodcastV1StudioPodcastsPostDurationScale";
import { BodyCreatePodcastV1StudioPodcastsPostMode } from "../../types/BodyCreatePodcastV1StudioPodcastsPostMode";
import { BodyCreatePodcastV1StudioPodcastsPostQualityPreset } from "../../types/BodyCreatePodcastV1StudioPodcastsPostQualityPreset";
import { BodyCreatePodcastV1StudioPodcastsPostSource } from "../../types/BodyCreatePodcastV1StudioPodcastsPostSource";
export declare const BodyCreatePodcastV1StudioPodcastsPost: core.serialization.Schema<serializers.BodyCreatePodcastV1StudioPodcastsPost.Raw, Omit<ElevenLabs.BodyCreatePodcastV1StudioPodcastsPost, "safetyIdentifier">>;
export declare namespace BodyCreatePodcastV1StudioPodcastsPost {
    interface Raw {
        model_id: string;
        mode: BodyCreatePodcastV1StudioPodcastsPostMode.Raw;
        source: BodyCreatePodcastV1StudioPodcastsPostSource.Raw;
        quality_preset?: BodyCreatePodcastV1StudioPodcastsPostQualityPreset.Raw | null;
        duration_scale?: BodyCreatePodcastV1StudioPodcastsPostDurationScale.Raw | null;
        language?: string | null;
        intro?: string | null;
        outro?: string | null;
        instructions_prompt?: string | null;
        highlights?: string[] | null;
        callback_url?: string | null;
        apply_text_normalization?: BodyCreatePodcastV1StudioPodcastsPostApplyTextNormalization.Raw | null;
    }
}
