import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const RegexParameterEvaluationStrategy: core.serialization.ObjectSchema<serializers.RegexParameterEvaluationStrategy.Raw, ElevenLabs.RegexParameterEvaluationStrategy>;
export declare namespace RegexParameterEvaluationStrategy {
    interface Raw {
        pattern: string;
    }
}
