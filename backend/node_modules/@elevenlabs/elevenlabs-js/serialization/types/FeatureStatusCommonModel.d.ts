import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const FeatureStatusCommonModel: core.serialization.ObjectSchema<serializers.FeatureStatusCommonModel.Raw, ElevenLabs.FeatureStatusCommonModel>;
export declare namespace FeatureStatusCommonModel {
    interface Raw {
        enabled?: boolean | null;
        used?: boolean | null;
    }
}
