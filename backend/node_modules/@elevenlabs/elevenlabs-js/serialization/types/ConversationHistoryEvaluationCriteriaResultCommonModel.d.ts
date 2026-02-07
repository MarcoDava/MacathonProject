import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { EvaluationSuccessResult } from "./EvaluationSuccessResult";
export declare const ConversationHistoryEvaluationCriteriaResultCommonModel: core.serialization.ObjectSchema<serializers.ConversationHistoryEvaluationCriteriaResultCommonModel.Raw, ElevenLabs.ConversationHistoryEvaluationCriteriaResultCommonModel>;
export declare namespace ConversationHistoryEvaluationCriteriaResultCommonModel {
    interface Raw {
        criteria_id: string;
        result: EvaluationSuccessResult.Raw;
        rationale: string;
    }
}
