import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const GetConversationResponseModelStatus: core.serialization.Schema<serializers.GetConversationResponseModelStatus.Raw, ElevenLabs.GetConversationResponseModelStatus>;
export declare namespace GetConversationResponseModelStatus {
    type Raw = "initiated" | "in-progress" | "processing" | "done" | "failed";
}
