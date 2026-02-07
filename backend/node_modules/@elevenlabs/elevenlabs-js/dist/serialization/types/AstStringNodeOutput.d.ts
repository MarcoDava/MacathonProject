import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AstStringNodeOutput: core.serialization.ObjectSchema<serializers.AstStringNodeOutput.Raw, ElevenLabs.AstStringNodeOutput>;
export declare namespace AstStringNodeOutput {
    interface Raw {
        value: string;
    }
}
