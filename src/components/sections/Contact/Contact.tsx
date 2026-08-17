import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Github,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  XCircle,
} from "lucide-react";
import type { ContactFormValues } from "../../../types";
import { SectionHeading } from "../../ui/SectionHeading";
import { GlassCard } from "../../ui/GlassCard";
import { Button } from "../../ui/Button";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "sithu669315@gmail.com",
    href: "mailto:sithu669315@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "09-698912557",
    href: "tel:09-698912557",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Meiktila,Mandalay",
    href: undefined,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/sithu669315-hash",
    href: "https://github.com/sithu669315-hash",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS is not configured. Add your keys to .env — see .env.example.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        { publicKey },
      );

      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a role, a project, or just want to say hi? My inbox is open."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact details */}
          <div className="space-y-4 lg:col-span-2">
            {contactDetails.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <GlassCard className="flex items-center gap-4 p-5" hover>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dark-primary/10 text-dark-primary dark:text-dark-accent">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-light-muted dark:text-dark-muted">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-light-text dark:text-dark-text">
                      {value}
                    </p>
                  </div>
                </GlassCard>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          {/* Form */}
          <GlassCard className="p-6 sm:p-8 lg:col-span-3" hover={false}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium text-light-muted dark:text-dark-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register("name", {
                      required: "Please enter your name",
                    })}
                    aria-invalid={!!errors.name}
                    className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 text-sm text-light-text dark:text-dark-text outline-none transition-colors focus:border-dark-primary"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-light-muted dark:text-dark-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    aria-invalid={!!errors.email}
                    className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 text-sm text-light-text dark:text-dark-text outline-none transition-colors focus:border-dark-primary"
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-xs font-medium text-light-muted dark:text-dark-muted"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Add a subject" })}
                  aria-invalid={!!errors.subject}
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 text-sm text-light-text dark:text-dark-text outline-none transition-colors focus:border-dark-primary"
                  placeholder="Let's talk about..."
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-light-muted dark:text-dark-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: "Add a message",
                    minLength: {
                      value: 10,
                      message: "A little more detail helps",
                    },
                  })}
                  aria-invalid={!!errors.message}
                  className="w-full resize-none rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 text-sm text-light-text dark:text-dark-text outline-none transition-colors focus:border-dark-primary"
                  placeholder="Tell me a bit about what you're building..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={status === "loading"}
                icon={
                  status === "loading" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )
                }
                className="w-full sm:w-auto"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed bottom-6 left-1/2 z-[200] flex -translate-x-1/2 items-center gap-3 rounded-2xl glass-strong px-5 py-4 shadow-glass-dark ${
              status === "success" ? "text-green-500" : "text-red-500"
            }`}
            role="status"
          >
            {status === "success" ? (
              <CheckCircle2 size={18} />
            ) : (
              <XCircle size={18} />
            )}
            <span className="text-sm font-medium text-light-text dark:text-dark-text">
              {status === "success"
                ? "Message sent — I'll get back to you soon."
                : "Couldn't send that. Please try again or email me directly."}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
