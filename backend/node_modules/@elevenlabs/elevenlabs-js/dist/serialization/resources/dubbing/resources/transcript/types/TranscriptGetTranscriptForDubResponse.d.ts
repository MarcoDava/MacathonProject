import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
import { DubbingTranscriptResponseModel } from "../../../../../types/DubbingTranscriptResponseModel";
export declare const TranscriptGetTranscriptForDubResponse: core.serialization.Schema<serializers.dubbing.TranscriptGetTranscriptForDubResponse.Raw, ElevenLabs.dubbing.TranscriptGetTranscriptForDubResponse>;
export declare namespace TranscriptGetTranscriptForDubResponse {
    type Raw = DubbingTranscriptResponseModel.Raw | string;
}
