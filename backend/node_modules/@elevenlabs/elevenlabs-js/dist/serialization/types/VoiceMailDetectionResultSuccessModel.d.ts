import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VoiceMailDetectionResultSuccessModel: core.serialization.ObjectSchema<serializers.VoiceMailDetectionResultSuccessModel.Raw, ElevenLabs.VoiceMailDetectionResultSuccessModel>;
export declare namespace VoiceMailDetectionResultSuccessModel {
    interface Raw {
        status?: "success" | null;
        voicemail_message?: string | null;
        reason?: string | null;
    }
}
