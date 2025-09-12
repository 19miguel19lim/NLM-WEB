import BlogPost from "@/components/BlogPost";
import { BookOpen } from "lucide-react";
import MiddleFunnelImg from "@/assets/middle-of-funnel-content-for-lawyers.jpg";

const MiddleFunnelContentLawyers = () => {
  const content = (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
          Middle of Funnel Content for Lawyers
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Middle of funnel content is designed for prospects who have identified
          their legal need and are actively researching solutions. This content
          should educate, build trust, and position your firm as the expert
          choice while addressing common concerns and objections.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          At TrueNorth, we've helped law firms create compelling middle-funnel
          content that nurtures prospects and builds the trust necessary to
          convert them into clients.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Understanding the Middle of Funnel
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Middle of funnel prospects are characterized by:
        </p>
        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">
                Awareness of their legal issue:
              </strong>
              <span className="text-muted-foreground">
                {" "}
                They know they need legal help but may not understand all their
                options.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">
                Active research phase:
              </strong>
              <span className="text-muted-foreground">
                {" "}
                They're comparing law firms, reading reviews, and evaluating
                their options.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">Need for education:</strong>
              <span className="text-muted-foreground">
                {" "}
                They want to understand their situation better and learn about
                potential outcomes.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">
                Building trust and credibility:
              </strong>
              <span className="text-muted-foreground">
                {" "}
                They need to feel confident in your expertise and ability to
                help them.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
          Essential Middle of Funnel Content Types
        </h3>

        <div className="space-y-8">
          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              1. Educational Blog Posts and Articles
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Create comprehensive, educational content that helps prospects
              understand their legal situation, potential outcomes, and the
              process involved. This positions you as a knowledgeable expert
              while providing genuine value.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="text-sm text-accent font-medium mb-2">
                Content Ideas:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "What to Expect During Your Personal Injury Case"</li>
                <li>• "Understanding the Divorce Process in [Your State]"</li>
                <li>
                  • "How to Prepare for Your Criminal Defense Consultation"
                </li>
                <li>• "Common Mistakes to Avoid in Estate Planning"</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              2. Downloadable Guides and Checklists
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Offer valuable resources that prospects can download in exchange
              for their contact information. This helps you capture leads while
              providing genuine value.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="text-sm text-accent font-medium mb-2">Examples:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "Personal Injury Claim Checklist"</li>
                <li>• "Divorce Preparation Guide"</li>
                <li>• "Estate Planning Worksheet"</li>
                <li>• "Business Formation Checklist"</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              3. Video Content and Webinars
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Video content allows prospects to see and hear you, building
              personal connection and trust. Webinars provide opportunities for
              interactive education and direct engagement.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="text-sm text-accent font-medium mb-2">
                Video Types:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Educational videos explaining legal concepts</li>
                <li>• "Frequently Asked Questions" video series</li>
                <li>• Case study walkthroughs (with permission)</li>
                <li>• Live Q&A sessions and webinars</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              4. Attorney Profiles and Credentials
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Detailed attorney profiles help prospects understand your
              background, experience, and approach to handling cases. This
              builds credibility and helps them feel confident in your
              abilities.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="text-sm text-accent font-medium mb-2">
                Key Elements:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Education and professional background</li>
                <li>• Years of experience and practice areas</li>
                <li>• Notable cases and achievements</li>
                <li>• Professional memberships and certifications</li>
                <li>• Personal philosophy and approach to law</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              5. Client Success Stories (Without Confidential Details)
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Share general success stories that demonstrate your expertise and
              results without revealing confidential client information. This
              provides social proof and builds confidence.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="text-sm text-accent font-medium mb-2">
                Story Elements:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • General situation description (no identifying details)
                </li>
                <li>• Legal challenges faced</li>
                <li>• Your approach and strategy</li>
                <li>• Positive outcome achieved</li>
                <li>• Client satisfaction and feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Content Strategy Best Practices
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Address Common Concerns
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Identify the most common questions and concerns your prospects
              have and create content that directly addresses these issues. This
              shows you understand their situation.
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Use Clear, Accessible Language
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Avoid legal jargon and complex terminology. Write in plain English
              that your prospects can easily understand and relate to their
              situation.
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Provide Actionable Information
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Give prospects practical steps they can take or information they
              can use to better understand their situation and make informed
              decisions.
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Include Clear Calls-to-Action
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Guide prospects toward the next step, whether it's scheduling a
              consultation, downloading a resource, or contacting your firm for
              more information.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Building Trust Through Content
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Trust is crucial in the middle of funnel stage. Here's how to build it
          through your content:
        </p>
        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">
                Demonstrate expertise:
              </strong>
              <span className="text-muted-foreground">
                {" "}
                Show deep knowledge of your practice area through detailed,
                accurate content.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">Be transparent:</strong>
              <span className="text-muted-foreground">
                {" "}
                Address potential challenges and limitations honestly rather
                than overselling.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">Show empathy:</strong>
              <span className="text-muted-foreground">
                {" "}
                Acknowledge the emotional aspects of legal issues and show
                understanding.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">Provide value first:</strong>
              <span className="text-muted-foreground">
                {" "}
                Focus on helping prospects understand their situation before
                promoting your services.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Measuring Middle of Funnel Success
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Track these metrics to measure the effectiveness of your middle-funnel
          content:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-muted-foreground">
              Content engagement rates and time on page
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-muted-foreground">
              Lead capture rates from downloadable content
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-muted-foreground">
              Consultation request rates
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-muted-foreground">
              Email list growth and engagement
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-muted-foreground">
              Conversion rates from middle to bottom funnel
            </span>
          </li>
        </ul>
      </div>

      <div className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Nurture Prospects with Strategic Content
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Middle of funnel content is your opportunity to educate, build trust,
          and position your firm as the expert choice. By providing valuable,
          educational content that addresses your prospects' concerns and
          questions, you can nurture them through the decision-making process
          and increase your chances of converting them into clients. At
          TrueNorth, we help law firms create comprehensive content strategies
          that build trust and drive conversions.
        </p>
      </div>
    </div>
  );

  return (
    <BlogPost
      title="Middle of Funnel Content for Lawyers"
      excerpt="Develop effective middle-funnel content that nurtures prospects and builds trust in your legal services."
      category="Content Marketing"
      date="Nov 1, 2024"
      author="TrueNorth Team"
      readTime="5 min read"
      content={content}
      icon={BookOpen}
      backgroundImage={MiddleFunnelImg}
    />
  );
};

export default MiddleFunnelContentLawyers;
