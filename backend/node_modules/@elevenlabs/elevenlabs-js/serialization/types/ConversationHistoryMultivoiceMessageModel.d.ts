import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationHistoryMultivoiceMessagePartModel } from "./ConversationHistoryMultivoiceMessagePartModel";
export declare const ConversationHistoryMultivoiceMessageModel: core.serialization.ObjectSchema<serializers.ConversationHistoryMultivoiceMessageModel.Raw, ElevenLabs.ConversationHistoryMultivoiceMessageModel>;
export declare namespace ConversationHistoryMultivoiceMessageModel {
    interface Raw {
        parts: ConversationHistoryMultivoiceMessagePartModel.Raw[];
    }
}
