import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const AstGreaterThanOrEqualsOperatorNodeOutput: core.serialization.ObjectSchema<serializers.AstGreaterThanOrEqualsOperatorNodeOutput.Raw, ElevenLabs.AstGreaterThanOrEqualsOperatorNodeOutput>;
export declare namespace AstGreaterThanOrEqualsOperatorNodeOutput {
    interface Raw {
        left: serializers.AstGreaterThanOrEqualsOperatorNodeOutputLeft.Raw;
        right: serializers.AstGreaterThanOrEqualsOperatorNodeOutputRight.Raw;
    }
}
