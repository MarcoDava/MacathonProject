import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ModelRatesResponseModel: core.serialization.ObjectSchema<serializers.ModelRatesResponseModel.Raw, ElevenLabs.ModelRatesResponseModel>;
export declare namespace ModelRatesResponseModel {
    interface Raw {
        character_cost_multiplier: number;
    }
}
