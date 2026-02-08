import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AstllmNodeOutput: core.serialization.ObjectSchema<serializers.AstllmNodeOutput.Raw, ElevenLabs.AstllmNodeOutput>;
export declare namespace AstllmNodeOutput {
    interface Raw {
        prompt: string;
    }
}
