import { Trash2,Plus,Grip, Search,Minus, Equal, SquareCheckBig, CircleCheckBig, ChevronDown, Hash,AtSign, Phone, Link } from 'lucide-react';

export const InputOptions = [
    {
        groupLabel: "Input blocks",
        inputs: [
            {
                label: "Short answer",
                icon: <Minus/>
            },
            {
                label: "Long answer",
                icon: <Equal/>
            },
            {
                label: "Multiple choise",
                icon: <CircleCheckBig />
            },
            {
                label: "Checkboxes",
                icon: <SquareCheckBig  />
            },
            {
                label: "Dropdown",
                icon: <ChevronDown />
            },
            {
                label: "Multi-select",
                icon: <Trash2 />
            },
            {
                label: "Number",
                icon: < Hash />
            },
            {
                label: "Email",
                icon: <AtSign />
            },
            {
                label: "Phone Number",
                icon: <Phone />
            },
            {
                label: "Link",
                icon: <SquareCheckBig />
            }
        ]
    },   {
        groupLabel: "Layout blocks",
        inputs: [

            {
                label: "Number",
                icon: <Trash2 />
            },
            {
                label: "Phone",
                icon: <Trash2 />
            },
            {
                label: "Date",
                icon: <Trash2 />
            },
            {
                label: "Time",
                icon: <Trash2 />
            },
            {
                label: "Paragraph",
                icon: <Trash2 />
            },
            {
                label: "Dropdown",
                icon: <Trash2 />
            },
            {
                label: "Radio",
                icon: <Trash2 />
            },
            {
                label: "Checkbox",
                icon: <Trash2 />
            }
        ]
    },
]