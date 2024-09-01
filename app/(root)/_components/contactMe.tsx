"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
 AtSignIcon,
 Github,
 Instagram,
 Loader,
 Phone,
 Send,
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendMessage } from "@/server/actions/sendMessage";
import { toast } from "sonner";

const messageSchema = z.object({
 name: z.string().min(3, { message: "Please provide a name." }),
 email: z.string().email(),
 message: z.string().min(16, { message: "Please write a longer message!" }),
});

function MessageForm() {
 const [loading, setLoading] = useState(false);

 const { register, handleSubmit, formState, reset } = useForm<
  z.infer<typeof messageSchema>
 >({
  resolver: zodResolver(messageSchema),
 });

 async function onSubmit(data: z.infer<typeof messageSchema>) {
  try {
   setLoading(true);
   await sendMessage(data);
   toast("Message sent.");
   reset();
  } catch (e: any) {
   toast(e.message);
  } finally {
   setLoading(false);
  }
 }

 return (
  <form
   onSubmit={handleSubmit(onSubmit)}
   className="flex w-full flex-col gap-3"
  >
   <div className="space-y-2">
    <div className="rounded-md border">
     <input
      {...register("name")}
      type="text"
      placeholder="Your name ..."
      className="w-full bg-transparent px-3 py-3"
     />
    </div>
    {formState.errors?.name && (
     <p className="text-sm text-red-400">{formState.errors?.name?.message}</p>
    )}
   </div>

   <div className="space-y-2">
    <div className="rounded-md border">
     <input
      {...register("email")}
      type="email"
      placeholder="Email address ..."
      className="w-full bg-transparent px-3 py-3"
     />
    </div>
    {formState.errors?.email && (
     <p className="text-sm text-red-400">{formState.errors?.email?.message}</p>
    )}
   </div>

   <div className="space-y-2">
    <div className="rounded-md border">
     <textarea
      {...register("message")}
      placeholder="Message ..."
      className="w-full resize-none bg-transparent px-3 py-3"
     />
    </div>
    {formState.errors?.message && (
     <p className="text-sm text-red-400">
      {formState.errors?.message?.message}
     </p>
    )}
   </div>

   <button className="flex h-10 items-center justify-center gap-2 self-end rounded-md bg-indigo-500 px-5 uppercase">
    Send
    {loading ? (
     <Loader className="size-5 animate-spin" />
    ) : (
     <Send className="size-5" />
    )}
   </button>
  </form>
 );
}

export function ContactMe() {
 return (
  <div className="flex min-h-lvh py-32">
   <div className="container flex min-h-16 flex-col justify-center gap-8">
    <h2 className="my-16 text-[clamp(2.5rem,10vw,8rem)] font-bold">
     Get In Touch
    </h2>
    <div className="flex-1">
     <MessageForm />
    </div>
    <div className="flex flex-1 items-center gap-5 self-end">
     <a href="tel:+989303929013" className="flex items-center gap-1">
      <Phone className="-mb-0.5" />
      <span>+98 930 392 9013</span>
     </a>
     <a href="mailto:sakhshijan@gmail.com" className="flex items-center gap-1">
      <AtSignIcon />
      <span>sakhshijan@gmail.com</span>
     </a>
     <a
      href="https://www.instagram.com/76_saeed_a"
      className="flex items-center gap-1"
     >
      <Instagram />
      <span>76_saeed_a</span>
     </a>
     <a href="https://github.com/saeeda7n/" className="flex items-center gap-1">
      <Github />
      <span>git/saeeda7n</span>
     </a>
    </div>
   </div>
  </div>
 );
}
