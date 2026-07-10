import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, X } from "lucide-react";
import { useApply } from "./ApplyContext";

type FormState = {
  studentName: string;
  parentName: string;
  mobile: string;
  email: string;
  studentClass: string;
  message: string;
};

const initial: FormState = {
  studentName: "",
  parentName: "",
  mobile: "",
  email: "",
  studentClass: "",
  message: "",
};

function validate(v: FormState) {
  const e: Partial<Record<keyof FormState, string>> = {};
  if (!v.studentName.trim()) e.studentName = "Student name is required";
  if (!v.parentName.trim()) e.parentName = "Parent/guardian name is required";
  if (!/^\+?[0-9\s-]{8,15}$/.test(v.mobile.trim())) e.mobile = "Enter a valid mobile number";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email";
  if (!v.studentClass.trim()) e.studentClass = "Select a class";
  return e;
}

export function ApplyModal() {
  const { open, closeModal } = useApply();
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeModal]);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setValues(initial);
        setErrors({});
        setDone(false);
        setSubmitting(false);
      }, 200);
    }
  }, [open]);

  if (!open) return null;

  const setField = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setValues((s) => ({ ...s, [k]: v }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eMap = validate(values);
    setErrors(eMap);
    if (Object.keys(eMap).length) return;

    setSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      // Web3Forms access key — routes submissions to your registered email
      formData.append("access_key", "0dc2c1d3-f889-4a4d-a19b-cff9299d7c7f");
      // Give the email a meaningful subject line
      formData.append("subject", "New Admission Enquiry — Success Group Tuition");
      // Friendly sender name shown in inbox
      formData.append("from_name", "Success Group Tuition Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setDone(true);
      } else {
        // Surface the API error message under the submit button
        setErrors({ message: data.message ?? "Submission failed. Please try again." });
      }
    } catch {
      setErrors({ message: "Network error. Please check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Admission enquiry form"
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-border bg-card p-6 shadow-lift sm:rounded-3xl sm:p-8"
      >
        <button
          aria-label="Close"
          onClick={closeModal}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-surface"
        >
          <X className="h-4 w-4" />
        </button>

        {done ? (
          <div className="py-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-foreground">Enquiry received</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
              Thank you! Our admissions team will reach out within 24 hours to guide you through the next steps.
            </p>
            <button
              onClick={closeModal}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
                Admission Enquiry
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Apply to Success Group Tuition
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Share a few details and our team will get in touch shortly.
              </p>
            </div>

            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" noValidate>
              <Field label="Student full name" error={errors.studentName}>
                <input type="text" name="student_name" value={values.studentName} onChange={(e) => setField("studentName", e.target.value)} className={inputCls} placeholder="e.g. Aarav Sharma" />
              </Field>
              <Field label="Parent / Guardian name" error={errors.parentName}>
                <input type="text" name="parent_name" value={values.parentName} onChange={(e) => setField("parentName", e.target.value)} className={inputCls} placeholder="e.g. Priya Sharma" />
              </Field>
              <Field label="Mobile number" error={errors.mobile}>
                <input type="tel" name="mobile" value={values.mobile} onChange={(e) => setField("mobile", e.target.value)} className={inputCls} placeholder="+91 98765 43210" />
              </Field>
              <Field label="Email address" error={errors.email}>
                <input type="email" name="email" value={values.email} onChange={(e) => setField("email", e.target.value)} className={inputCls} placeholder="you@example.com" />
              </Field>
              <Field label="Student class / grade" error={errors.studentClass} full>
                <select name="student_class" value={values.studentClass} onChange={(e) => setField("studentClass", e.target.value)} className={inputCls}>
                  <option value="">Select class</option>
                  {["6","7","8","9","10","11 (Science)","12 (Science)"].map((c) => (
                    <option key={c} value={c}>Class {c}</option>
                  ))}
                </select>
              </Field>
              <Field label="Message" error={errors.message} full>
                <textarea rows={4} name="message" value={values.message} onChange={(e) => setField("message", e.target.value)} className={`${inputCls} resize-none`} placeholder="Anything specific you'd like us to know?" />
              </Field>

              <div className="sm:col-span-2 mt-2 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button type="button" onClick={closeModal} className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface">
                  Cancel
                </button>
                <button type="submit" disabled={submitting} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-lift disabled:opacity-70">
                  {submitting ? (<><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>) : "Submit enquiry"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const inputCls =
  "block w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20";

function Field({
  label,
  children,
  error,
  full,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-xs font-semibold text-foreground">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs font-medium text-destructive">{error}</span> : null}
    </label>
  );
}
