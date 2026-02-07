import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const AstGreaterThanOperatorNodeOutput: core.serialization.ObjectSchema<serializers.AstGreaterThanOperatorNodeOutput.Raw, ElevenLabs.AstGreaterThanOperatorNodeOutput>;
export declare namespace AstGreaterThanOperatorNodeOutput {
    interface Raw {
        left: serializers.AstGreaterThanOperatorNodeOutputLeft.Raw;
        right: serializers.AstGreaterThanOperatorNodeOutputRight.Raw;
    }
}
