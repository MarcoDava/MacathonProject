import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { PodcastTextSource } from "../../../types/PodcastTextSource";
import { PodcastUrlSource } from "../../../types/PodcastUrlSource";
import { BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem } from "./BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem";
export declare const BodyCreatePodcastV1StudioPodcastsPostSource: core.serialization.Schema<serializers.BodyCreatePodcastV1StudioPodcastsPostSource.Raw, ElevenLabs.BodyCreatePodcastV1StudioPodcastsPostSource>;
export declare namespace BodyCreatePodcastV1StudioPodcastsPostSource {
    type Raw = PodcastTextSource.Raw | PodcastUrlSource.Raw | BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem.Raw[];
}
