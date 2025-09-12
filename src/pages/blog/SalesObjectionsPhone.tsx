import BlogPost from "@/components/BlogPost";
import { Phone } from "lucide-react";
import SalesObjectionsImg from "@/assets/Essential-tips-for-handling-sales-obejections-over-the-phone.jpg";

const SalesObjectionsPhone = () => {
  const content = (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
          Mastering Phone Sales Objections
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Phone sales can be challenging, but objections are actually
          opportunities in disguise. When a prospect raises an objection,
          they're engaging with you and showing interest in your product or
          service. The key is knowing how to handle these objections effectively
          to move the conversation forward.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          At TrueNorth, we've trained thousands of sales professionals to turn
          objections into closed deals. Here are the proven strategies that
          work.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          The Psychology Behind Objections
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Understanding why prospects object is the first step to handling them
          effectively. Most objections stem from one of these core concerns:
        </p>
        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">
                Fear of making the wrong decision:
              </strong>
              <span className="text-muted-foreground">
                {" "}
                Prospects want to ensure they're making the best choice for
                their business.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">Budget concerns:</strong>
              <span className="text-muted-foreground">
                {" "}
                They may not have the budget or need to justify the expense to
                decision-makers.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">Timing issues:</strong>
              <span className="text-muted-foreground">
                {" "}
                The timing might not be right for their business or they have
                other priorities.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong className="text-foreground">
                Trust and credibility:
              </strong>
              <span className="text-muted-foreground">
                {" "}
                They need to feel confident in your company and the value you
                provide.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          The LAER Method: Listen, Acknowledge, Explore, Respond
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          This proven framework helps you handle objections systematically and
          professionally:
        </p>

        <div className="space-y-6">
          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              1. Listen
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Don't interrupt or start formulating your response while the
              prospect is speaking. Give them your full attention and let them
              express their complete concern. This shows respect and helps you
              understand the real issue.
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              2. Acknowledge
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Validate their concern with phrases like "I understand your
              concern" or "That's a very valid point." This shows empathy and
              builds rapport, making them more receptive to your response.
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              3. Explore
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Ask clarifying questions to understand the objection better. "Can
              you help me understand what specifically concerns you about the
              pricing?" This helps you address the real issue rather than just
              the surface objection.
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              4. Respond
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Provide a solution that addresses their specific concern. Use
              evidence, testimonials, or case studies to support your response.
              Then ask a closing question to move the conversation forward.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Common Objections and How to Handle Them
        </h3>

        <div className="space-y-6">
          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              "It's too expensive"
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>Response:</strong> "I understand budget is always a
              consideration. Let me ask you this: what would it cost your
              business if you don't solve this problem? The ROI on our solution
              typically pays for itself within 3 months. Would you like me to
              show you the numbers?"
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              "I need to think about it"
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>Response:</strong> "I completely understand wanting to
              think it over. What specific aspects would you like to consider? I
              can provide additional information or connect you with a current
              client who faced similar concerns."
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              "We're already working with someone else"
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>Response:</strong> "That's great that you have a solution
              in place. Are you completely satisfied with your current results?
              Many of our clients started as referrals from people who were
              happy with their current provider but wanted to explore additional
              options."
            </p>
          </div>

          <div className="p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              "Now isn't the right time"
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>Response:</strong> "I understand timing is important. What
              would need to change for this to become a priority? Sometimes the
              best time to implement a solution is when you're not in crisis
              mode, so you can plan and execute properly."
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Advanced Objection Handling Techniques
        </h3>

        <div className="space-y-4">
          <div className="p-4 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              The Feel, Felt, Found Method
            </h4>
            <p className="text-muted-foreground text-sm">
              "I understand how you feel. Other clients have felt the same way.
              But what they found was..."
            </p>
          </div>

          <div className="p-4 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              The Assumptive Close
            </h4>
            <p className="text-muted-foreground text-sm">
              After handling an objection, assume the sale: "Great! Now that
              we've addressed that concern, shall we move forward with the
              implementation?"
            </p>
          </div>

          <div className="p-4 bg-surface-elevated rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              The Alternative Close
            </h4>
            <p className="text-muted-foreground text-sm">
              Give them choices: "Would you prefer to start with the basic
              package or the premium solution?"
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Transform Your Phone Sales Results
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Mastering objection handling is a skill that takes practice, but the
          results are worth it. At TrueNorth, we provide comprehensive sales
          training and support to help your team turn objections into
          opportunities and close more deals.
        </p>
      </div>
    </div>
  );

  return (
    <BlogPost
      title="Essential Tips for Handling Sales Objections Over the Phone"
      excerpt="Master the art of phone sales by learning how to effectively handle common objections and close more deals."
      category="Sales Strategy"
      date="Dec 10, 2024"
      author="TrueNorth Team"
      readTime="7 min read"
      content={content}
      icon={Phone}
      backgroundImage={SalesObjectionsImg}
    />
  );
};

export default SalesObjectionsPhone;
