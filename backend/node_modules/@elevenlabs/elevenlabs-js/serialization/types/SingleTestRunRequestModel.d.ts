import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SingleTestRunRequestModel: core.serialization.ObjectSchema<serializers.SingleTestRunRequestModel.Raw, ElevenLabs.SingleTestRunRequestModel>;
export declare namespace SingleTestRunRequestModel {
    interface Raw {
        test_id: string;
        workflow_node_id?: string | null;
    }
}
