import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ReviewResponseModelRejectReasonsItem: core.serialization.Schema<serializers.ReviewResponseModelRejectReasonsItem.Raw, ElevenLabs.ReviewResponseModelRejectReasonsItem>;
export declare namespace ReviewResponseModelRejectReasonsItem {
    type Raw = "lacks_structure" | "doesnt_open" | "not_literary_work" | "language_not_supported" | "too_short" | "duplicate" | "promotional" | "formatting_issues" | "low_quality" | "metadata_incomplete" | "metadata_inaccurate" | "typos" | "review_error" | "spam" | "legal_violation" | "content_policy" | "public_domain" | "other";
}
