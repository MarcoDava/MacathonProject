import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { PodcastBulletinMode } from "../../../types/PodcastBulletinMode";
import { PodcastConversationMode } from "../../../types/PodcastConversationMode";
export declare const BodyCreatePodcastV1StudioPodcastsPostMode: core.serialization.Schema<serializers.BodyCreatePodcastV1StudioPodcastsPostMode.Raw, ElevenLabs.BodyCreatePodcastV1StudioPodcastsPostMode>;
export declare namespace BodyCreatePodcastV1StudioPodcastsPostMode {
    type Raw = BodyCreatePodcastV1StudioPodcastsPostMode.Conversation | BodyCreatePodcastV1StudioPodcastsPostMode.Bulletin;
    interface Conversation extends PodcastConversationMode.Raw {
        type: "conversation";
    }
    interface Bulletin extends PodcastBulletinMode.Raw {
        type: "bulletin";
    }
}
