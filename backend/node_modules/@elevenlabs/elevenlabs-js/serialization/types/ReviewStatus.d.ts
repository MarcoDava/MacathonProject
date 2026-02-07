import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ReviewStatus: core.serialization.Schema<serializers.ReviewStatus.Raw, ElevenLabs.ReviewStatus>;
export declare namespace ReviewStatus {
    type Raw = "not_requested" | "pending" | "declined" | "allowed" | "allowed_with_changes";
}
