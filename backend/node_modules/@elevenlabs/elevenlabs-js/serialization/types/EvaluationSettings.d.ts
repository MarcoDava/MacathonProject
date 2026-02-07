import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PromptEvaluationCriteria } from "./PromptEvaluationCriteria";
export declare const EvaluationSettings: core.serialization.ObjectSchema<serializers.EvaluationSettings.Raw, ElevenLabs.EvaluationSettings>;
export declare namespace EvaluationSettings {
    interface Raw {
        criteria?: PromptEvaluationCriteria.Raw[] | null;
    }
}
