import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DeleteHistoryItemResponse: core.serialization.ObjectSchema<serializers.DeleteHistoryItemResponse.Raw, ElevenLabs.DeleteHistoryItemResponse>;
export declare namespace DeleteHistoryItemResponse {
    interface Raw {
        status: string;
    }
}
