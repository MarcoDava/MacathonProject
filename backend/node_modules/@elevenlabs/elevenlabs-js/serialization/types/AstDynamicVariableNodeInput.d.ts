import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AstDynamicVariableNodeInput: core.serialization.ObjectSchema<serializers.AstDynamicVariableNodeInput.Raw, ElevenLabs.AstDynamicVariableNodeInput>;
export declare namespace AstDynamicVariableNodeInput {
    interface Raw {
        name: string;
    }
}
