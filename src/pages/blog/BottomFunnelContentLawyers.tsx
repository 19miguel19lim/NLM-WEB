import BlogPost from "@/components/BlogPost";
import { BookOpen } from "lucide-react";
import BottomFunnelImg from "@/assets/bottom-of-funnel-content-for-lawyers.jpg";

const BottomFunnelContentLawyers = () => {
  const content = (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
          Bottom of Funnel Content for Lawyers
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Bottom of funnel content is designed for prospects who are ready to
          make a decision and are actively comparing law firms. This content
          should address final objections, provide social proof, and create
          urgency to move prospects from consideration to hiring your firm.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          At TrueNorth, we've helped law firms create compelling bottom-funnel
          content that converts prospects into clients and drives measurable
          results.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Understanding the Bottom of Funnel
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Bottom of funnel prospects have already:
        </p>
        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">
                Identified their legal need:
              </strong>
              <span className="text-muted-foreground">
                {" "}
                They know they need legal representation and have researched
                their options.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">
                Narrowed down their options:
              </strong>
              <span className="text-muted-foreground">
                {" "}
                They're comparing a few law firms and are close to making a
                decision.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">
                Have specific concerns:
              </strong>
              <span className="text-muted-foreground">
                {" "}
                They need reassurance about cost, timeline, process, and
                outcomes.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
          Essential Bottom of Funnel Content Types
        </h3>

        <div className="space-y-8">
          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              1. Case Studies and Success Stories
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Detailed case studies show prospects exactly how you've helped
              similar clients achieve positive outcomes. Include specific
              details about the challenge, your approach, and the results.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="text-sm text-accent font-medium mb-2">
                Key Elements:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Client's initial situation and challenges</li>
                <li>• Your legal strategy and approach</li>
                <li>• Specific results and outcomes achieved</li>
                <li>• Client testimonial and feedback</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              2. Client Testimonials and Reviews
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Social proof is crucial at this stage. Collect detailed
              testimonials from satisfied clients and display them prominently
              on your website and marketing materials.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="text-sm text-accent font-medium mb-2">
                Best Practices:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • Include client photos and full names (with permission)
                </li>
                <li>• Focus on specific outcomes and results</li>
                <li>• Address common concerns and objections</li>
                <li>• Use video testimonials when possible</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              3. Free Consultations and Case Evaluations
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Offer free initial consultations or case evaluations to remove the
              barrier to getting started. This allows prospects to experience
              your expertise firsthand without financial commitment.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="text-sm text-accent font-medium mb-2">
                Implementation:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Clearly explain what the consultation includes</li>
                <li>• Set expectations about timeline and process</li>
                <li>• Provide a simple way to schedule online</li>
                <li>• Follow up promptly after the consultation</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              4. Pricing and Process Information
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Be transparent about your fees, payment options, and the legal
              process. This builds trust and helps prospects make informed
              decisions.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="text-sm text-accent font-medium mb-2">Include:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Fee structure and payment options</li>
                <li>• Timeline expectations</li>
                <li>• What's included in your services</li>
                <li>• How you communicate with clients</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              5. Attorney Profiles and Credentials
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Detailed attorney profiles help prospects feel confident in your
              expertise and qualifications. Include education, experience,
              certifications, and personal touches that build connection.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="text-sm text-accent font-medium mb-2">
                Key Information:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Education and law school background</li>
                <li>• Years of experience and practice areas</li>
                <li>• Bar admissions and certifications</li>
                <li>• Awards, recognition, and publications</li>
                <li>• Personal interests and community involvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Creating Urgency and Overcoming Objections
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Addressing Cost Concerns
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Create content that explains the value of legal representation and
              the potential cost of not having proper legal counsel. Use ROI
              calculators and cost-benefit analyses.
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Timeline Concerns
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Provide realistic timelines and explain the factors that affect
              case duration. Show how your experience helps expedite the process
              when possible.
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Outcome Uncertainty
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              While you can't guarantee specific outcomes, you can explain your
              track record, approach to case evaluation, and how you maximize
              the chances of success.
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Process Transparency
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Create step-by-step guides that explain what happens after they
              hire you. This reduces anxiety and helps prospects feel more
              comfortable moving forward.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Optimizing Bottom of Funnel Content
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          To maximize the effectiveness of your bottom-funnel content:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-muted-foreground">
              Make it easy to find and access
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-muted-foreground">
              Include clear calls-to-action
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-muted-foreground">
              Use compelling headlines and formatting
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-muted-foreground">
              Test different versions and track performance
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-muted-foreground">
              Update content regularly with fresh testimonials and case studies
            </span>
          </li>
        </ul>
      </div>

      <div className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Convert More Prospects with Strategic Content
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Bottom of funnel content is your final opportunity to convert
          prospects into clients. By addressing their concerns, providing social
          proof, and creating a clear path forward, you can significantly
          improve your conversion rates. At TrueNorth, we help law firms create
          compelling bottom-funnel content that drives results and grows their
          practices.
        </p>
      </div>
    </div>
  );

  return (
    <BlogPost
      title="Bottom of Funnel Content for Lawyers"
      excerpt="Create compelling bottom-funnel content that converts prospects into clients for your law firm."
      category="Content Marketing"
      date="Nov 20, 2024"
      author="TrueNorth Team"
      readTime="6 min read"
      content={content}
      icon={BookOpen}
      backgroundImage={BottomFunnelImg}
    />
  );
};

export default BottomFunnelContentLawyers;
