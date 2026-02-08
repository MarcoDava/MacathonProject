import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const AstOrOperatorNodeOutput: core.serialization.ObjectSchema<serializers.AstOrOperatorNodeOutput.Raw, ElevenLabs.AstOrOperatorNodeOutput>;
export declare namespace AstOrOperatorNodeOutput {
    interface Raw {
        children: serializers.AstOrOperatorNodeOutputChildrenItem.Raw[];
    }
}
