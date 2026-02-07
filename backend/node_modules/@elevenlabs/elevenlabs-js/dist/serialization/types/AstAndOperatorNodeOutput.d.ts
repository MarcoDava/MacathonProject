import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const AstAndOperatorNodeOutput: core.serialization.ObjectSchema<serializers.AstAndOperatorNodeOutput.Raw, ElevenLabs.AstAndOperatorNodeOutput>;
export declare namespace AstAndOperatorNodeOutput {
    interface Raw {
        children: serializers.AstAndOperatorNodeOutputChildrenItem.Raw[];
    }
}
