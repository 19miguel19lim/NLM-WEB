import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import TrueNorthVideo from "@/assets/trueNorthVideo.mp4";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rhianna",
      company: "",
      role: "",
      image: "/api/placeholder/80/80",
      quote:
        "In the twenty plus years that I have been in this space, my experience with TrueNorth Media's team has been unparalleled. Beyond their professionalism, they understand how to build successful campaigns, they think outside of the box and they always look for win-win formulas. They morph every piece of business that I bring them into a long term, scalable and lucrative venture. Each member of the team is on point, helpful and has a can-do attitude. They treat everyone with whom they do business like family and there is no one in the industry that I trust more. Doing business with TrueNorth makes me love what I do because I feel good about the business that we generate together and I love interacting with them.",
      rating: 5,
    },
    {
      name: "David Quiec",
      company: "",
      role: "",
      image: "/api/placeholder/80/80",
      quote:
        "TrueNorth is an awesome partner! Highly collaborative and super easy to work with.",
      rating: 5,
    },
    {
      name: "Curt Denny",
      company: "Mobile Technologies",
      role: "",
      image: "/api/placeholder/80/80",
      quote:
        "Working with TrueNorth is an absolute pleasure. I have actively worked with TrueNorth for almost 8 years now....yes, I even admit it! They are absolute studs, and goes above and beyond on anything I ask of them. TrueNorth does an amazing job managing buyers and publishers, and provide a lot of insight into their campaigns. From a publisher perspective, I always receive detailed feedback so that I can optimize for not only quality, but also profitability. These details keep the advertiser happy, to allow for very long running campaigns. Highly recommended!",
      rating: 5,
    },
    {
      name: "Stephen Luthy",
      company: "The Credit Pros",
      role: "",
      image: "/api/placeholder/80/80",
      quote:
        "We have been working with the TrueNorth team for over 2 years now and each team member has been involved at some point of this partnership. They have been professional, fun and collaborative partners who work with us to understand what exactly we are looking for and what works the best with our business model. We have had many fun experiences outside of just doing business together and that is hard to find. The TrueNorth team has been a breath of fresh air to work with!",
      rating: 5,
    },
    {
      name: "James Proctor",
      company: "Digital Resource Management",
      role: "",
      image: "/api/placeholder/80/80",
      quote:
        "As a publisher, I have worked with several different networks but working with TrueNorth has been the best experience I have had. Besides having offers that are publisher friendly, the Account Managers are wonderful to work with and always are available when I have questions. The quality of the offers are vetted and are always tested out before being given to a Publisher which makes success a reality. If you want to find a network that treats you as a partner and the best payment terms in the industry, TrueNorth is the network you will want to work with.",
      rating: 5,
    },
    {
      name: "Plamen Stoyanov",
      company: "RingMax",
      role: "",
      image: "/api/placeholder/80/80",
      quote:
        "I have worked with TrueNorth Media for more than 3 years. During that time, I have had the opportunity to communicate with almost every one of the team, and their consistently clear communication makes partnering simple. The top-quality results I have experienced are exactly what you would expect from them. They are true professionals in the Pay Per Call industry and great partners for my business.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "20+", label: "Years Combined Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "8+ Years", label: "Longest Partnership" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={TrueNorthVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-hero-gradient opacity-60" />

          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute bottom-0 w-full h-32 text-surface-elevated opacity-20"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" />
            </svg>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-accent to-accent-glow-light bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              What Our Clients Say
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-surface-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 text-center bg-surface-elevated border-border"
                >
                  <div className="text-3xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-12">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`p-8 lg:p-12 bg-surface-elevated border-border hover:border-accent/30 transition-all duration-300 ${
                    index % 2 === 0 ? "lg:ml-0 lg:mr-12" : "lg:ml-12 lg:mr-0"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    {/* Quote Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <Quote className="w-8 h-8 text-accent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Stars */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-accent"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-muted-foreground leading-relaxed mb-6 text-lg italic">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center overflow-hidden">
                          <Users className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.name}
                          </div>
                          {testimonial.company && (
                            <div className="text-sm text-accent">
                              {testimonial.company}
                            </div>
                          )}
                          {testimonial.role && (
                            <div className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-surface-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their
                business with TrueNorth's performance marketing solutions.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
                {[
                  "Insurance",
                  "Healthcare",
                  "Finance",
                  "Real Estate",
                  "Legal",
                  "Technology",
                ].map((industry, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-surface-elevated border border-border flex items-center justify-center">
                      <span className="text-xs font-semibold text-muted-foreground">
                        {industry.slice(0, 3).toUpperCase()}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {industry}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-r from-surface-elevated to-surface-subtle border-accent/20">
              <Quote className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the TrueNorth difference and see why our clients
                trust us as their strategic growth partner. Let's write your
                success story together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button variant="nav" size="xl">
                  Schedule a Consultation
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

export default Testimonials;
