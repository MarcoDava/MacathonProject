import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const RecordingResponse: core.serialization.ObjectSchema<serializers.RecordingResponse.Raw, ElevenLabs.RecordingResponse>;
export declare namespace RecordingResponse {
    interface Raw {
        recording_id: string;
        mime_type: string;
        size_bytes: number;
        upload_date_unix: number;
        transcription: string;
    }
}
