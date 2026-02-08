import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const AstLessThanOrEqualsOperatorNodeOutput: core.serialization.ObjectSchema<serializers.AstLessThanOrEqualsOperatorNodeOutput.Raw, ElevenLabs.AstLessThanOrEqualsOperatorNodeOutput>;
export declare namespace AstLessThanOrEqualsOperatorNodeOutput {
    interface Raw {
        left: serializers.AstLessThanOrEqualsOperatorNodeOutputLeft.Raw;
        right: serializers.AstLessThanOrEqualsOperatorNodeOutputRight.Raw;
    }
}
