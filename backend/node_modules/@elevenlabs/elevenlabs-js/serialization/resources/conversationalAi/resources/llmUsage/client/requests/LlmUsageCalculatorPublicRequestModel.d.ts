import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const LlmUsageCalculatorPublicRequestModel: core.serialization.Schema<serializers.conversationalAi.LlmUsageCalculatorPublicRequestModel.Raw, ElevenLabs.conversationalAi.LlmUsageCalculatorPublicRequestModel>;
export declare namespace LlmUsageCalculatorPublicRequestModel {
    interface Raw {
        prompt_length: number;
        number_of_pages: number;
        rag_enabled: boolean;
    }
}
