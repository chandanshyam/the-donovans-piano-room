import { atom } from "jotai";

///////////////
////SIGN UP////
///////////////

//Membership//
export const membershipChoiceAtom = atom("")

export const membershipTypes = {
    "24-hours": "24-hours",
    "yearly-access": "yearly-access",
    "monthly-access": "monthly-access",
    "scholarship": "scholarship"
}