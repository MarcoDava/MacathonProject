import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WidgetEndFeedbackType } from "./WidgetEndFeedbackType";
export declare const WidgetEndFeedbackConfig: core.serialization.ObjectSchema<serializers.WidgetEndFeedbackConfig.Raw, ElevenLabs.WidgetEndFeedbackConfig>;
export declare namespace WidgetEndFeedbackConfig {
    interface Raw {
        type?: WidgetEndFeedbackType.Raw | null;
    }
}
