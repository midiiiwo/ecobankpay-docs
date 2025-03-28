import { Metadata } from "next"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Prerequisites - EcobankPay API Documentation",
  description: "Learn about the requirements for integrating EcobankPay",
}

export default function PrerequisitesPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Prerequisites
        </h1>
        <p className="text-lg text-muted-foreground">
          What you need before integrating with EcobankPay
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          To successfully complete the integration and send requests, the following details are required as described in the table below.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Requirements
        </h2>

        <div className="overflow-x-auto rounded-md border">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Requirement</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Merchant Key</td>
                <td className="px-4 py-2">This is a unique Key created by EcobankPay and assigned to third parties for integration.</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Secret Key</td>
                <td className="px-4 py-2">A confidential key used for creating secure hash signatures. This will be provided as part of the registration process.</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Developer Environment</td>
                <td className="px-4 py-2">A development environment with the capability to make HTTP requests and handle JSON responses.</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Secure Website</td>
                <td className="px-4 py-2">A secure website (HTTPS) for handling payment redirects and notifications.</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">IPN Endpoint</td>
                <td className="px-4 py-2">A publicly accessible endpoint for receiving Instant Payment Notifications.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Technical Requirements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>API Tools</CardTitle>
              <CardDescription>Tools for testing and development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">
                We recommend having the following tools for development and testing:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>API Client (Postman, Insomnia, etc.)</li>
                <li>JSON Parser/Validator</li>
                <li>HMAC SHA-256 Hash Generator</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Programming Knowledge</CardTitle>
              <CardDescription>Skills required for integration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">
                The following technical knowledge is recommended:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>RESTful API Concepts</li>
                <li>HTTP/HTTPS Protocols</li>
                <li>JSON Data Format</li>
                <li>Cryptographic Hashing (SHA-256)</li>
                <li>Webhook Implementation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Registration Process
        </h2>

        <ol className="ml-6 list-decimal [&>li]:mt-2">
          <li>
            Contact EcobankPay to start the merchant registration process
          </li>
          <li>
            Complete the merchant application form with your business details
          </li>
          <li>
            Upon approval, you will receive your Merchant Key and Secret Key
          </li>
          <li>
            Configure your test environment using the provided credentials
          </li>
          <li>
            Complete integration testing with test transactions
          </li>
          <li>
            After successful testing, receive production credentials
          </li>
          <li>
            Deploy your integration to production
          </li>
        </ol>

        <Alert className="mt-6">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            Your merchant account needs to be properly configured before you can receive payments. Please contact EcobankPay support if you encounter any issues during the registration process.
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Environment URLs
        </h2>

        <div className="overflow-x-auto rounded-md border">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Environment</th>
                <th className="px-4 py-2 text-left font-medium">Base URL</th>
                <th className="px-4 py-2 text-left font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Testing</td>
                <td className="px-4 py-2">https://test-pgw.paywithonline.com/v1/</td>
                <td className="px-4 py-2">For integration testing and development</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Production</td>
                <td className="px-4 py-2">https://pgw.paywithonline.com/v1/</td>
                <td className="px-4 py-2">For live transactions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-7 mt-4">
          During development, use the testing environment to validate your integration without processing real payments. Once your integration is complete and verified, you will be provided with production credentials to process live transactions.
        </p>
      </div>

      <div className="flex justify-end">
        <Link href="/docs/integration" className="text-primary underline hover:text-primary/80">
          Next: Integration Guide →
        </Link>
      </div>
    </div>
  )
}
