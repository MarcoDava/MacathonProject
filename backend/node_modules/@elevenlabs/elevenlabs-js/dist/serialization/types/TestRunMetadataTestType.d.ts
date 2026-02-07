import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TestRunMetadataTestType: core.serialization.Schema<serializers.TestRunMetadataTestType.Raw, ElevenLabs.TestRunMetadataTestType>;
export declare namespace TestRunMetadataTestType {
    type Raw = "llm" | "tool_call";
}
