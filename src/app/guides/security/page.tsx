import { Metadata } from "next"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "EcobankPay Security Best Practices",
  description: "Security guidelines for integrating EcobankPay payment solutions",
}

export default function SecurityGuidePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Security Best Practices
        </h1>
        <p className="text-lg text-muted-foreground">
          Guidelines for securing your EcobankPay integration
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Security Is Critical</AlertTitle>
        <AlertDescription>
          Payment integrations require strong security measures. Following these best practices helps protect both your business and your customers.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Security is a critical aspect of any payment integration. This guide covers key security best practices for integrating with EcobankPay, focusing on:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>API authentication and validation</li>
          <li>Secure hash implementation</li>
          <li>Safe credential management</li>
          <li>Transaction verification</li>
          <li>Secure communication</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          API Authentication
        </h2>

        <p className="leading-7">
          EcobankPay uses a combination of API keys and secure hashing to authenticate requests:
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Merchant Key Management
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Your Merchant Key uniquely identifies your account with EcobankPay</li>
          <li>Never share your Merchant Key in public client-side code or repositories</li>
          <li>Store your Merchant Key in secure environment variables or a configuration management system</li>
          <li>Rotate your keys immediately if they are compromised</li>
        </ul>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Secure Hash Implementation (HMAC)
        </h3>
        <p className="leading-7">
          The secure_hash parameter is critical for ensuring the integrity of your API requests:
        </p>
        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Step</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">1</td>
                <td className="px-4 py-2">Sort all request parameters alphabetically by parameter name</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">2</td>
                <td className="px-4 py-2">Concatenate the key-value pairs in the format "key1=value1&key2=value2"</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">3</td>
                <td className="px-4 py-2">Create an HMAC SHA-256 hash using your Merchant Secret as the key</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">4</td>
                <td className="px-4 py-2">Convert the hash to a hexadecimal string</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">5</td>
                <td className="px-4 py-2">Include this value as the secure_hash parameter in your request</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <p className="mb-2 font-medium">Example HMAC Implementation:</p>
          <pre>{`// Sample Node.js HMAC implementation
const crypto = require('crypto');

function generateSecureHash(params, merchantSecret) {
  // 1. Remove secure_hash if it exists in the params
  const { secure_hash, ...restParams } = params;

  // 2. Sort parameters alphabetically
  const sortedParams = Object.keys(restParams).sort().reduce(
    (obj, key) => {
      obj[key] = restParams[key];
      return obj;
    },
    {}
  );

  // 3. Create parameter string
  const paramString = Object.entries(sortedParams)
    .map(([key, value]) => \`\${key}=\${value}\`)
    .join('&');

  // 4. Create HMAC SHA-256 hash
  const hmac = crypto.createHmac('sha256', merchantSecret);
  hmac.update(paramString);

  // 5. Return hex digest
  return hmac.digest('hex');
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Secure Storage of Credentials
        </h2>

        <p className="leading-7">
          Follow these practices for securely storing your EcobankPay credentials:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Never hardcode Merchant Keys or Secrets in your application code</li>
          <li>Use environment variables, encrypted configuration files, or a secure vault service</li>
          <li>Implement proper access controls to limit who can access these credentials</li>
          <li>Avoid storing credentials in version control systems</li>
          <li>Consider using a secrets management service like AWS Secrets Manager, HashiCorp Vault, or Azure Key Vault</li>
        </ul>

        <div className="bg-muted p-4 rounded-md my-4">
          <p className="font-medium">Environment Variables Example:</p>
          <p className="text-sm mt-2">Use environment variables to securely store your credentials:</p>
          <pre className="text-sm mt-1">{`# .env file (not committed to version control)
ECOBANKPAY_MERCHANT_KEY=abcdef1234-f5d6-4931-8544-58dc97a5
ECOBANKPAY_MERCHANT_SECRET=your-merchant-secret

# In your application
const merchantKey = process.env.ECOBANKPAY_MERCHANT_KEY;
const merchantSecret = process.env.ECOBANKPAY_MERCHANT_SECRET;`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Transaction Verification
        </h2>

        <p className="leading-7">
          Always verify transaction statuses to prevent fraud and ensure payment completion:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Double-check payment status:</strong> Always verify payment status through the status check endpoint before fulfilling orders</li>
          <li><strong>Don't rely solely on IPN:</strong> Instant Payment Notifications (IPNs) should be treated as prompts to check status, not as confirmation</li>
          <li><strong>Validate IPN requests:</strong> Verify that IPN notifications are genuine by checking their origin and content</li>
          <li><strong>Implement idempotency:</strong> Ensure your system can handle repeated notifications for the same transaction without duplicate processing</li>
        </ul>

        <div className="my-4 p-4 bg-muted rounded-md">
          <p className="mb-2 font-medium">Status Check Endpoint:</p>
          <code>GET https://pgw.paywithonline.com/v1/gateway/json_status_chk?invoice_id=INV12345&merchant_key=YOUR_MERCHANT_KEY</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Secure Communication
        </h2>

        <p className="leading-7">
          Ensure all communication with EcobankPay's API is secured:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Always use HTTPS:</strong> Never make API calls over unencrypted HTTP</li>
          <li><strong>Validate SSL certificates:</strong> Ensure your client verifies SSL certificates to prevent man-in-the-middle attacks</li>
          <li><strong>Set reasonable timeouts:</strong> Configure appropriate connection and request timeouts</li>
          <li><strong>Implement retry logic:</strong> Use exponential backoff for retries in case of network failures</li>
        </ul>

        <div className="bg-muted p-4 rounded-md my-4">
          <p className="font-medium">TLS Implementation:</p>
          <p className="text-sm mt-2">Always verify TLS certificates and use modern TLS versions (TLS 1.2 or later):</p>
          <pre className="text-sm mt-1">{`// Node.js example with Axios
const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://pgw.paywithonline.com/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
  // Enforce certificate validation
  httpsAgent: new https.Agent({
    rejectUnauthorized: true
  })
});`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Additional Security Measures
        </h2>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Request Validation
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Validate all inputs before sending them to EcobankPay</li>
          <li>Implement proper data sanitization to prevent injection attacks</li>
          <li>Verify that invoice IDs are unique to prevent duplicate charges</li>
          <li>Validate amount ranges to prevent unusually small or large transactions</li>
        </ul>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Logging and Monitoring
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Implement comprehensive logging for all payment operations</li>
          <li>Monitor for unusual transaction patterns that might indicate fraud</li>
          <li>Log API request and response metadata, but never log sensitive data like card details</li>
          <li>Set up alerts for failed transactions, authentication errors, or unusual activity</li>
        </ul>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          PCI Compliance Considerations
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Use EcobankPay's hosted checkout pages to minimize PCI DSS compliance requirements</li>
          <li>Never store, log, or transmit full card details in your systems</li>
          <li>For direct card integrations, ensure your systems comply with PCI DSS requirements</li>
          <li>Regularly review and update your security measures to maintain compliance</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Security Checklist
        </h2>

        <p className="leading-7">
          Use this checklist to ensure your EcobankPay integration is secure:
        </p>
        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Category</th>
                <th className="px-4 py-2 text-left font-medium">Security Measure</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Authentication</td>
                <td className="px-4 py-2">Correctly implement HMAC SHA-256 for all requests</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Credential Storage</td>
                <td className="px-4 py-2">Store API keys and secrets securely using environment variables or a vault service</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Transaction Verification</td>
                <td className="px-4 py-2">Verify all transactions through the status check endpoint</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Communication</td>
                <td className="px-4 py-2">Use HTTPS for all API calls with proper certificate validation</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Input Validation</td>
                <td className="px-4 py-2">Validate and sanitize all user inputs</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Logging</td>
                <td className="px-4 py-2">Implement secure logging that excludes sensitive data</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Error Handling</td>
                <td className="px-4 py-2">Implement proper error handling without exposing sensitive details</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Monitoring</td>
                <td className="px-4 py-2">Set up alerts for unusual transaction patterns</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <Link href="/guides/qr-code" className="text-primary underline hover:text-primary/80">
          ← QR Code Payments
        </Link>
        <Link href="/guides/webhooks" className="text-primary underline hover:text-primary/80">
          Webhooks Setup →
        </Link>
      </div>
    </div>
  )
}
