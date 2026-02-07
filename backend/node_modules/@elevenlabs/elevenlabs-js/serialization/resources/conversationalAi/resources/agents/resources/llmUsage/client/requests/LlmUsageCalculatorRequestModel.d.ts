import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
export declare const LlmUsageCalculatorRequestModel: core.serialization.Schema<serializers.conversationalAi.agents.LlmUsageCalculatorRequestModel.Raw, ElevenLabs.conversationalAi.agents.LlmUsageCalculatorRequestModel>;
export declare namespace LlmUsageCalculatorRequestModel {
    interface Raw {
        prompt_length?: number | null;
        number_of_pages?: number | null;
        rag_enabled?: boolean | null;
    }
}
