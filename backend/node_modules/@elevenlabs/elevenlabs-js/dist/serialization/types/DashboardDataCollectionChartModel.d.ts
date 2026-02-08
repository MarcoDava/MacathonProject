import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DashboardDataCollectionChartModel: core.serialization.ObjectSchema<serializers.DashboardDataCollectionChartModel.Raw, ElevenLabs.DashboardDataCollectionChartModel>;
export declare namespace DashboardDataCollectionChartModel {
    interface Raw {
        name: string;
        data_collection_id: string;
    }
}
