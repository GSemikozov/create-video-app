import { AccountPlanEnum } from "../types";

export const plansData = [
    {
        type: AccountPlanEnum.free,
        title: AccountPlanEnum.free,
        price: "0",
        descList: [
            {
                included: true,
                text: "Pellentesque interdum libero et",
            },
            {
                included: true,
                text: "Pellentesque posuere jdfkdfkdfhd",
            },
            {
                included: true,
                text: "Cras sed felis eget",
            },
            {
                included: true,
                text: "Maecenas eget luctus",
            },
            {
                included: true,
                text: "Nullam vitae augue",
            },
        ],
        current: false,
    },
    {
        type: AccountPlanEnum.pro,
        title: AccountPlanEnum.pro,
        price: "12",
        descList: [
            {
                included: true,
                text: "Maecenas eget luctus purus",
            },
            {
                included: true,
                text: "Graesent in sollicitudin velit",
            },
            {
                included: true,
                text: "Donec in orci vitae nisi ",
            },
            {
                included: true,
                text: "Class aptent taciti",
            },
            {
                included: false,
                text: "Ut blandit vestibulum",
            },
        ],
        current: false,
    },
    {
        type: AccountPlanEnum.team,
        title: AccountPlanEnum.team,
        price: "23",
        descList: [
            {
                included: true,
                text: "Etiam ac finibus nisi, a porttitor",
            },
            {
                included: true,
                text: "Quisque tincidunt velit a sapien vulputate ",
            },
            {
                included: true,
                text: "Vivamus pulvinar",
            },
            {
                included: true,
                text: "In hac habitasse platea",
            },
            {
                included: false,
                text: "Nullam vitae augue",
            },
        ],
        current: true,
    },
    {
        type: AccountPlanEnum.agency,
        title: AccountPlanEnum.agency,
        price: "43",
        descList: [
            {
                included: true,
                text: "Praesent in sollicitudin velit",
            },
            {
                included: true,
                text: "Nulla tincidunt finibus interdum",
            },
            {
                included: true,
                text: "Nullam vitae augue",
            },
            {
                included: true,
                text: "Curabitur eleifend",
            },
            {
                included: true,
                text: "Quisque vel ex enim",
            },
        ],
        current: false,
    },
];
