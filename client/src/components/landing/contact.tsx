import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to submit");
      return response.json();
    },
    onSuccess: () => {
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <span className="text-cyan-500 font-bold text-sm tracking-wider uppercase mb-2 block">Contact</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Got questions, feedback, or partnership ideas? Drop us a message — we reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    className="min-h-[150px] bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-6 disabled:opacity-50"
                >
                  {submitMutation.isPending ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 md:p-8 h-full bg-white/5 border-white/10 backdrop-blur-md flex flex-col justify-center">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Support</h3>
              <p className="text-gray-400 mb-8">
                Prefer email or a quick call? We're happy to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:support@coby.ai" className="text-white hover:text-cyan-400 transition-colors font-medium text-lg">
                      support@coby.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-cyan-400 transition-colors font-medium text-lg">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Office</p>
                    <p className="text-white font-medium text-lg">
                      123 Blockchain Blvd<br />
                      San Francisco, CA 94103
                    </p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am-6pm PT</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
