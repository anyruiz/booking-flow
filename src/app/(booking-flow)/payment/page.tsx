"use client";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { TextInput } from "@/components/TextInput";
import { Button } from "@/components/Button";
import { BottomBar } from "@/components/BottomBar";

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const router = useRouter();

  const onSubmit = () => {
    router.push("/confirmation");
  };

  return (
    <>
      <form
        id="payment-form"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl border border-gray-30 p-4 md:py-12 md:px-15 flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-bold">Secure your appointment by card</h2>
          <p className="text-description">
            A credit or debit card is required to book your appointment.
          </p>
          <div className="flex flex-col gap-2">
            <TextInput
              label="Card information"
              {...register("cardNumber", {
                required: "Card number is required",
              })}
              type="number"
              placeholder="1234 1234 1234 1234"
              error={errors.cardNumber?.message?.toString()}
            />
            <div className="flex gap-1 md:gap-4 w-full justify-start">
              <div className="max-w-1/2 md:w-full">
                <TextInput
                  showLabel={false}
                  label="Expiry date"
                  {...register("expiryDate", {
                    required: "Expiry date is required",
                  })}
                  placeholder="MM/YY"
                  error={errors.expiryDate?.message?.toString()}
                />
              </div>
              <div className="max-w-1/2 md:w-full">
                <TextInput
                  showLabel={false}
                  label="CVV"
                  {...register("cvv", { required: "CVV is required" })}
                  type="number"
                  placeholder="CVV"
                  error={errors.cvv?.message?.toString()}
                />
              </div>
            </div>
          </div>
          <TextInput
            showLabel={false}
            label="Billing zip code"
            {...register("billingZipCode", {
              required: "Billing zip code is required",
            })}
            type="number"
            placeholder="Billing zip code"
            error={errors.billingZipCode?.message?.toString()}
          />
          <div className="flex items-start gap-2 relative">
            <input
              type="checkbox"
              className="mt-1"
              id="cancelationPolicy"
              {...register("cancelationPolicy", {
                required: "Please agree to the cancelation policy",
              })}
            />
            <label
              className="text-description text-sm"
              htmlFor="cancelationPolicy"
            >
              We ask that you please reschedule or cancel at least 24 hours
              before the beginning of your appointment or you may be charged a
              cancellation fee of $50. In the event of emergency, contact us
              directly. Your card will held in case of late cancellation and for
              future purchases. It will not be charged now.
            </label>
            {errors?.cancelationPolicy?.message && (
              <p className="text-red-600 text-sm text-right absolute -bottom-4 left-0">
                {errors.cancelationPolicy.message.toString()}
              </p>
            )}
          </div>
        </div>
        <hr className="border-gray-30" />
        <div className="w-full flex flex-col gap-6">
          <Button type="submit" label="Book appointment" fullWidth />
          <p className="text-description text-sm">
            By creating this appointment, you acknowledge you will receive
            automated transactional messages from this merchant.
          </p>
        </div>
      </form>
      <div className="hidden md:block">
        <BottomBar>
          <Button type="submit" form="payment-form" label="Continue" />
        </BottomBar>
      </div>
    </>
  );
}
