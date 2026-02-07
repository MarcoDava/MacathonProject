import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { AdhocAgentConfigOverrideForTestRequestModel } from "../../../../../../types/AdhocAgentConfigOverrideForTestRequestModel";
import { SingleTestRunRequestModel } from "../../../../../../types/SingleTestRunRequestModel";
export declare const RunAgentTestsRequestModel: core.serialization.Schema<serializers.conversationalAi.RunAgentTestsRequestModel.Raw, ElevenLabs.conversationalAi.RunAgentTestsRequestModel>;
export declare namespace RunAgentTestsRequestModel {
    interface Raw {
        tests: SingleTestRunRequestModel.Raw[];
        agent_config_override?: AdhocAgentConfigOverrideForTestRequestModel.Raw | null;
        branch_id?: string | null;
    }
}
