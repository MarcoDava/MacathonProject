import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const VoicesUpdateRequestLabels: core.serialization.Schema<serializers.VoicesUpdateRequestLabels.Raw, ElevenLabs.VoicesUpdateRequestLabels>;
export declare namespace VoicesUpdateRequestLabels {
    type Raw = Record<string, string> | string;
}
