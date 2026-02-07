import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const BodyCreatePodcastV1StudioPodcastsPostApplyTextNormalization: core.serialization.Schema<serializers.BodyCreatePodcastV1StudioPodcastsPostApplyTextNormalization.Raw, ElevenLabs.BodyCreatePodcastV1StudioPodcastsPostApplyTextNormalization>;
export declare namespace BodyCreatePodcastV1StudioPodcastsPostApplyTextNormalization {
    type Raw = "auto" | "on" | "off" | "apply_english";
}
