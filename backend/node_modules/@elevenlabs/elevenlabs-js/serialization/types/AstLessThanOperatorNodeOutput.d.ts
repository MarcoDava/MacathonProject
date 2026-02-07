import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const AstLessThanOperatorNodeOutput: core.serialization.ObjectSchema<serializers.AstLessThanOperatorNodeOutput.Raw, ElevenLabs.AstLessThanOperatorNodeOutput>;
export declare namespace AstLessThanOperatorNodeOutput {
    interface Raw {
        left: serializers.AstLessThanOperatorNodeOutputLeft.Raw;
        right: serializers.AstLessThanOperatorNodeOutputRight.Raw;
    }
}
