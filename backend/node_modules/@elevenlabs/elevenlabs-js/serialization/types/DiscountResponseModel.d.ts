import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DiscountResponseModel: core.serialization.ObjectSchema<serializers.DiscountResponseModel.Raw, ElevenLabs.DiscountResponseModel>;
export declare namespace DiscountResponseModel {
    interface Raw {
        discount_percent_off?: number | null;
        discount_amount_off?: number | null;
    }
}
