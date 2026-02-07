import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const HistoryListRequestSortDirection: core.serialization.Schema<serializers.HistoryListRequestSortDirection.Raw, ElevenLabs.HistoryListRequestSortDirection>;
export declare namespace HistoryListRequestSortDirection {
    type Raw = "asc" | "desc";
}
