import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SafetyRule: core.serialization.Schema<serializers.SafetyRule.Raw, ElevenLabs.SafetyRule>;
export declare namespace SafetyRule {
    type Raw = "sexual_minors" | "forget_moderation" | "extremism" | "scam_fraud" | "political" | "self_harm" | "illegal_distribution_medical" | "sexual_adults" | "unknown";
}
