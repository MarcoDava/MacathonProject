import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ReviewResponseModelReviewStatus: core.serialization.Schema<serializers.ReviewResponseModelReviewStatus.Raw, ElevenLabs.ReviewResponseModelReviewStatus>;
export declare namespace ReviewResponseModelReviewStatus {
    type Raw = "approved" | "edits_required" | "rejected";
}
