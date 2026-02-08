import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LlmUsageCalculatorLlmResponseModel } from "./LlmUsageCalculatorLlmResponseModel";
export declare const LlmUsageCalculatorResponseModel: core.serialization.ObjectSchema<serializers.LlmUsageCalculatorResponseModel.Raw, ElevenLabs.LlmUsageCalculatorResponseModel>;
export declare namespace LlmUsageCalculatorResponseModel {
    interface Raw {
        llm_prices: LlmUsageCalculatorLlmResponseModel.Raw[];
    }
}
