import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const HistoryListRequestSource: core.serialization.Schema<serializers.HistoryListRequestSource.Raw, ElevenLabs.HistoryListRequestSource>;
export declare namespace HistoryListRequestSource {
    type Raw = "TTS" | "STS";
}
