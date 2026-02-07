import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UnitTestToolCallParameterEval } from "./UnitTestToolCallParameterEval";
export declare const UnitTestToolCallParameter: core.serialization.ObjectSchema<serializers.UnitTestToolCallParameter.Raw, ElevenLabs.UnitTestToolCallParameter>;
export declare namespace UnitTestToolCallParameter {
    interface Raw {
        eval: UnitTestToolCallParameterEval.Raw;
        path: string;
    }
}
