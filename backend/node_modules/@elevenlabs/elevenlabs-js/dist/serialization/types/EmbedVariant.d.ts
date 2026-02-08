import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const EmbedVariant: core.serialization.Schema<serializers.EmbedVariant.Raw, ElevenLabs.EmbedVariant>;
export declare namespace EmbedVariant {
    type Raw = "tiny" | "compact" | "full" | "expandable";
}
