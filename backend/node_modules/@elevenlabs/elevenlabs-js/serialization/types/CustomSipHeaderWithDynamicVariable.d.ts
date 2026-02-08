import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CustomSipHeaderWithDynamicVariable: core.serialization.ObjectSchema<serializers.CustomSipHeaderWithDynamicVariable.Raw, ElevenLabs.CustomSipHeaderWithDynamicVariable>;
export declare namespace CustomSipHeaderWithDynamicVariable {
    interface Raw {
        key: string;
        value: string;
    }
}
