import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccess() {
    return (

        <div className="w-full min-h-screen flex flex-1 justify-center items-center">
            <Card className="w-[400px] shadow-lg border rounded-lg">
                <div className="p-6">
                    <div className="w-full flex justify-center">
                        <Check className="size-14 p-3 bg-green-500/20 text-green-500 rounded-full animate-bounce" />
                    </div>

                    <div className="mt-4 text-center sm:mt-5 w-full ">
                        <h2 className="mt-4 text-2xl font-bold">Payment Successful</h2>
                        <p className="text-sm mt-2 text-muted-foreground tracking-tight text-balance">
                            Congratulations! Your payment was successful, and your job posting is now live.
                        </p>

                        <Button asChild className="w-full mt-5 transition-transform hover:scale-105">
                            <Link href={'/'}>Go back to homepage</Link>
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
