import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { useApply } from "./ApplyContext";

export function Footer() {
  const { openModal } = useApply();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface pt-16 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              Empowering students with knowledge and skills for academic excellence.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/successgt338/" },
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/successgroupsurat/" },
                { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@AmitSwainPhysics" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#courses", label: "Courses" },
                { href: "#faculty", label: "Faculty" },
                { href: "#gallery", label: "Gallery" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-foreground">{l.label}</a>
                </li>
              ))}
              <li>
                <button onClick={openModal} className="transition-colors hover:text-foreground">Apply Now</button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-ink-soft">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>VIP Road, FF-10,11& 20, Anaya Complex,
                  Bamroli Rd, nr. D-Mart, Surat, Gujarat 394221</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+919876543210" className="hover:text-foreground">+91 74051 62060 & +91 88663 73336</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:sesolution338@gmail.com" className="hover:text-foreground">sesolution338@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Mon–Sat · 10:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 border-t border-border pt-6 text-center text-xs text-ink-soft">
  <p>© {year} Success Group Tuition. All rights reserved.</p>
</div>
      </div>
    </footer>
  );
}
