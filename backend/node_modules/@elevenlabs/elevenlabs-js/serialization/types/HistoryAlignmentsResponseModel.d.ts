import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { HistoryAlignmentResponseModel } from "./HistoryAlignmentResponseModel";
export declare const HistoryAlignmentsResponseModel: core.serialization.ObjectSchema<serializers.HistoryAlignmentsResponseModel.Raw, ElevenLabs.HistoryAlignmentsResponseModel>;
export declare namespace HistoryAlignmentsResponseModel {
    interface Raw {
        alignment: HistoryAlignmentResponseModel.Raw;
        normalized_alignment: HistoryAlignmentResponseModel.Raw;
    }
}
