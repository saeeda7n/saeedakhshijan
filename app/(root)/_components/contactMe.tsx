"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendMessage } from "@/server/actions/sendMessage";
import { toast } from "sonner";
import { LINKS } from "@/data/links";

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

   <div className="flex flex-wrap items-center">
    <p className="opacity-50">
     Feel free to send your message or any feedback.
    </p>
    <button className="ms-auto flex h-10 items-center justify-center gap-2 self-end rounded-md bg-indigo-500 px-5 uppercase">
     Send
     {loading ? (
      <Loader className="size-5 animate-spin" />
     ) : (
      <Send className="size-5" />
     )}
    </button>
   </div>
  </form>
 );
}

export function ContactMe() {
 return (
  <section id="contact_me" className="flex min-h-screen py-32">
   <div className="container flex min-h-16 flex-col justify-center gap-8">
    <div className="flex flex-col">
     <h2 className="my-16 text-[clamp(2.5rem,10vw,8rem)] font-bold leading-none">
      Get In Touch
     </h2>
    </div>
    <div className="flex-1">
     <MessageForm />
    </div>
    <div className="flex flex-1 flex-wrap items-center gap-5 gap-y-3 self-end">
     {LINKS.map((link) => (
      <a
       key={link.name}
       target="_blank"
       href={link.url}
       className="flex items-center gap-1"
      >
       {link.icon}
       <span>{link.name}</span>
      </a>
     ))}
    </div>
   </div>
  </section>
 );
}
