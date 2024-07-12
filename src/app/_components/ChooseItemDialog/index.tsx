"use client"
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {IconButton} from "@/app/_components/IconButton";
import { Plus } from 'lucide-react';

type DialogProps = {
    title: string;
    description: string;
    open: boolean;
    onClose: () => void;
}

export function ChooseItemDialog({title, description, open, onClose}: DialogProps) {
    return (
        <Dialog
            open={open}
        >
            <DialogTrigger asChild >
                <IconButton icon={<Plus />} onClick={() => console.log("plus")} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}