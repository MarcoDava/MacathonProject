import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DialogueInput: core.serialization.ObjectSchema<serializers.DialogueInput.Raw, ElevenLabs.DialogueInput>;
export declare namespace DialogueInput {
    interface Raw {
        text: string;
        voice_id: string;
    }
}
