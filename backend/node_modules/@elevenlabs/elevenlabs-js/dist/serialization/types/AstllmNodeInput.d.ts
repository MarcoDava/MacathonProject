import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AstllmNodeInput: core.serialization.ObjectSchema<serializers.AstllmNodeInput.Raw, ElevenLabs.AstllmNodeInput>;
export declare namespace AstllmNodeInput {
    interface Raw {
        prompt: string;
    }
}
