import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PendingCancellationResponseModel } from "./PendingCancellationResponseModel";
import { PendingSubscriptionSwitchResponseModel } from "./PendingSubscriptionSwitchResponseModel";
export declare const ExtendedSubscriptionResponseModelPendingChange: core.serialization.Schema<serializers.ExtendedSubscriptionResponseModelPendingChange.Raw, ElevenLabs.ExtendedSubscriptionResponseModelPendingChange>;
export declare namespace ExtendedSubscriptionResponseModelPendingChange {
    type Raw = PendingSubscriptionSwitchResponseModel.Raw | PendingCancellationResponseModel.Raw;
}
