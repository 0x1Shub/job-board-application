import Link from "next/link";
import Logo from '@/public/talent-search.png';
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { auth, signOut } from "@/app/utils/auth";
import { UserDropdown } from "./UserDropdown";

export async function Navbar() {

    const session = await auth();

    return (
        <nav className="flex items-center justify-between py-5">
            <Link href={'/'} className="flex items-center gap-2">
                <Image src={Logo} alt="Logo HireHub" width={40} height={40} />
                <h1 className="text-3xl font-bold">
                    Hire<span className="text-primary">Hub</span>
                </h1>
            </Link>

            {/* DeskTop Navigation */}

            <div className="hidden md:flex items-center gap-5">
                <ThemeToggle />
                <Link className={buttonVariants({size: "lg"})} href={'/post-job'}>
                    Post Job
                </Link>

                {session?.user ? (
                    <UserDropdown 
                        email={session.user.email as string} 
                        name={session.user.name as string} 
                        image={session.user.image as string} 
                    />
                ) : (
                    <Link href={"/login"} className={buttonVariants({variant: "outline", size: "lg"})}>Login</Link>
                )}

            </div>

            {/* <div className="flex items-center gap-4">
                <ThemeToggle />
                {session?.user ? ( 
                    <form action={async () => {
                        "use server"
                        await signOut({redirectTo: '/'});
                    }}>
                        <Button>Logout</Button>
                    </form> 
                ) : ( <Link href={'/login'} className={buttonVariants({variant: 'outline', size: 'lg'})}>Login</Link> )}
            </div>
             */}
        </nav>
    )
}