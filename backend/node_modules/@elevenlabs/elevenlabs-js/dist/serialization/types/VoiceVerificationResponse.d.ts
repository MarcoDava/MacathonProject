import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { VerificationAttemptResponse } from "./VerificationAttemptResponse";
export declare const VoiceVerificationResponse: core.serialization.ObjectSchema<serializers.VoiceVerificationResponse.Raw, ElevenLabs.VoiceVerificationResponse>;
export declare namespace VoiceVerificationResponse {
    interface Raw {
        requires_verification: boolean;
        is_verified: boolean;
        verification_failures: string[];
        verification_attempts_count: number;
        language?: string | null;
        verification_attempts?: VerificationAttemptResponse.Raw[] | null;
    }
}
