import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AstNumberNodeOutput: core.serialization.ObjectSchema<serializers.AstNumberNodeOutput.Raw, ElevenLabs.AstNumberNodeOutput>;
export declare namespace AstNumberNodeOutput {
    interface Raw {
        value: number;
    }
}
