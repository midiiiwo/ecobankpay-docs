import { Metadata } from "next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, Link as LinkIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Webhook Notifications - EcobankPay API Documentation",
  description: "Understanding webhook notifications for EcobankPay payment events",
}

export default function WebhookPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Handling Payment Notifications
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to set up and handle EcobankPay webhook notifications
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          It is worth stressing the IPN notification from EcobankPay is not confirmation of a payment. Rather it is a prompt
          that an event of interest has happened to one of your invoices. It is your application&apos;s responsibility to query the
          EcobankPay gateway for details on the event using the status check endpoint.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Notification Options
        </h2>

        <p className="leading-7">
          Once the customer pays or cancels an invoice, depending on your site setup, EcobankPay can do two things:
        </p>

        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>Send an email informing you of the payment or cancellation</li>
          <li>Send a notification to an IPN (instant payment notification) URL for your application to take some automated action</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          How IPN Notifications Work
        </h2>

        <p className="leading-7">
          Here&apos;s how the IPN notification process works:
        </p>

        <ol className="ml-6 list-decimal space-y-4 my-6">
          <li className="leading-7">
            <p className="font-semibold">EcobankPay calls your IPN URL</p>
            <p>
              Once an invoice is paid or cancelled, EcobankPay does a GET to your IPN URL with the invoice_id parameter. Suppose your IPN url is
              <code className="mx-1 px-2 py-1 bg-muted rounded">https://ipn_url.ecobankpay.com.gh/notify</code>
              and a customer pays or cancels invoice with invoice ID AA123, EcobankPay will perform the GET request:
            </p>
            <div className="mt-2 mb-4 rounded-md bg-muted p-4">
              <code className="text-sm">https://ipn_url.ecobankpay.com.gh/notify?invoice_id=AA123</code>
            </div>
            <p>
              This call is meant to prompt your application that an event of interest has occurred with respect to this invoice.
            </p>
          </li>

          <li className="leading-7">
            <p className="font-semibold">Your application queries transaction status</p>
            <p>
              Your application will then make the GET call:
            </p>
            <div className="mt-2 mb-4 rounded-md bg-muted p-4">
              <code className="text-sm">https://pgw.paywithonline.com/v1/gateway/json_status_chk?invoice_id=AA123&merchant_key=YOUR_MERCHANT_KEY</code>
            </div>
            <p>
              to receive details of the event.
            </p>
          </li>

          <li className="leading-7">
            <p className="font-semibold">EcobankPay responds with transaction details</p>
            <p>
              EcobankPay responds to the query in the step above with a JSON object. Details of the response object are described as part of the status check endpoint.
            </p>
          </li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Sample Payment Notification Request
        </h2>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Request:</h3>
          <p className="text-sm font-semibold">Endpoint:</p>
          <div className="rounded-md bg-muted p-4">
            <code className="text-sm">https://pgw.paywithonline.com/v1/gateway/json_status_chk</code>
          </div>

          <p className="text-sm font-semibold mt-4">Method:</p>
          <div className="rounded-md bg-muted p-4">
            <code className="text-sm">GET</code>
          </div>

          <div className="overflow-x-auto rounded-md border mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 text-left">Parameter</th>
                  <th className="px-4 py-2 text-left">Required</th>
                  <th className="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">merchant_key</td>
                  <td className="px-4 py-2">Y</td>
                  <td className="px-4 py-2">Your unique assigned Merchant Key</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">invoice_id</td>
                  <td className="px-4 py-2">Y</td>
                  <td className="px-4 py-2">Invoice Id of the particular transaction whose details to check</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Best Practices for Webhook Handling
        </h2>

        <ul className="ml-6 list-disc space-y-2">
          <li className="leading-7">
            <span className="font-semibold">Acknowledge receipt:</span> Your webhook endpoint should return a 2xx HTTP status code as quickly as possible to acknowledge receipt of the webhook notification.
          </li>
          <li className="leading-7">
            <span className="font-semibold">Process asynchronously:</span> Process the webhook data asynchronously after acknowledging receipt, especially if the processing involves time-consuming operations.
          </li>
          <li className="leading-7">
            <span className="font-semibold">Implement retry logic:</span> Design your system to handle potential duplicate notifications, as webhook delivery may be retried in case of temporary failures.
          </li>
          <li className="leading-7">
            <span className="font-semibold">Secure your endpoint:</span> Ensure your webhook endpoint is properly secured, validate the incoming data, and verify that the notification is authentic.
          </li>
          <li className="leading-7">
            <span className="font-semibold">Handle all transaction status types:</span> Your webhook handler should be designed to process all possible transaction statuses (paid, cancelled, failed, etc.).
          </li>
          <li className="leading-7">
            <span className="font-semibold">Proper error logging:</span> Implement comprehensive error logging to troubleshoot issues with webhook processing.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Implementing the Webhook Handler
        </h2>

        <p className="leading-7">
          Below is a simplified code example of how you might implement a webhook handler in a Node.js Express application:
        </p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm overflow-x-auto">
{`const express = require('express');
const axios = require('axios');
const app = express();

// Webhook endpoint to receive EcobankPay notifications
app.get('/api/webhook/ecobankpay', async (req, res) => {
  try {
    // Get the invoice ID from the request
    const { invoice_id } = req.query;

    if (!invoice_id) {
      return res.status(400).send('Missing invoice_id parameter');
    }

    // Acknowledge receipt immediately
    res.status(200).send('Webhook received');

    // Process asynchronously
    processPaymentNotification(invoice_id).catch(err => {
      console.error('Error processing payment notification:', err);
    });
  } catch (error) {
    console.error('Webhook handler error:', error);
    // Still return 200 to acknowledge receipt
    if (!res.headersSent) {
      res.status(200).send('Webhook received with errors');
    }
  }
});

async function processPaymentNotification(invoiceId) {
  const MERCHANT_KEY = process.env.ECOBANKPAY_MERCHANT_KEY;

  // Query EcobankPay for transaction status
  const statusUrl = \`https://pgw.paywithonline.com/v1/gateway/json_status_chk?invoice_id=\${invoiceId}&merchant_key=\${MERCHANT_KEY}\`;

  const response = await axios.get(statusUrl);
  const paymentData = response.data;

  // Process based on transaction status
  switch(paymentData.status) {
    case 'paid':
      // Update order status, send confirmation email, etc.
      await updateOrderStatus(invoiceId, 'paid', paymentData);
      break;

    case 'cancelled':
      // Handle cancelled payment
      await updateOrderStatus(invoiceId, 'cancelled', paymentData);
      break;

    case 'failed':
      // Handle failed payment
      await updateOrderStatus(invoiceId, 'failed', paymentData);
      break;

    default:
      console.log(\`Unhandled payment status: \${paymentData.status} for invoice \${invoiceId}\`);
  }
}

async function updateOrderStatus(invoiceId, status, paymentData) {
  // Your implementation to update order in your database
  console.log(\`Updated order \${invoiceId} to status: \${status}\`);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
          </pre>
        </div>
      </div>
    </div>
  )
}
