import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AstDynamicVariableNodeOutput: core.serialization.ObjectSchema<serializers.AstDynamicVariableNodeOutput.Raw, ElevenLabs.AstDynamicVariableNodeOutput>;
export declare namespace AstDynamicVariableNodeOutput {
    interface Raw {
        name: string;
    }
}
