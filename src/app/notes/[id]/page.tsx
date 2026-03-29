import { QueryClient } from "@tanstack/react-query";
import { fetchNoteById } from "../../../lib/api";
import NoteDetailsClient from "./NoteDetails.client";

interface PageProps {
  params: { id: string };
}

export const dynamic = "force-static";

export default async function NotePage({ params }: PageProps) {
  const { id } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
  queryKey: ["note", id],
  queryFn: () => fetchNoteById(id),
  });

  return (
    <NoteDetailsClient 
      noteId={id} 
     
    />
  );
}