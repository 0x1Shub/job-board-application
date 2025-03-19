import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { MapIcon, MapPin, User2 } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { formatCurrency } from "@/app/utils/formatCurrency";
import { formatRelativeTime } from "@/app/utils/formatRelativeTime";

interface iAppProps {
    job: {
        id: string;
        createdAt: Date;
        Company: {
            about: string;
            name: string;
            location: string;
            logo: string;
        };
        jobTitle: string;
        employmentType: string;
        location: string;
        salaryFrom: number;
        salaryTo: number;
    }
}

export function JobCard({ job }: iAppProps){
    return (
        <Link href={'/job'} className="block">
            <Card className="hover:shadow-xl transition-all duration-300 border rounded-lg p-4 hover:border-primary">
                <CardHeader>
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                       <Image 
                            src={job.Company.logo} 
                            alt={job.Company.name} 
                            width={48} 
                            height={48} 
                            className="size-12 rounded-lg" 
                        />

                        <div className="flex-1">
                            <h1 className="text-xl md:text-2xl font-bold line-clamp-1">{job.jobTitle}</h1>
                            <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                                <p className="text-sm text-muted-foreground">{job.Company.name}</p>
                                <span className="hidden md:inline text-muted-foreground">•</span>
                                <Badge className="rounded-full" variant={"secondary"}>
                                    {job.employmentType}
                                </Badge>

                                <span className="hidden md:inline text-muted-foreground">•</span>
                                <Badge className="rounded-full">{job.location}</Badge>

                                <span className="hidden md:inline text-muted-foreground">•</span>
                                <p className="text-sm text-muted-foreground">
                                    {formatCurrency(job.salaryFrom)} - {formatCurrency(job.salaryTo)}
                                </p>
                            </div>
                        </div>

                        <div className="md:ml-auto text-right">
                            <div className="flex items-center gap-2 justify-end text-sm font-medium">
                                <MapPin className="size-4" />
                                <h1>{job.location}</h1>
                            </div>
                            <p className="text-xs text-muted-foreground md:text-right">{formatRelativeTime(job.createdAt)}</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-base text-muted-foreground line-clamp-2 !mt-5">{job.Company.about}</p>
                    </div>
                </CardHeader>
            </Card>
        </Link>
    )
}
