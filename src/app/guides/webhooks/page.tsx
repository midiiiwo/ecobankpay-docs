import { Metadata } from "next"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "EcobankPay Webhooks Setup",
  description: "How to implement and handle EcobankPay payment webhooks",
}

export default function WebhooksGuidePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Webhooks Setup
        </h1>
        <p className="text-lg text-muted-foreground">
          Implement and handle EcobankPay payment notifications
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Real-time Payment Updates</AlertTitle>
        <AlertDescription>
          Webhooks allow your application to receive real-time notifications about payment events, enabling automated order processing and improved user experience.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          EcobankPay uses Instant Payment Notifications (IPNs) - also known as webhooks - to notify your application about payment events. These notifications are sent as HTTP POST requests to a URL you specify during the payment initiation.
        </p>
        <p className="leading-7">
          Key benefits of implementing webhooks:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Real-time updates on payment status changes</li>
          <li>Automated order processing workflows</li>
          <li>Reduced need for status polling</li>
          <li>Improved user experience with faster order confirmations</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          How EcobankPay Webhooks Work
        </h2>

        <div className="my-6">
          <ol className="space-y-4 ml-6 list-decimal">
            <li className="mt-2">
              <strong>Setup:</strong> You provide an <code>ipn_url</code> parameter when initiating a payment
            </li>
            <li className="mt-2">
              <strong>Payment Event:</strong> When a payment status changes (e.g., payment completed, cancelled, or failed), EcobankPay sends a notification
            </li>
            <li className="mt-2">
              <strong>Webhook Delivery:</strong> EcobankPay sends an HTTP POST request to your <code>ipn_url</code> with payment details
            </li>
            <li className="mt-2">
              <strong>Response:</strong> Your server should respond with HTTP 200 to acknowledge receipt
            </li>
            <li className="mt-2">
              <strong>Verification:</strong> You should verify the payment status via the status check API endpoint before fulfilling orders
            </li>
          </ol>
        </div>

        <div className="bg-muted p-4 rounded-md my-4">
          <p className="font-medium">Important:</p>
          <p className="text-sm mt-2">While webhooks provide immediate notifications, you should always verify the payment status through the status check endpoint before processing orders. The webhook serves as a prompt to check the status, not as definitive confirmation.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Setting Up Your Webhook Endpoint
        </h2>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          1. Create a Webhook URL
        </h3>
        <p className="leading-7">
          Implement an HTTP endpoint in your application that will receive POST requests from EcobankPay:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>The URL must be publicly accessible over the internet</li>
          <li>Must accept HTTP POST requests</li>
          <li>Should be secured with HTTPS</li>
          <li>Must return a 200 HTTP status code to acknowledge receipt</li>
        </ul>

        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <p className="mb-2 font-medium">Example Node.js Webhook Handler:</p>
          <pre>{`// Express.js example
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/ecobankpay-webhook', async (req, res) => {
  try {
    // 1. Log the webhook payload for debugging
    console.log('Received EcobankPay webhook:', req.body);

    // 2. Extract payment details
    const { invoice_id, status, tx_reference } = req.body;

    // 3. Verify payment status using status check API
    // (Important: Always verify before processing)
    const paymentStatus = await verifyPaymentStatus(invoice_id);

    // 4. Update your database and business logic based on status
    if (paymentStatus === 'paid') {
      // Process the order
      await updateOrderStatus(invoice_id, 'paid');
      // Additional business logic
    }

    // 5. Always return 200 to acknowledge receipt
    return res.status(200).send('Webhook received');
  } catch (error) {
    console.error('Error processing webhook:', error);
    // Still return 200 to prevent retries - log the error for investigation
    return res.status(200).send('Webhook received with processing error');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));`}</pre>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          2. Include IPN URL in Payment Requests
        </h3>
        <p className="leading-7">
          When initiating a payment, include your webhook URL in the <code>ipn_url</code> parameter:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <pre>{`{
  "merchant_key": "abcdef1234-f5d6-4931-8544-58dc97a5",
  "invoice_id": "INV12345",
  "total": 10.00,
  "description": "Payment for Order #12345",
  "ipn_url": "https://yourwebsite.com/api/ecobankpay-webhook",
  "success_url": "https://yourwebsite.com/payment/success",
  "cancelled_url": "https://yourwebsite.com/payment/cancelled"
}`}</pre>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          3. Handling Payment Notifications
        </h3>
        <p className="leading-7">
          When a customer completes, cancels, or fails a payment, EcobankPay will send a notification to your <code>ipn_url</code> with the following information:
        </p>
        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Parameter</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">invoice_id</td>
                <td className="px-4 py-2">Your unique transaction ID provided in the initial request</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">tx_reference</td>
                <td className="px-4 py-2">EcobankPay's unique transaction reference</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">status</td>
                <td className="px-4 py-2">Payment status (paid, cancelled, failed, awaiting_payment)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">amount</td>
                <td className="px-4 py-2">Transaction amount</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">status_reason</td>
                <td className="px-4 py-2">Additional information about the status (mainly for failed payments)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <p className="mb-2 font-medium">Example Webhook Payload:</p>
          <pre>{`{
  "invoice_id": "INV12345",
  "tx_reference": "ECO123456789",
  "status": "paid",
  "amount": 10.00,
  "status_reason": "",
  "payment_method": "mtn_mobile_money",
  "payment_time": "2023-03-28T14:22:30Z"
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Verifying Webhook Authenticity
        </h2>

        <p className="leading-7">
          To ensure that webhook notifications are genuinely from EcobankPay, you should:
        </p>

        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>
            <strong>Verify the transaction:</strong> Call the status check API to confirm the payment status
            <div className="mt-2 ml-6">
              <code>GET https://pgw.paywithonline.com/v1/gateway/json_status_chk?invoice_id=INV12345&merchant_key=YOUR_MERCHANT_KEY</code>
            </div>
          </li>
          <li>
            <strong>Validate data consistency:</strong> Ensure the details in the webhook match your records (invoice ID, amount)
          </li>
          <li>
            <strong>Implement IP whitelisting:</strong> Configure your firewall to only accept webhook requests from EcobankPay's IP ranges (contact support for current ranges)
          </li>
        </ol>

        <div className="bg-muted p-4 rounded-md my-4">
          <p className="font-medium">Security Tip:</p>
          <p className="text-sm mt-2">Never process orders solely based on webhook notifications. Always verify the payment status through the official API endpoint to prevent processing fraudulent orders.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Handling Webhook Failures
        </h2>

        <p className="leading-7">
          EcobankPay employs a retry mechanism for webhook deliveries:
        </p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>If your endpoint returns a non-200 status code, EcobankPay will attempt to redeliver the webhook</li>
          <li>Retries occur on a diminishing frequency schedule over 24 hours</li>
          <li>Implement idempotency in your webhook handler to prevent duplicate processing</li>
          <li>Even if webhooks fail, you can still poll the status check endpoint to get payment updates</li>
        </ul>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Implementing Idempotency
        </h3>

        <p className="leading-7">
          Your webhook handler should be idempotent (able to process the same notification multiple times without side effects):
        </p>

        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <pre>{`// Example idempotent webhook handler logic
async function processWebhook(paymentData) {
  const { invoice_id, status } = paymentData;

  // Get current order status from your database
  const order = await getOrderByInvoiceId(invoice_id);

  // Only process if:
  // 1. Order exists
  // 2. Order is in a state that can transition to the new state
  // 3. Payment status is verified via API
  if (order && canTransitionTo(order.status, status)) {
    // Verify payment status via API
    const verifiedStatus = await verifyPaymentStatus(invoice_id);

    if (verifiedStatus === status) {
      // Update order status - use a transaction if possible
      await updateOrderStatus(invoice_id, status);

      // Log the successful processing
      logWebhookProcessed(invoice_id, status);
    }
  }
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Testing Webhooks
        </h2>

        <p className="leading-7">
          To test your webhook implementation:
        </p>

        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>
            <strong>Use ngrok or similar tools:</strong> For local development, create a temporary public URL that forwards to your local server
          </li>
          <li>
            <strong>Create a test endpoint:</strong> Implement a separate endpoint for testing that logs all received payloads
          </li>
          <li>
            <strong>Make test payments:</strong> Use the EcobankPay sandbox environment to generate real webhook notifications
          </li>
          <li>
            <strong>Verify handling:</strong> Ensure your system correctly processes different payment statuses (paid, cancelled, failed)
          </li>
        </ol>

        <div className="my-4 p-4 bg-muted rounded-md">
          <p className="mb-2 font-medium">Testing with ngrok:</p>
          <pre>{`# 1. Install ngrok
npm install -g ngrok

# 2. Start your local server
npm start

# 3. Start ngrok to forward to your local port
ngrok http 3000

# 4. Use the generated ngrok URL as your ipn_url
# Example: https://a1b2c3d4.ngrok.io/api/ecobankpay-webhook`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Webhook Best Practices
        </h2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Respond to webhook requests quickly (under 5 seconds) to prevent timeouts</li>
          <li>Process webhooks asynchronously for complex operations</li>
          <li>Implement comprehensive logging for all webhook events</li>
          <li>Set up monitoring and alerts for webhook processing failures</li>
          <li>Always verify payment status through the API before fulfilling orders</li>
          <li>Handle all possible payment statuses in your implementation</li>
          <li>Test your webhook implementation thoroughly in the sandbox environment</li>
        </ul>
      </div>

      <div className="flex justify-between mt-10">
        <Link href="/guides/security" className="text-primary underline hover:text-primary/80">
          ← Security Best Practices
        </Link>
        <Link href="/guides/testing" className="text-primary underline hover:text-primary/80">
          Testing Guide →
        </Link>
      </div>
    </div>
  )
}
