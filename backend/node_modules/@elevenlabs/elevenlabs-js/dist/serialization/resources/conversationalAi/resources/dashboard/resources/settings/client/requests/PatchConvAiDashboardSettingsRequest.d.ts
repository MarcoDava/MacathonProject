import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { PatchConvAiDashboardSettingsRequestChartsItem } from "../../types/PatchConvAiDashboardSettingsRequestChartsItem";
export declare const PatchConvAiDashboardSettingsRequest: core.serialization.Schema<serializers.conversationalAi.dashboard.PatchConvAiDashboardSettingsRequest.Raw, ElevenLabs.conversationalAi.dashboard.PatchConvAiDashboardSettingsRequest>;
export declare namespace PatchConvAiDashboardSettingsRequest {
    interface Raw {
        charts?: PatchConvAiDashboardSettingsRequestChartsItem.Raw[] | null;
    }
}
