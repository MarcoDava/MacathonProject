import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { AdhocAgentConfigOverrideForTestRequestModel } from "../../../../../../../../types/AdhocAgentConfigOverrideForTestRequestModel";
export declare const ResubmitTestsRequestModel: core.serialization.Schema<serializers.conversationalAi.tests.ResubmitTestsRequestModel.Raw, ElevenLabs.conversationalAi.tests.ResubmitTestsRequestModel>;
export declare namespace ResubmitTestsRequestModel {
    interface Raw {
        test_run_ids: string[];
        agent_config_override?: AdhocAgentConfigOverrideForTestRequestModel.Raw | null;
        agent_id: string;
        branch_id?: string | null;
    }
}
