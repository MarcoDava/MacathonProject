import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AstBooleanNodeInput: core.serialization.ObjectSchema<serializers.AstBooleanNodeInput.Raw, ElevenLabs.AstBooleanNodeInput>;
export declare namespace AstBooleanNodeInput {
    interface Raw {
        value: boolean;
    }
}
