import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Facebook,
  MapPin, 
  Phone,
  Send,
  MessageSquare,
  Clock
} from "lucide-react";

export default function Contact() {
  return (
    <div className="container py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Let's collaborate on data projects and build something amazing together
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              I'm always excited to connect with fellow data enthusiasts, potential collaborators, 
              and anyone interested in discussing technology, machine learning, or innovative projects.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a 
                      href="mailto:tienthanhpq.phamquang@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      tienthanhpq.phamquang@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-muted-foreground">Usually within 24-48 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect on Social Media</h3>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://github.com/Thanhizme"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://www.linkedin.com/in/ph%E1%BA%A1m-quang-ti%E1%BA%BFn-th%C3%A0nh-7b651036a/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://www.facebook.com/tienthanhpq.phamquang"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <Facebook className="h-5 w-5" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project, idea, or just say hello!"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button asChild className="w-full">
                  <a href="mailto:tienthanhpq.phamquang@gmail.com">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </a>
                </Button>
              </form>

              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Or email me directly at{" "}
                  <a 
                    href="mailto:tienthanhpq.phamquang@gmail.com"
                    className="font-medium text-primary hover:underline"
                  >
                    tienthanhpq.phamquang@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <Card className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start a Conversation?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you have a data project in mind, want to collaborate on machine learning research, 
            or just want to connect with a fellow tech enthusiast, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:tienthanhpq.phamquang@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a 
                href="https://www.linkedin.com/in/ph%E1%BA%A1m-quang-ti%E1%BA%BFn-th%C3%A0nh-7b651036a/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a 
                href="https://www.facebook.com/tienthanhpq.phamquang"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="mr-2 h-5 w-5" />
                Message on Facebook
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* What I'm Looking For */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          What I'm Looking For
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Collaboration Opportunities</h3>
              <p className="text-sm text-muted-foreground">
                Data science projects, machine learning research, or interesting technical challenges.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Open Source Contributions</h3>
              <p className="text-sm text-muted-foreground">
                Contributing to data tools, ML libraries, or educational resources.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Networking & Mentorship</h3>
              <p className="text-sm text-muted-foreground">
                Connecting with professionals in data science, AI, and software development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}