import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const EvaluationSuccessResult: core.serialization.Schema<serializers.EvaluationSuccessResult.Raw, ElevenLabs.EvaluationSuccessResult>;
export declare namespace EvaluationSuccessResult {
    type Raw = "success" | "failure" | "unknown";
}
