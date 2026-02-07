import type * as ElevenLabs from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
export declare const DownloadHistoryRequest: core.serialization.Schema<serializers.DownloadHistoryRequest.Raw, ElevenLabs.DownloadHistoryRequest>;
export declare namespace DownloadHistoryRequest {
    interface Raw {
        history_item_ids: string[];
        output_format?: string | null;
    }
}
