import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationHistoryMultivoiceMessagePartModel: core.serialization.ObjectSchema<serializers.ConversationHistoryMultivoiceMessagePartModel.Raw, ElevenLabs.ConversationHistoryMultivoiceMessagePartModel>;
export declare namespace ConversationHistoryMultivoiceMessagePartModel {
    interface Raw {
        text: string;
        voice_label?: string | null;
        time_in_call_secs?: number | null;
    }
}
