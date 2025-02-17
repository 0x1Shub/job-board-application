import { Button } from "@/components/ui/button";
import { Building2, UserRound } from "lucide-react";

export function UserTypeSelection() {

    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold">Join HireHub Today!</h1>
                <p className="text-muted-foreground">Are you looking to hire top talent or find your dream job? Select an option to get started!</p>
            </div>

            <div className="grid gap-4">
                <Button 
                    variant={"outline"} 
                    className="w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary/50 ">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Building2 className="size-6 text-primary" />
                    </div>

                    <div className="text-left">
                        <h3 className="font-semibold text-lg">Company / Organization</h3>
                        <p>Connect with top talent and grow your team</p>
                    </div>
                </Button>

                <Button 
                    variant={"outline"} 
                    className="w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary/50 ">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <UserRound className="size-6 text-primary" />
                    </div>

                    <div className="text-left">
                        <h3 className="font-semibold text-lg">Job Seeker</h3>
                        <p>Discover exciting opportunities & advance your career</p>
                    </div>
                </Button>
            </div>
        </div>
    );
}