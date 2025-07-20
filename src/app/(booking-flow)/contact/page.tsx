"use client";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { TextInput } from "@/components/TextInput";
import { TextArea } from "@/components/TextArea";
import { BottomBar } from "@/components/BottomBar";
import { Button } from "@/components/Button";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const router = useRouter();

  const onSubmit = () => {
    router.push("/payment");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl border border-gray-30 p-4 md:py-12 md:px-15 flex flex-col gap-4 w-full"
    >
      <h2 className="text-lg font-bold">Enter your details below</h2>
      <TextInput
        {...register("name", {
          required: "Name is required",
        })}
        label="Name"
        type="text"
        placeholder="Input text"
        error={errors.name?.message?.toString()}
      />
      <TextInput
        {...register("email", {
          required: "Email is required",
        })}
        label="Email"
        type="email"
        placeholder="Input text"
        error={errors.email?.message?.toString()}
      />
      <TextInput
        {...register("phone", {
          required: "Phone number is required",
        })}
        label="Phone number"
        type="tel"
        placeholder="Input text"
        error={errors.phone?.message?.toString()}
      />
      <TextArea
        {...register("reasonForVisit", {
          required: "Reason for visit is required",
        })}
        label="Reason for visit"
        placeholder="Input text"
        error={errors.reasonForVisit?.message?.toString()}
      />
      <BottomBar>
        <div className="w-full flex justify-end">
          <Button type="submit" label="Continue" />
        </div>
      </BottomBar>
    </form>
  );
}
