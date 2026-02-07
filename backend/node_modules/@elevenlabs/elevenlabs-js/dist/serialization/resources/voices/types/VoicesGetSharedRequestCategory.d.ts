import type * as ElevenLabs from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
export declare const VoicesGetSharedRequestCategory: core.serialization.Schema<serializers.VoicesGetSharedRequestCategory.Raw, ElevenLabs.VoicesGetSharedRequestCategory>;
export declare namespace VoicesGetSharedRequestCategory {
    type Raw = "professional" | "famous" | "high_quality";
}
