import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BodyGenerateARandomVoiceV1VoiceGenerationGenerateVoicePostAge: core.serialization.Schema<serializers.BodyGenerateARandomVoiceV1VoiceGenerationGenerateVoicePostAge.Raw, ElevenLabs.BodyGenerateARandomVoiceV1VoiceGenerationGenerateVoicePostAge>;
export declare namespace BodyGenerateARandomVoiceV1VoiceGenerationGenerateVoicePostAge {
    type Raw = "young" | "middle_aged" | "old";
}
