export interface SingleUseTokenResponseModel {
    /** A time bound single use token that expires after 15 minutes. Will be consumed on use. */
    token: string;
}
