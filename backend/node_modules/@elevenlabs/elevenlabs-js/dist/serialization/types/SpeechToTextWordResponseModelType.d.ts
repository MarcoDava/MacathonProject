import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SpeechToTextWordResponseModelType: core.serialization.Schema<serializers.SpeechToTextWordResponseModelType.Raw, ElevenLabs.SpeechToTextWordResponseModelType>;
export declare namespace SpeechToTextWordResponseModelType {
    type Raw = "word" | "spacing" | "audio_event";
}
