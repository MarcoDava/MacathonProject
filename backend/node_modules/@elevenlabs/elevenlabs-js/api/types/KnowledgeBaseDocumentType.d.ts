export declare const KnowledgeBaseDocumentType: {
    readonly File: "file";
    readonly Url: "url";
    readonly Text: "text";
    readonly Folder: "folder";
};
export type KnowledgeBaseDocumentType = (typeof KnowledgeBaseDocumentType)[keyof typeof KnowledgeBaseDocumentType];
