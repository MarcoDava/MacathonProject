import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const AstNotEqualsOperatorNodeOutput: core.serialization.ObjectSchema<serializers.AstNotEqualsOperatorNodeOutput.Raw, ElevenLabs.AstNotEqualsOperatorNodeOutput>;
export declare namespace AstNotEqualsOperatorNodeOutput {
    interface Raw {
        left: serializers.AstNotEqualsOperatorNodeOutputLeft.Raw;
        right: serializers.AstNotEqualsOperatorNodeOutputRight.Raw;
    }
}
