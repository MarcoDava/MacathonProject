import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const RenderStatus: core.serialization.Schema<serializers.RenderStatus.Raw, ElevenLabs.RenderStatus>;
export declare namespace RenderStatus {
    type Raw = "complete" | "processing" | "failed";
}
