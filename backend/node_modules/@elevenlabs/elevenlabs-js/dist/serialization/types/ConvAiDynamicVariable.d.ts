import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConvAiDynamicVariable: core.serialization.ObjectSchema<serializers.ConvAiDynamicVariable.Raw, ElevenLabs.ConvAiDynamicVariable>;
export declare namespace ConvAiDynamicVariable {
    interface Raw {
        variable_name: string;
    }
}
