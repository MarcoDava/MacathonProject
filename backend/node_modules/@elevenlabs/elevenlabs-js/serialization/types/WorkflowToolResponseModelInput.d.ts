import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const WorkflowToolResponseModelInput: core.serialization.ObjectSchema<serializers.WorkflowToolResponseModelInput.Raw, ElevenLabs.WorkflowToolResponseModelInput>;
export declare namespace WorkflowToolResponseModelInput {
    interface Raw {
        steps?: serializers.WorkflowToolResponseModelInputStepsItem.Raw[] | null;
    }
}
