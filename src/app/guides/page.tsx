import { Metadata } from "next";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "EcobankPay Integration Guides",
  description:
    "Step-by-step guides for integrating EcobankPay payment solutions",
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Integration Guides
        </h1>
        <p className="text-lg text-muted-foreground">
          Step-by-step tutorials for implementing EcobankPay in your
          applications
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Practical Implementation Examples</AlertTitle>
        <AlertDescription>
          These guides provide practical, code-focused examples to help you
          implement EcobankPay for various payment methods and use cases.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Our integration guides are designed to provide you with clear,
          step-by-step instructions for implementing EcobankPay in your
          applications. Each guide includes code examples, recommended
          practices, and troubleshooting tips.
        </p>
        <p className="leading-7">
          Whether you're implementing mobile money payments, card transactions,
          or QR code solutions, these guides will help you get up and running
          quickly.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Basic setup and configuration</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>Initial configuration</li>
              <li>Authentication setup</li>
              <li>Environment preparation</li>
              <li>Testing sandbox access</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/guides/setup"
                className="text-primary text-sm hover:underline"
              >
                Read the setup guide →
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mobile Money</CardTitle>
            <CardDescription>Implement mobile wallet payments</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>MTN Mobile Money integration</li>
              <li>AirtelTigo Money workflows</li>
              <li>Telecel Cash implementation</li>
              <li>Transaction status handling</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/guides/mobile-money"
                className="text-primary text-sm hover:underline"
              >
                Explore mobile money integration →
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card Payments</CardTitle>
            <CardDescription>Accept credit and debit cards</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>VISA implementation</li>
              <li>MasterCard processing</li>
              <li>3D Secure handling</li>
              <li>Card tokenization</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/guides/card-payments"
                className="text-primary text-sm hover:underline"
              >
                Learn card integration →
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>QR Code Payments</CardTitle>
            <CardDescription>Implement scan-to-pay solutions</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>Dynamic QR generation</li>
              <li>Static QR implementation</li>
              <li>QR code styling</li>
              <li>Multi-currency support</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/guides/qr-code"
                className="text-primary text-sm hover:underline"
              >
                Set up QR payments →
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Practices</CardTitle>
            <CardDescription>Secure your integration</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>HMAC implementation</li>
              <li>Request validation</li>
              <li>Key management</li>
              <li>PCI compliance best practices</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/guides/security"
                className="text-primary text-sm hover:underline"
              >
                Review security guidelines →
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Testing</CardTitle>
            <CardDescription>Validate your implementation</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>Sandbox environment</li>
              <li>Test credentials</li>
              <li>Scenario testing</li>
              <li>Error simulation</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/guides/testing"
                className="text-primary text-sm hover:underline"
              >
                View testing procedures →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Link
          href="/guides/setup"
          className="text-primary underline hover:text-primary/80"
        >
          Next: Setup Guide →
        </Link>
      </div>
    </div>
  );
}
