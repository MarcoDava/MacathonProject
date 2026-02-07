import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PodcastConversationModeData: core.serialization.ObjectSchema<serializers.PodcastConversationModeData.Raw, ElevenLabs.PodcastConversationModeData>;
export declare namespace PodcastConversationModeData {
    interface Raw {
        host_voice_id: string;
        guest_voice_id: string;
    }
}
