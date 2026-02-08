import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SampleConfigDbModelParentType } from "./SampleConfigDbModelParentType";
export declare const SampleConfigDbModel: core.serialization.ObjectSchema<serializers.SampleConfigDbModel.Raw, ElevenLabs.SampleConfigDbModel>;
export declare namespace SampleConfigDbModel {
    interface Raw {
        is_sample?: boolean | null;
        parent_id?: string | null;
        parent_type?: SampleConfigDbModelParentType.Raw | null;
        chapter_ids?: string[] | null;
    }
}
