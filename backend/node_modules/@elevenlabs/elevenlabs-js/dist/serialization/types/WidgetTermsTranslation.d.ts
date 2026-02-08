import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WidgetTermsTranslation: core.serialization.ObjectSchema<serializers.WidgetTermsTranslation.Raw, ElevenLabs.WidgetTermsTranslation>;
export declare namespace WidgetTermsTranslation {
    interface Raw {
        source_hash: string;
        text: string;
    }
}
