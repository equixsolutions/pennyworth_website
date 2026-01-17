import ArrowRight from "@/assets/svg/Arrow_right.svg";
import { Button } from "@/components/ui/button";

function ContactSection() {
  const fields = ["Name", "Phone", "Email", "Subject"];
  return (
    <section className="bg-secondary px-5 md:px-10 py-20">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="md:text-body-lg text-body-sm leading-relaxed text-primary mb-8">
            Contact Form details
          </h3>

          <form className="space-y-6">
            {fields.map((label) => (
              <div key={label}>
                <input
                  type="text"
                  placeholder={label}
                  className="w-full border-b md:text-body-md text-body-xs leading-relaxed border-muted-foreground/40 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>
            ))}

            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border-b border-muted-foreground/40 md:text-body-md text-body-xs leading-relaxed py-3 text-sm resize-none focus:outline-none focus:border-primary"
              />
            </div>
          </form>

          <div className="mt-12">
            <p className="text-primary mb-4 md:text-body-md=bold text-body-sm-bold leading-relaxed">
              Join Pennywort today and elevate your production business to new
              heights of success.
            </p>
            <Button
              variant="heroPrimary"
              size="lg"
              className="group w-[250px] md:text-body-md text-body-sm leading-relaxed p-2 text-primary border border-primary md:px-6 md:py-3"
            >
              Please fill the form
              <ArrowRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="bg-muted-background  md:p-12">
          <h3 className="md:text-body-bold text-body-sm-bold leading-relaxed mb-6">
            Unlock unprecedented opportunities for your production company by
            registering with Pennywort.
          </h3>

          <div className="space-y-4 md:text-body-md text-body-sm leading-relaxed">
            <p>
              As a registered member, your company gains exclusive access to a
              stream of production orders directly from Pennywort. Once the
              straightforward registration process and business verification is
              completed, you can start receiving production orders aligned with
              Pennywort’s high standards and specifications.
            </p>

            <p>
              Our commitment to excellence is reflected not only in the products
              but also in the partnerships we build.
            </p>

            <p>
              Upon registration, Pennywort officials will conduct thorough
              inspections of your facility to ensure it meets our stringent
              quality and compliance requirements. Successful evaluations result
              in the issuance of a prestigious certificate.
            </p>

            <p>
              As a trusted production partner, you’ll experience a significant
              boost in both revenue and reputation. Pennywort goes beyond
              traditional partnerships — our QC officers actively assist you
              on-site during production, ensuring every step adheres to our
              meticulous instructions, guaranteeing top-notch quality for your
              manufactured goods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
