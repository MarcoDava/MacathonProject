import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DashboardCriteriaChartModel: core.serialization.ObjectSchema<serializers.DashboardCriteriaChartModel.Raw, ElevenLabs.DashboardCriteriaChartModel>;
export declare namespace DashboardCriteriaChartModel {
    interface Raw {
        name: string;
        criteria_id: string;
    }
}
