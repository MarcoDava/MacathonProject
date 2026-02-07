import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DynamicVariableAssignment: core.serialization.ObjectSchema<serializers.DynamicVariableAssignment.Raw, ElevenLabs.DynamicVariableAssignment>;
export declare namespace DynamicVariableAssignment {
    interface Raw {
        source?: "response" | null;
        dynamic_variable: string;
        value_path: string;
    }
}
