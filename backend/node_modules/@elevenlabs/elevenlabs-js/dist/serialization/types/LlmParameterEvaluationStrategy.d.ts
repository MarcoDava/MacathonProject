import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LlmParameterEvaluationStrategy: core.serialization.ObjectSchema<serializers.LlmParameterEvaluationStrategy.Raw, ElevenLabs.LlmParameterEvaluationStrategy>;
export declare namespace LlmParameterEvaluationStrategy {
    interface Raw {
        description: string;
    }
}
