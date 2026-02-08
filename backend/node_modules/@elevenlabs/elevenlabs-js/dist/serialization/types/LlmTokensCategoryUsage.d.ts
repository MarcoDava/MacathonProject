import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LlmTokensCategoryUsage: core.serialization.ObjectSchema<serializers.LlmTokensCategoryUsage.Raw, ElevenLabs.LlmTokensCategoryUsage>;
export declare namespace LlmTokensCategoryUsage {
    interface Raw {
        tokens?: number | null;
        price?: number | null;
    }
}
