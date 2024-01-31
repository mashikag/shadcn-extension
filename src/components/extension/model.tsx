"use client";
/* import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { UploadImageForm } from "./image-upload/image-uploader";
import { cn } from "@/lib/utils";
import { MultiSelect } from "./fancy-multi-select/multi-select";
import { OtpStyledInput } from "./otp-input/otp-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner"; */
import { TreeView } from "./tree-view/tree-view";

export type FilePreview = {
  file: File;
  preview: string;
};
/*
export const Model = () => {
  const [image, setImage] = useState<File[] | null>(null);
  const [preview, setPreview] = useState<FilePreview[] | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className={cn(
          "",
          buttonVariants({
            variant: "outline",
          })
        )}
      >
        Open Dialog
      </DialogTrigger>
      <DialogContent className="max-w-md p-3 w-full">
        <UploadImageForm
          setImages={setImage}
          images={image}
          preview={preview}
          setPreview={setPreview}
          maxFiles={2}
          maxSize={1024 * 1024 * 8}
          multiple={true}
        />
        <div className="flex items-center justify-end gap-2">
          <Button variant={"outline"} onClick={() => setIsOpen(!open)}>
            <span>Cancel</span>
          </Button>
          <Button>
            <span>Submit</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const ImageUpload = () => {
  const [image, setImage] = useState<File[] | null>(null);
  const [preview, setPreview] = useState<FilePreview[] | null>(null);
  return (
    <div className="max-w-md w-full">
      <UploadImageForm
        setImages={setImage}
        images={image}
        preview={preview}
        setPreview={setPreview}
        maxFiles={5}
        maxSize={1024 * 1024 * 8}
        multiple={true}
      />
    </div>
  );
};

export const Commander = () => {
  return (
    <MultiSelect
      options={[
        "Hello",
        "World",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "React",
        "Vite",
        "Remix",
        "Astro",
        "Svelte",
      ]}
    />
  );
};

export const OtpTest = () => {
  const form = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success(`Success , Your Otp code is : ${data.otp}`);
  };
  return (
    <div className="max-w-xs flex items-center justify-center outline outline-1 outline-muted rounded-md p-4">
      <div className="w-full space-y-2">
        <div className="space-y-1">
          <h2 className="font-semibold">OTP verification</h2>
          <p className="text-xs">
            Enter the 5-digit code sent to your email address or phone number
          </p>
        </div>
        <Form {...form}>
          <form className="grid gap-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormControl>
                  <>
                    <FormItem>
                      <OtpStyledInput
                        numInputs={5}
                        inputType="number"
                        {...field}
                      />
                    </FormItem>
                    <FormMessage />
                  </>
                </FormControl>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
 */
export const TreeViewTest = () => {
  const elements = [
    {
      id: "1",
      isSelectable: true,
      name: "Element 1",
      children: [
        {
          id: "2",
          isSelectable: true,
          name: "Element 2",
          children: [
            {
              id: "3",
              isSelectable: true,
              name: "Element 3",
              children: [],
            },
            {
              id: "4",
              isSelectable: true,
              name: "Element 4",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "5",
      isSelectable: true,
      name: "Element 5",
      children: [
        {
          id: "6",
          isSelectable: true,
          name: "Element 6",
          children: [
            {
              id: "7",
              isSelectable: false,
              name: "Element 7",
              children: [],
            },
          ],
        },
        {
          id: "8",
          isSelectable: true,
          name: "Element 8",
          children: [],
        },
      ],
    },
    {
      id: "9",
      isSelectable: true,
      name: "Element 9",
      children: [],
    },

    // Add more elements as needed
  ];

  return (
    <div className="flex gap-2 pl-2">
      <TreeView elements={elements} initialSelectedId={"6"} />
    </div>
  );
};