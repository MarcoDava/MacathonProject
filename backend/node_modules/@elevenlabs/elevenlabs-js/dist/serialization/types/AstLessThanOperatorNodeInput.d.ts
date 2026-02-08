import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const AstLessThanOperatorNodeInput: core.serialization.ObjectSchema<serializers.AstLessThanOperatorNodeInput.Raw, ElevenLabs.AstLessThanOperatorNodeInput>;
export declare namespace AstLessThanOperatorNodeInput {
    interface Raw {
        left: serializers.AstLessThanOperatorNodeInputLeft.Raw;
        right: serializers.AstLessThanOperatorNodeInputRight.Raw;
    }
}
