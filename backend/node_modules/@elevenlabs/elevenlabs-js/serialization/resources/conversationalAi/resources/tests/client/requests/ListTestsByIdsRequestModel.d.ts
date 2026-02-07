import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const ListTestsByIdsRequestModel: core.serialization.Schema<serializers.conversationalAi.ListTestsByIdsRequestModel.Raw, ElevenLabs.conversationalAi.ListTestsByIdsRequestModel>;
export declare namespace ListTestsByIdsRequestModel {
    interface Raw {
        test_ids: string[];
    }
}
