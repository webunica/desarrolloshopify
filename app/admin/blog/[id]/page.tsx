import { prisma } from "@/lib/prisma";
import BlogForm from "@/components/admin/BlogForm";
import { notFound } from "next/navigation";

// Since we are in Next.js 15 (implied by previous usage of await in params), 
// params is a Promise.
interface Props {
    params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: Props) {
    const { id } = await params;

    const article = await prisma.article.findUnique({
        where: { id: parseInt(id) },
    });

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Editar Artículo</h1>
                <BlogForm initialData={article} isEditing={true} />
            </div>
        </div>
    );
}
