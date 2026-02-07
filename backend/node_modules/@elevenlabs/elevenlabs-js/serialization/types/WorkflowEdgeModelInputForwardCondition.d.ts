import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WorkflowExpressionConditionModelInput } from "./WorkflowExpressionConditionModelInput";
import { WorkflowLlmConditionModelInput } from "./WorkflowLlmConditionModelInput";
import { WorkflowResultConditionModelInput } from "./WorkflowResultConditionModelInput";
import { WorkflowUnconditionalModelInput } from "./WorkflowUnconditionalModelInput";
export declare const WorkflowEdgeModelInputForwardCondition: core.serialization.Schema<serializers.WorkflowEdgeModelInputForwardCondition.Raw, ElevenLabs.WorkflowEdgeModelInputForwardCondition>;
export declare namespace WorkflowEdgeModelInputForwardCondition {
    type Raw = WorkflowEdgeModelInputForwardCondition.Expression | WorkflowEdgeModelInputForwardCondition.Llm | WorkflowEdgeModelInputForwardCondition.Result | WorkflowEdgeModelInputForwardCondition.Unconditional;
    interface Expression extends WorkflowExpressionConditionModelInput.Raw {
        type: "expression";
    }
    interface Llm extends WorkflowLlmConditionModelInput.Raw {
        type: "llm";
    }
    interface Result extends WorkflowResultConditionModelInput.Raw {
        type: "result";
    }
    interface Unconditional extends WorkflowUnconditionalModelInput.Raw {
        type: "unconditional";
    }
}
