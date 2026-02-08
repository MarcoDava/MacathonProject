import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WidgetTextContents } from "./WidgetTextContents";
export declare const WidgetLanguagePresetResponse: core.serialization.ObjectSchema<serializers.WidgetLanguagePresetResponse.Raw, ElevenLabs.WidgetLanguagePresetResponse>;
export declare namespace WidgetLanguagePresetResponse {
    interface Raw {
        first_message?: string | null;
        text_contents?: WidgetTextContents.Raw | null;
        terms_text?: string | null;
        terms_html?: string | null;
        terms_key?: string | null;
    }
}
