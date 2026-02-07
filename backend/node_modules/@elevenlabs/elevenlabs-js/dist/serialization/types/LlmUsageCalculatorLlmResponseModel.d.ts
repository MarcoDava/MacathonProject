import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { Llm } from "./Llm";
export declare const LlmUsageCalculatorLlmResponseModel: core.serialization.ObjectSchema<serializers.LlmUsageCalculatorLlmResponseModel.Raw, ElevenLabs.LlmUsageCalculatorLlmResponseModel>;
export declare namespace LlmUsageCalculatorLlmResponseModel {
    interface Raw {
        llm: Llm.Raw;
        price_per_minute: number;
    }
}
