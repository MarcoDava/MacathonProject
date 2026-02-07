export declare const BranchProtectionStatus: {
    readonly WriterPermsRequired: "writer_perms_required";
    readonly AdminPermsRequired: "admin_perms_required";
};
export type BranchProtectionStatus = (typeof BranchProtectionStatus)[keyof typeof BranchProtectionStatus];
