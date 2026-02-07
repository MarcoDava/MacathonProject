import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const FeedbackItem: core.serialization.ObjectSchema<serializers.FeedbackItem.Raw, ElevenLabs.FeedbackItem>;
export declare namespace FeedbackItem {
    interface Raw {
        thumbs_up: boolean;
        feedback: string;
        emotions: boolean;
        inaccurate_clone: boolean;
        glitches: boolean;
        audio_quality: boolean;
        other: boolean;
        review_status?: string | null;
    }
}
