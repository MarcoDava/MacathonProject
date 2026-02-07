import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SimilarVoice } from "./SimilarVoice";
export declare const SimilarVoicesForSpeakerResponse: core.serialization.ObjectSchema<serializers.SimilarVoicesForSpeakerResponse.Raw, ElevenLabs.SimilarVoicesForSpeakerResponse>;
export declare namespace SimilarVoicesForSpeakerResponse {
    interface Raw {
        voices: SimilarVoice.Raw[];
    }
}
