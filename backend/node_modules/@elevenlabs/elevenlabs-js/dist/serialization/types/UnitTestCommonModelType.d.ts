import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UnitTestCommonModelType: core.serialization.Schema<serializers.UnitTestCommonModelType.Raw, ElevenLabs.UnitTestCommonModelType>;
export declare namespace UnitTestCommonModelType {
    type Raw = "llm" | "tool";
}
