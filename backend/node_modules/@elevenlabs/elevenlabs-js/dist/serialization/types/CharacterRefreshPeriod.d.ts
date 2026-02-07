import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CharacterRefreshPeriod: core.serialization.Schema<serializers.CharacterRefreshPeriod.Raw, ElevenLabs.CharacterRefreshPeriod>;
export declare namespace CharacterRefreshPeriod {
    type Raw = "monthly_period" | "3_month_period" | "6_month_period" | "annual_period";
}
