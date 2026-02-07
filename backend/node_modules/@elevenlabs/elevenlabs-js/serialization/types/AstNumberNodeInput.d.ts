import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AstNumberNodeInput: core.serialization.ObjectSchema<serializers.AstNumberNodeInput.Raw, ElevenLabs.AstNumberNodeInput>;
export declare namespace AstNumberNodeInput {
    interface Raw {
        value: number;
    }
}
