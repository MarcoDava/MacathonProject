import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { RecordingResponse } from "./RecordingResponse";
export declare const VerificationAttemptResponse: core.serialization.ObjectSchema<serializers.VerificationAttemptResponse.Raw, ElevenLabs.VerificationAttemptResponse>;
export declare namespace VerificationAttemptResponse {
    interface Raw {
        text: string;
        date_unix: number;
        accepted: boolean;
        similarity: number;
        levenshtein_distance: number;
        recording?: RecordingResponse.Raw | null;
    }
}
