import { auth } from "@/app/utils/auth";
import { requireUser } from "@/app/utils/requireUser";
import { redirect } from "next/navigation";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      const session =  await requireUser();
      if (!session) throw new UploadThingError("Unauthorized");
      return { userId: session.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);
      return { uploadedBy: metadata.userId };
    }),

    resumeUploader: f({
      "application/pdf": {
        maxFileSize: "4MB",
        maxFileCount: 1,
      },
    })
      // Set permissions and file types for this FileRoute
      .middleware(async () => {
        const session =  await requireUser();
        if (!session) throw new UploadThingError("Unauthorized");
        return { userId: session.id };
      })
      .onUploadComplete(async ({ metadata, file }) => {
        // This code RUNS ON YOUR SERVER after upload
        console.log("Upload complete for userId:", metadata.userId);
  
        console.log("file url", file.url);
        return { uploadedBy: metadata.userId };
      }),
      
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
