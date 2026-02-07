import type * as ElevenLabs from "../index";
export interface TestConditionResultCommonModel {
    result: ElevenLabs.EvaluationSuccessResult;
    rationale?: ElevenLabs.TestConditionRationaleCommonModel;
}
