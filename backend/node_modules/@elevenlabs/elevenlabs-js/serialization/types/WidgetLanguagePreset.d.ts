import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WidgetTermsTranslation } from "./WidgetTermsTranslation";
import { WidgetTextContents } from "./WidgetTextContents";
export declare const WidgetLanguagePreset: core.serialization.ObjectSchema<serializers.WidgetLanguagePreset.Raw, ElevenLabs.WidgetLanguagePreset>;
export declare namespace WidgetLanguagePreset {
    interface Raw {
        text_contents?: WidgetTextContents.Raw | null;
        terms_text?: string | null;
        terms_html?: string | null;
        terms_key?: string | null;
        terms_translation?: WidgetTermsTranslation.Raw | null;
    }
}
