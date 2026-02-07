import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { PodcastTextSource } from "../../../types/PodcastTextSource";
import { PodcastUrlSource } from "../../../types/PodcastUrlSource";
export declare const BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem: core.serialization.Schema<serializers.BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem.Raw, ElevenLabs.BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem>;
export declare namespace BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem {
    type Raw = BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem.Text | BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem.Url;
    interface Text extends PodcastTextSource.Raw {
        type: "text";
    }
    interface Url extends PodcastUrlSource.Raw {
        type: "url";
    }
}
