import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WorkflowToolLocator: core.serialization.ObjectSchema<serializers.WorkflowToolLocator.Raw, ElevenLabs.WorkflowToolLocator>;
export declare namespace WorkflowToolLocator {
    interface Raw {
        tool_id: string;
    }
}
