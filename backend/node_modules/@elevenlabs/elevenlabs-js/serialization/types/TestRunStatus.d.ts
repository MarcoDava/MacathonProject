import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const TestRunStatus: core.serialization.Schema<serializers.TestRunStatus.Raw, ElevenLabs.TestRunStatus>;
export declare namespace TestRunStatus {
    type Raw = "pending" | "passed" | "failed";
}
