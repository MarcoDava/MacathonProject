import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SpellingPatience: core.serialization.Schema<serializers.SpellingPatience.Raw, ElevenLabs.SpellingPatience>;
export declare namespace SpellingPatience {
    type Raw = "auto" | "off";
}
