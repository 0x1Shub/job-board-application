import { z } from 'zod';

export const companySchema = z.object({
    name: z.string().min(2, "Company name should have at least 2 characters."),
    location: z.string().min(1, "Please specify your company's location."),
    about: z.string().min(10, "Provide at least 10 characters about your company."),
    logo: z.string().min(1, "Upload your company's logo."),
    website: z.string().url("Enter a valid website URL (e.g., https://example.com)."),
    xAccount: z.string().optional(),
    linkedInAccount: z.string().optional(),
});

export const jobSeekerSchema = z.object({
    name: z.string().min(2, "Your name should have at least 2 characters."),
    about: z.string().min(10, "Please provide some more information about yourself."),
    resume: z.string().min(1, "Please upload your resume."),
});

export const jobSchema = z.object({
    jobTitle: z.string().min(2, "The job title must be at least 2 characters long."),
    employmentType: z.string().min(1, "Please specify the employment type."),
    location: z.string().min(1, "Please provide the job location."),
    salaryFrom: z.number().min(1, "Please specify the starting salary."),
    salaryTo: z.number().min(1, "Please specify the maximum salary."),
    jobDescription: z.string().min(1, "A detailed job description is required."),
    listingDuration: z.number().min(1, "Please specify the duration for which the job listing will be active."),
    benefits: z.array(z.string()).min(1, "Please select at least one benefit."),

    companyName: z.string().min(1, "The company's name is required."),
    companyLocation: z.string().min(1, "Please provide the company's location."),
    companyAbout: z.string().min(10, "Provide a brief description of the company (at least 10 characters)."),
    companyLogo: z.string().min(1, "Please upload the company logo."),
    companyWebsite: z.string().min(1, "The company website URL is required."),
    companyXAccount: z.string().optional(),
    companyLinkedInAccount: z.string().optional(),
});
