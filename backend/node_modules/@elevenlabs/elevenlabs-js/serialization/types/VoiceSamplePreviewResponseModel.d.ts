import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VoiceSamplePreviewResponseModel: core.serialization.ObjectSchema<serializers.VoiceSamplePreviewResponseModel.Raw, ElevenLabs.VoiceSamplePreviewResponseModel>;
export declare namespace VoiceSamplePreviewResponseModel {
    interface Raw {
        audio_base_64: string;
        voice_id: string;
        sample_id: string;
        media_type: string;
        duration_secs?: number | null;
    }
}
