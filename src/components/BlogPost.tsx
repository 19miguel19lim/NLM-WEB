import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPostProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content: React.ReactNode;
  icon: React.ComponentType<any>;
  backgroundImage?: string;
}

const BlogPost = ({
  title,
  excerpt,
  category,
  date,
  author,
  readTime,
  content,
  icon: IconComponent,
  backgroundImage,
}: BlogPostProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Background Image */}
          {backgroundImage && (
            <div className="absolute inset-0">
              <img
                src={backgroundImage}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          )}

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <div className="mb-8">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/blog" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                  </Link>
                </Button>
              </div>

              {/* Article Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  <IconComponent className="w-4 h-4" />
                  {category}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                  {title}
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  {excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg prose-invert max-w-none">
                {content}
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-surface-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-3xl mx-auto p-12 text-center bg-gradient-to-r from-surface-elevated to-surface-subtle border-accent/20">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let TrueNorth help you implement these strategies and drive real
                results for your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button variant="nav" size="xl" asChild>
                  <Link to="/blog">Read More Articles</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
