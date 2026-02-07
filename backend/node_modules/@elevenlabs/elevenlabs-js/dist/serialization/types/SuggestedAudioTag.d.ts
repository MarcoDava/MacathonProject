import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SuggestedAudioTag: core.serialization.ObjectSchema<serializers.SuggestedAudioTag.Raw, ElevenLabs.SuggestedAudioTag>;
export declare namespace SuggestedAudioTag {
    interface Raw {
        tag: string;
        description?: string | null;
    }
}
