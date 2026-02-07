import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DynamicVariablesConfigWorkflowOverrideDynamicVariablePlaceholdersValue } from "./DynamicVariablesConfigWorkflowOverrideDynamicVariablePlaceholdersValue";
export declare const DynamicVariablesConfigWorkflowOverride: core.serialization.ObjectSchema<serializers.DynamicVariablesConfigWorkflowOverride.Raw, ElevenLabs.DynamicVariablesConfigWorkflowOverride>;
export declare namespace DynamicVariablesConfigWorkflowOverride {
    interface Raw {
        dynamic_variable_placeholders?: Record<string, DynamicVariablesConfigWorkflowOverrideDynamicVariablePlaceholdersValue.Raw | null | undefined> | null;
    }
}
