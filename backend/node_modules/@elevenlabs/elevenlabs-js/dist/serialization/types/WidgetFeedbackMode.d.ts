import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WidgetFeedbackMode: core.serialization.Schema<serializers.WidgetFeedbackMode.Raw, ElevenLabs.WidgetFeedbackMode>;
export declare namespace WidgetFeedbackMode {
    type Raw = "none" | "during" | "end";
}
