import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const BodyCreatePodcastV1StudioPodcastsPostQualityPreset: core.serialization.Schema<serializers.BodyCreatePodcastV1StudioPodcastsPostQualityPreset.Raw, ElevenLabs.BodyCreatePodcastV1StudioPodcastsPostQualityPreset>;
export declare namespace BodyCreatePodcastV1StudioPodcastsPostQualityPreset {
    type Raw = "standard" | "high" | "highest" | "ultra" | "ultra_lossless";
}
