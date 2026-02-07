import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AstStringNodeInput: core.serialization.ObjectSchema<serializers.AstStringNodeInput.Raw, ElevenLabs.AstStringNodeInput>;
export declare namespace AstStringNodeInput {
    interface Raw {
        value: string;
    }
}
