import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AstBooleanNodeOutput: core.serialization.ObjectSchema<serializers.AstBooleanNodeOutput.Raw, ElevenLabs.AstBooleanNodeOutput>;
export declare namespace AstBooleanNodeOutput {
    interface Raw {
        value: boolean;
    }
}
