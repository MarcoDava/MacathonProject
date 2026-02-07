import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CharacterAlignmentResponseModel } from "./CharacterAlignmentResponseModel";
export declare const StreamingAudioChunkWithTimestampsResponse: core.serialization.ObjectSchema<serializers.StreamingAudioChunkWithTimestampsResponse.Raw, ElevenLabs.StreamingAudioChunkWithTimestampsResponse>;
export declare namespace StreamingAudioChunkWithTimestampsResponse {
    interface Raw {
        audio_base64: string;
        alignment?: CharacterAlignmentResponseModel.Raw | null;
        normalized_alignment?: CharacterAlignmentResponseModel.Raw | null;
    }
}
