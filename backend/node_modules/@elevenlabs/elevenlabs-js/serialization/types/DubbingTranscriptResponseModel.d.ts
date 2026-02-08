import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DubbingTranscriptUtterance } from "./DubbingTranscriptUtterance";
export declare const DubbingTranscriptResponseModel: core.serialization.ObjectSchema<serializers.DubbingTranscriptResponseModel.Raw, ElevenLabs.DubbingTranscriptResponseModel>;
export declare namespace DubbingTranscriptResponseModel {
    interface Raw {
        language: string;
        utterances: DubbingTranscriptUtterance.Raw[];
    }
}
