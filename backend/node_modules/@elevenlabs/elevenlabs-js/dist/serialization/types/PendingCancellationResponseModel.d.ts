import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PendingCancellationResponseModel: core.serialization.ObjectSchema<serializers.PendingCancellationResponseModel.Raw, ElevenLabs.PendingCancellationResponseModel>;
export declare namespace PendingCancellationResponseModel {
    interface Raw {
        kind?: "cancellation" | null;
        timestamp_seconds: number;
    }
}
