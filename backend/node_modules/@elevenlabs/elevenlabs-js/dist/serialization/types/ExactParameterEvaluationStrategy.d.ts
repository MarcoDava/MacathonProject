import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ExactParameterEvaluationStrategy: core.serialization.ObjectSchema<serializers.ExactParameterEvaluationStrategy.Raw, ElevenLabs.ExactParameterEvaluationStrategy>;
export declare namespace ExactParameterEvaluationStrategy {
    interface Raw {
        expected_value: string;
    }
}
