import BlogForm from "@/components/admin/BlogForm";

export default function NewBlogPage() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Nuevo Artículo</h1>
                <BlogForm />
            </div>
        </div>
    );
}
