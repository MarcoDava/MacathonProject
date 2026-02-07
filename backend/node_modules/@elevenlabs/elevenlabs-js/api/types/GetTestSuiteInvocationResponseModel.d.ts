import type * as ElevenLabs from "../index";
export interface GetTestSuiteInvocationResponseModel {
    id: string;
    agentId?: string;
    branchId?: string;
    createdAt?: number;
    testRuns: ElevenLabs.UnitTestRunResponseModel[];
}
