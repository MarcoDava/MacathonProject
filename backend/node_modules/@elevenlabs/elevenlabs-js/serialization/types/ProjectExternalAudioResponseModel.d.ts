import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectExternalAudioResponseModel: core.serialization.ObjectSchema<serializers.ProjectExternalAudioResponseModel.Raw, ElevenLabs.ProjectExternalAudioResponseModel>;
export declare namespace ProjectExternalAudioResponseModel {
    interface Raw {
        external_audio_id: string;
        filename: string;
        signed_url: string;
        offset_ms: number;
        duration_ms: number;
        start_time_ms: number;
        end_time_ms: number;
        order: string;
        track_id: string;
        created_at_ms: number;
        updated_at_ms: number;
        volume_gain_db?: number | null;
        muted?: boolean | null;
        fade_in_ms?: number | null;
        fade_out_ms?: number | null;
        source_external_audio_id?: string | null;
        source_asset_id?: string | null;
        pending_block_ids: string[];
        import_speech_progress?: number | null;
        speech_imported?: boolean | null;
        current_snapshot_id?: string | null;
    }
}
