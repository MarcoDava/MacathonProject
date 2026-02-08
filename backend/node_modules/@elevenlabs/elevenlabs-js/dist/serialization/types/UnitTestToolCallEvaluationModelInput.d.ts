import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ReferencedToolCommonModel } from "./ReferencedToolCommonModel";
import { UnitTestToolCallParameter } from "./UnitTestToolCallParameter";
export declare const UnitTestToolCallEvaluationModelInput: core.serialization.ObjectSchema<serializers.UnitTestToolCallEvaluationModelInput.Raw, ElevenLabs.UnitTestToolCallEvaluationModelInput>;
export declare namespace UnitTestToolCallEvaluationModelInput {
    interface Raw {
        parameters?: UnitTestToolCallParameter.Raw[] | null;
        referenced_tool?: ReferencedToolCommonModel.Raw | null;
        verify_absence?: boolean | null;
    }
}
