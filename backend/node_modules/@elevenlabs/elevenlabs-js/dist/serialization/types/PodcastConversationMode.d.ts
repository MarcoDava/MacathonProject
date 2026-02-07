import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PodcastConversationModeData } from "./PodcastConversationModeData";
export declare const PodcastConversationMode: core.serialization.ObjectSchema<serializers.PodcastConversationMode.Raw, ElevenLabs.PodcastConversationMode>;
export declare namespace PodcastConversationMode {
    interface Raw {
        conversation: PodcastConversationModeData.Raw;
    }
}
