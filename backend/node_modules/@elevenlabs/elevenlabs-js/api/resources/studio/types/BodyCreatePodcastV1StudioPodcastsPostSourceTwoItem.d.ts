import type * as ElevenLabs from "../../../index";
export type BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem = ElevenLabs.BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem.Text | ElevenLabs.BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem.Url;
export declare namespace BodyCreatePodcastV1StudioPodcastsPostSourceTwoItem {
    interface Text extends ElevenLabs.PodcastTextSource {
        type: "text";
    }
    interface Url extends ElevenLabs.PodcastUrlSource {
        type: "url";
    }
}
