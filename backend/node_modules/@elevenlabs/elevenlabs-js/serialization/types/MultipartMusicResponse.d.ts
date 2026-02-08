import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DetailedMusicResponse } from "./DetailedMusicResponse";
export declare const MultipartMusicResponse: core.serialization.ObjectSchema<serializers.MultipartMusicResponse.Raw, ElevenLabs.MultipartMusicResponse>;
export declare namespace MultipartMusicResponse {
    interface Raw {
        metadata: DetailedMusicResponse.Raw;
        audio: string;
    }
}
