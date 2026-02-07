import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DocumentUsageModeEnum } from "./DocumentUsageModeEnum";
import { KnowledgeBaseDocumentType } from "./KnowledgeBaseDocumentType";
export declare const KnowledgeBaseLocator: core.serialization.ObjectSchema<serializers.KnowledgeBaseLocator.Raw, ElevenLabs.KnowledgeBaseLocator>;
export declare namespace KnowledgeBaseLocator {
    interface Raw {
        type: KnowledgeBaseDocumentType.Raw;
        name: string;
        id: string;
        usage_mode?: DocumentUsageModeEnum.Raw | null;
    }
}
