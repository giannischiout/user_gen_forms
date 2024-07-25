import { Trash2, Plus, Grip, Search, Minus, Equal, SquareCheckBig, CircleCheckBig, ChevronDown, Hash, AtSign, Phone, Link } from 'lucide-react';

export const INPUT_OPTIONS = [
    {
        groupLabel: "Input blocks",
        inputs: [
            {
                id: "input-short-answer",
                label: "Short answer",
                icon: <Minus />,
            },
            {
                id: "input-long-answer",
                label: "Long answer",
                icon: <Equal />,
            },
            {
                id: "input-multiple-choice",
                label: "Multiple choice",
                icon: <CircleCheckBig />,
            },
            {
                id: "input-checkboxes",
                label: "Checkboxes",
                icon: <SquareCheckBig />,
            },
            {
                id: "input-dropdown",
                label: "Dropdown",
                icon: <ChevronDown />,
            },
            {
                id: "input-multi-select",
                label: "Multi-select",
                icon: <Trash2 />,
            },
            {
                id: "input-number",
                label: "Number",
                icon: <Hash />,
            },
            {
                id: "input-email",
                label: "Email",
                icon: <AtSign />,
            },
            {
                id: "input-phone-number",
                label: "Phone Number",
                icon: <Phone />,
            },
            {
                id: "input-link",
                label: "Link",
                icon: <SquareCheckBig />,
            }
        ]
    },
    {
        groupLabel: "Layout blocks",
        inputs: [
            {
                id: "layout-number-1",
                label: "Number",
                icon: <Trash2 />,
            },
            {
                id: "layout-phone-1",
                label: "Phone",
                icon: <Trash2 />,
            },
            {
                id: "layout-date-1",
                label: "Date",
                icon: <Trash2 />,
            },
            {
                id: "layout-time-1",
                label: "Time",
                icon: <Trash2 />,
            },
            {
                id: "layout-paragraph-1",
                label: "Paragraph",
                icon: <Trash2 />,
            },
            {
                id: "layout-dropdown-1",
                label: "Dropdown",
                icon: <Trash2 />,
            },
            {
                id: "layout-radio-1",
                label: "Radio",
                icon: <Trash2 />,
            },
            {
                id: "layout-checkbox-1",
                label: "Checkbox",
                icon: <Trash2 />,
            }
        ]
    },
    {
        groupLabel: "Layout blocks",
        inputs: [
            {
                id: "layout-number-2",
                label: "Number",
                icon: <Trash2 />,
            },
            {
                id: "layout-phone-2",
                label: "Phone",
                icon: <Trash2 />,
            },
            {
                id: "layout-date-2",
                label: "Date",
                icon: <Trash2 />,
            },
            {
                id: "layout-time-2",
                label: "Time",
                icon: <Trash2 />,
            },
            {
                id: "layout-paragraph-2",
                label: "Paragraph",
                icon: <Trash2 />,
            },
            {
                id: "layout-dropdown-2",
                label: "Dropdown",
                icon: <Trash2 />,
            },
            {
                id: "layout-radio-2",
                label: "Radio",
                icon: <Trash2 />,
            },
            {
                id: "layout-checkbox-2",
                label: "Checkbox",
                icon: <Trash2 />,
            }
        ]
    }
];
