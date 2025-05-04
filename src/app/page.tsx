import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  FileText,
  Landmark,
  Lock,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  EcobankPay API Documentation
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Complete documentation for integrating EcobankPay payment
                  gateway with your applications
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/docs">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/guides">Integration Guides</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/api">API Reference</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Features
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover the powerful capabilities of the EcobankPay payment
                  gateway
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mx-auto max-w-6xl">
                <Card>
                  <CardHeader className="space-y-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 mb-2">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Multiple Payment Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Process payments from MTN Mobile Money, AirtelTigo Money,
                      Telecel Cash, VISA and MasterCard.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="space-y-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 mb-2">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Secure Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      All transactions are secured with HMAC SHA-256 hashing and
                      secure key management.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="space-y-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 mb-2">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Detailed Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive documentation with code examples and
                      integration guides.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="space-y-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 mb-2">
                      <Landmark className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Instant Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Real-time payment notifications via webhooks and callback
                      URLs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} EcobankPay. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
