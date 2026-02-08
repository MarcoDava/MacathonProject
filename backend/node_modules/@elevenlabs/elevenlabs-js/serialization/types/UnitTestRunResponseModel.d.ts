import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationHistoryTranscriptCommonModelOutput } from "./ConversationHistoryTranscriptCommonModelOutput";
import { TestConditionResultCommonModel } from "./TestConditionResultCommonModel";
import { TestRunMetadata } from "./TestRunMetadata";
import { TestRunStatus } from "./TestRunStatus";
import { UnitTestCommonModel } from "./UnitTestCommonModel";
export declare const UnitTestRunResponseModel: core.serialization.ObjectSchema<serializers.UnitTestRunResponseModel.Raw, ElevenLabs.UnitTestRunResponseModel>;
export declare namespace UnitTestRunResponseModel {
    interface Raw {
        test_run_id: string;
        test_info?: UnitTestCommonModel.Raw | null;
        test_invocation_id: string;
        agent_id: string;
        branch_id?: string | null;
        workflow_node_id?: string | null;
        status: TestRunStatus.Raw;
        agent_responses?: ConversationHistoryTranscriptCommonModelOutput.Raw[] | null;
        test_id: string;
        test_name?: string | null;
        condition_result?: TestConditionResultCommonModel.Raw | null;
        last_updated_at_unix?: number | null;
        metadata?: TestRunMetadata.Raw | null;
    }
}
