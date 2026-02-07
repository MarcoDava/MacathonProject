import type * as ElevenLabs from "../index";
export interface SampleConfigDbModel {
    isSample?: boolean;
    parentId?: string;
    parentType?: ElevenLabs.SampleConfigDbModelParentType;
    chapterIds?: string[];
}
