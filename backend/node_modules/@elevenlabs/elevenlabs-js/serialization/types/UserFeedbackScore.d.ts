import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UserFeedbackScore: core.serialization.Schema<serializers.UserFeedbackScore.Raw, ElevenLabs.UserFeedbackScore>;
export declare namespace UserFeedbackScore {
    type Raw = "like" | "dislike";
}
