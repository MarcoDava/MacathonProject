import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const KnowledgeBaseSourceFileUrlResponseModel: core.serialization.ObjectSchema<serializers.KnowledgeBaseSourceFileUrlResponseModel.Raw, ElevenLabs.KnowledgeBaseSourceFileUrlResponseModel>;
export declare namespace KnowledgeBaseSourceFileUrlResponseModel {
    interface Raw {
        signed_url: string;
    }
}
