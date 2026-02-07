import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DynamicVariablesConfigDynamicVariablePlaceholdersValue } from "./DynamicVariablesConfigDynamicVariablePlaceholdersValue";
export declare const DynamicVariablesConfig: core.serialization.ObjectSchema<serializers.DynamicVariablesConfig.Raw, ElevenLabs.DynamicVariablesConfig>;
export declare namespace DynamicVariablesConfig {
    interface Raw {
        dynamic_variable_placeholders?: Record<string, DynamicVariablesConfigDynamicVariablePlaceholdersValue.Raw> | null;
    }
}
