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
  title: "EcobankPay API Documentation",
  description: "Learn how to integrate EcobankPay payment gateway",
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          EcobankPay Documentation
        </h1>
        <p className="text-lg text-muted-foreground">
          Complete guide to integrating EcobankPay payment gateway
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>
          Welcome to the EcobankPay Integration Documentation
        </AlertTitle>
        <AlertDescription>
          This document describes in detail how to integrate the EcobankPay
          gateway checkout to collect customer payments from your website or
          mobile app.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Welcome to the EcobankPay Integration Documentation. This guide will
          help you understand and implement our payment gateway in your
          applications.
        </p>
        <p className="leading-7">
          You can use our API to process payments from MTN Mobile Money,
          AirtelTigo Money, Telecel Cash, VISA and MasterCard and QRs.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Integration Options
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Direct Checkout v1.0</CardTitle>
              <CardDescription>
                Simplified integration for quick implementation
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-4">
                Our Direct Checkout option provides a streamlined integration
                process with minimal configuration requirements.
              </p>
              <Link
                href="/docs/integration/direct-checkout"
                className="text-primary underline hover:text-primary/80"
              >
                View Direct Checkout Documentation
              </Link>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader>
              <CardTitle>Gateway Overview</CardTitle>
              <CardDescription>
                Advanced integration with more control
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-4">
                The Semi-Direct option provides more control over the payment
                process with additional configuration options.
              </p>
              <Link
                href="/docs/integration"
                className="text-primary underline hover:text-primary/80"
              >
                View Semi-Direct Integration Documentation
              </Link>
            </CardContent>
          </Card> */}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Prerequisites</CardTitle>
            <CardDescription>
              What you need before starting integration
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>Merchant Key (provided by EcobankPay)</li>
              <li>Understanding of RESTful APIs</li>
              <li>Basic knowledge of JSON</li>
              <li>Development environment to test API calls</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Integration Steps</CardTitle>
            <CardDescription>
              Key steps for successful integration
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Obtain your merchant key</li>
              <li>Implement the payment request endpoint</li>
              <li>Create a secure hash for transactions</li>
              <li>Handle success and failure callbacks</li>
              <li>Set up notification webhooks</li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Document History
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Version</th>
                <th className="px-4 py-2 text-left font-medium">Date</th>
                <th className="px-4 py-2 text-left font-medium">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">2.1.3 Update</td>
                <td className="px-4 py-2">3rd April 2025</td>
                <td className="px-4 py-2">Engineering Team</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">2.1.2 Update</td>
                <td className="px-4 py-2">17th May 2022</td>
                <td className="px-4 py-2">Engineering Team</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">2.1.1 Review</td>
                <td className="px-4 py-2">30th June, 2021</td>
                <td className="px-4 py-2">Engineering Team</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">2.1.0 Review</td>
                <td className="px-4 py-2">31st March, 2020</td>
                <td className="px-4 py-2">Engineering Team</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">2.1</td>
                <td className="px-4 py-2">17th January, 2020</td>
                <td className="px-4 py-2">Engineering Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          href="/docs/prerequisites"
          className="text-primary underline hover:text-primary/80"
        >
          Next: Prerequisites →
        </Link>
      </div>
    </div>
  );
}
