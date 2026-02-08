import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationFeedbackType: core.serialization.Schema<serializers.ConversationFeedbackType.Raw, ElevenLabs.ConversationFeedbackType>;
export declare namespace ConversationFeedbackType {
    type Raw = "thumbs" | "rating";
}
