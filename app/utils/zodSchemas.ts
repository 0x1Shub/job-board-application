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
