import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const KnowledgeBaseFolderPathSegmentResponseModel: core.serialization.ObjectSchema<serializers.KnowledgeBaseFolderPathSegmentResponseModel.Raw, ElevenLabs.KnowledgeBaseFolderPathSegmentResponseModel>;
export declare namespace KnowledgeBaseFolderPathSegmentResponseModel {
    interface Raw {
        id: string;
        name?: string | null;
    }
}
