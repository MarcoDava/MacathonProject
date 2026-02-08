import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WidgetPlacement: core.serialization.Schema<serializers.WidgetPlacement.Raw, ElevenLabs.WidgetPlacement>;
export declare namespace WidgetPlacement {
    type Raw = "top-left" | "top" | "top-right" | "bottom-left" | "bottom" | "bottom-right";
}
