/** Valid Twilio edge locations. */
export declare const TwilioEdgeLocation: {
    readonly Ashburn: "ashburn";
    readonly Dublin: "dublin";
    readonly Frankfurt: "frankfurt";
    readonly SaoPaulo: "sao-paulo";
    readonly Singapore: "singapore";
    readonly Sydney: "sydney";
    readonly Tokyo: "tokyo";
    readonly Umatilla: "umatilla";
    readonly Roaming: "roaming";
};
export type TwilioEdgeLocation = (typeof TwilioEdgeLocation)[keyof typeof TwilioEdgeLocation];
