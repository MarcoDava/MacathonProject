import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WorkflowExpressionConditionModelOutputExpression } from "./WorkflowExpressionConditionModelOutputExpression";
export declare const WorkflowExpressionConditionModelOutput: core.serialization.ObjectSchema<serializers.WorkflowExpressionConditionModelOutput.Raw, ElevenLabs.WorkflowExpressionConditionModelOutput>;
export declare namespace WorkflowExpressionConditionModelOutput {
    interface Raw {
        label?: string | null;
        expression: WorkflowExpressionConditionModelOutputExpression.Raw;
    }
}
