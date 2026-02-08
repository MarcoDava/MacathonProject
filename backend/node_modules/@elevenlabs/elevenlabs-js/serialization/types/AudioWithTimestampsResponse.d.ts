import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CharacterAlignmentResponseModel } from "./CharacterAlignmentResponseModel";
export declare const AudioWithTimestampsResponse: core.serialization.ObjectSchema<serializers.AudioWithTimestampsResponse.Raw, ElevenLabs.AudioWithTimestampsResponse>;
export declare namespace AudioWithTimestampsResponse {
    interface Raw {
        audio_base64: string;
        alignment?: CharacterAlignmentResponseModel.Raw | null;
        normalized_alignment?: CharacterAlignmentResponseModel.Raw | null;
    }
}
