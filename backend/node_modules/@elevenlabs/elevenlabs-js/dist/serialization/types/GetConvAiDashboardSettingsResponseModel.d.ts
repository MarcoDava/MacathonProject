import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { GetConvAiDashboardSettingsResponseModelChartsItem } from "./GetConvAiDashboardSettingsResponseModelChartsItem";
export declare const GetConvAiDashboardSettingsResponseModel: core.serialization.ObjectSchema<serializers.GetConvAiDashboardSettingsResponseModel.Raw, ElevenLabs.GetConvAiDashboardSettingsResponseModel>;
export declare namespace GetConvAiDashboardSettingsResponseModel {
    interface Raw {
        charts?: GetConvAiDashboardSettingsResponseModelChartsItem.Raw[] | null;
    }
}
