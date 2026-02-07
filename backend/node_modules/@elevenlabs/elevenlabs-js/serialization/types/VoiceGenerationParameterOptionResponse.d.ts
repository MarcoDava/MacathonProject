import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VoiceGenerationParameterOptionResponse: core.serialization.ObjectSchema<serializers.VoiceGenerationParameterOptionResponse.Raw, ElevenLabs.VoiceGenerationParameterOptionResponse>;
export declare namespace VoiceGenerationParameterOptionResponse {
    interface Raw {
        name: string;
        code: string;
    }
}
