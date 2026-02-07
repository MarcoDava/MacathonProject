import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BodyGenerateARandomVoiceV1VoiceGenerationGenerateVoicePostAge } from "./BodyGenerateARandomVoiceV1VoiceGenerationGenerateVoicePostAge";
import { BodyGenerateARandomVoiceV1VoiceGenerationGenerateVoicePostGender } from "./BodyGenerateARandomVoiceV1VoiceGenerationGenerateVoicePostGender";
export declare const GenerateVoiceRequest: core.serialization.ObjectSchema<serializers.GenerateVoiceRequest.Raw, ElevenLabs.GenerateVoiceRequest>;
export declare namespace GenerateVoiceRequest {
    interface Raw {
        gender: BodyGenerateARandomVoiceV1VoiceGenerationGenerateVoicePostGender.Raw;
        accent: string;
        age: BodyGenerateARandomVoiceV1VoiceGenerationGenerateVoicePostAge.Raw;
        accent_strength: number;
        text: string;
    }
}
