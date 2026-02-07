import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ReferencedToolCommonModelType: core.serialization.Schema<serializers.ReferencedToolCommonModelType.Raw, ElevenLabs.ReferencedToolCommonModelType>;
export declare namespace ReferencedToolCommonModelType {
    type Raw = "system" | "webhook" | "client" | "workflow" | "api_integration_webhook";
}
