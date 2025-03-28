import { Metadata } from "next"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Sample Request Code - EcobankPay API Documentation",
  description: "Code examples for implementing EcobankPay payment requests in different programming languages",
}

export default function SampleRequestCodePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Sample Request Code
        </h1>
        <p className="text-lg text-muted-foreground">
          Implementation examples in various programming languages
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>
          The following code examples demonstrate how to create payment requests to the EcobankPay API in different programming languages.
          Make sure to replace the placeholder values with your actual merchant credentials and order details.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Payment Request Examples
        </h2>

        <Tabs defaultValue="nodejs" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="nodejs">Node.js</TabsTrigger>
            <TabsTrigger value="php">PHP</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="java">Java</TabsTrigger>
          </TabsList>
          <TabsContent value="nodejs" className="rounded-md border p-4 mt-2">
            <h3 className="text-lg font-semibold mb-2">Node.js Example</h3>
            <p className="text-sm text-muted-foreground mb-4">Using Axios for HTTP requests and crypto for hash generation</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`const axios = require('axios');
const crypto = require('crypto');

async function createPaymentRequest() {
  // Your EcobankPay merchant credentials
  const merchantKey = 'your-merchant-key';
  const secretKey = 'your-secret-key'; // Provided by EcobankPay

  // Order details
  const invoiceId = 'INV-' + Date.now(); // Generate a unique invoice ID
  const total = '100.00';
  const description = 'Payment for order #12345';

  // Customer information
  const customerName = 'John Doe';
  const customerEmail = 'john.doe@example.com';
  const customerPhone = '233201234567';

  // Callback URLs
  const successUrl = 'https://your-website.com/success';
  const cancelledUrl = 'https://your-website.com/cancel';
  const ipnUrl = 'https://your-website.com/ipn-notification';

  // Create secure hash
  const dataToHash = \`invoice_id=\${invoiceId}&merchant_key=\${merchantKey}&total=\${total}\`;
  const secureHash = crypto.createHmac('sha256', secretKey)
                          .update(dataToHash)
                          .digest('hex');

  // Request payload
  const payload = {
    merchant_key: merchantKey,
    invoice_id: invoiceId,
    total: total,
    description: description,
    name: customerName,
    email: customerEmail,
    number: customerPhone,
    success_url: successUrl,
    cancelled_url: cancelledUrl,
    ipn_url: ipnUrl,
    generate_checkout_url: true,
    secure_hash: secureHash
  };

  try {
    // Send payment request to EcobankPay
    const response = await axios.post(
      'https://pgw.paywithonline.com/v1/mobile_agents_v2',
      payload,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Payment request successful:');
    console.log(response.data);

    // If successful, redirect the customer to the checkout URL
    if (response.data.success) {
      console.log('Redirect customer to:', response.data.url);
      // In a web application, you would redirect the user:
      // res.redirect(response.data.url);
    }

    return response.data;
  } catch (error) {
    console.error('Error creating payment request:');
    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }
    throw error;
  }
}

// Call the function
createPaymentRequest().catch(err => {
  console.error('Payment request failed:', err);
});`}
            </pre>
          </TabsContent>
          <TabsContent value="php" className="rounded-md border p-4 mt-2">
            <h3 className="text-lg font-semibold mb-2">PHP Example</h3>
            <p className="text-sm text-muted-foreground mb-4">Using cURL for HTTP requests</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`<?php
function createPaymentRequest() {
  // Your EcobankPay merchant credentials
  $merchantKey = 'your-merchant-key';
  $secretKey = 'your-secret-key'; // Provided by EcobankPay

  // Order details
  $invoiceId = 'INV-' . time(); // Generate a unique invoice ID
  $total = '100.00';
  $description = 'Payment for order #12345';

  // Customer information
  $customerName = 'John Doe';
  $customerEmail = 'john.doe@example.com';
  $customerPhone = '233201234567';

  // Callback URLs
  $successUrl = 'https://your-website.com/success.php';
  $cancelledUrl = 'https://your-website.com/cancel.php';
  $ipnUrl = 'https://your-website.com/ipn-notification.php';

  // Create secure hash
  $dataToHash = "invoice_id={$invoiceId}&merchant_key={$merchantKey}&total={$total}";
  $secureHash = hash_hmac('sha256', $dataToHash, $secretKey);

  // Request payload
  $payload = [
    'merchant_key' => $merchantKey,
    'invoice_id' => $invoiceId,
    'total' => $total,
    'description' => $description,
    'name' => $customerName,
    'email' => $customerEmail,
    'number' => $customerPhone,
    'success_url' => $successUrl,
    'cancelled_url' => $cancelledUrl,
    'ipn_url' => $ipnUrl,
    'generate_checkout_url' => true,
    'secure_hash' => $secureHash
  ];

  // Initialize cURL session
  $ch = curl_init('https://pgw.paywithonline.com/v1/mobile_agents_v2');

  // Set cURL options
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
  ]);

  // Execute cURL request
  $response = curl_exec($ch);
  $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

  // Check for errors
  if (curl_errno($ch)) {
    $error = curl_error($ch);
    curl_close($ch);
    throw new Exception("cURL Error: {$error}");
  }

  curl_close($ch);

  // Parse the response
  $responseData = json_decode($response, true);

  // Check if request was successful
  if ($httpCode == 200 && isset($responseData['success']) && $responseData['success']) {
    echo "Payment request successful.<br>";
    echo "Redirect customer to: " . $responseData['url'] . "<br>";

    // In a web application, you would redirect the user:
    // header("Location: " . $responseData['url']);
    // exit;
  } else {
    echo "Payment request failed.<br>";
    echo "Response: " . print_r($responseData, true) . "<br>";
  }

  return $responseData;
}

// Call the function
try {
  $result = createPaymentRequest();
} catch (Exception $e) {
  echo "Error: " . $e->getMessage();
}
?>`}
            </pre>
          </TabsContent>
          <TabsContent value="python" className="rounded-md border p-4 mt-2">
            <h3 className="text-lg font-semibold mb-2">Python Example</h3>
            <p className="text-sm text-muted-foreground mb-4">Using requests library for HTTP requests</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`import requests
import hmac
import hashlib
import json
import time

def create_payment_request():
    # Your EcobankPay merchant credentials
    merchant_key = 'your-merchant-key'
    secret_key = 'your-secret-key'  # Provided by EcobankPay

    # Order details
    invoice_id = f'INV-{int(time.time())}'  # Generate a unique invoice ID
    total = '100.00'
    description = 'Payment for order #12345'

    # Customer information
    customer_name = 'John Doe'
    customer_email = 'john.doe@example.com'
    customer_phone = '233201234567'

    # Callback URLs
    success_url = 'https://your-website.com/success'
    cancelled_url = 'https://your-website.com/cancel'
    ipn_url = 'https://your-website.com/ipn-notification'

    # Create secure hash
    data_to_hash = f'invoice_id={invoice_id}&merchant_key={merchant_key}&total={total}'
    secure_hash = hmac.new(
        secret_key.encode(),
        data_to_hash.encode(),
        hashlib.sha256
    ).hexdigest()

    # Request payload
    payload = {
        'merchant_key': merchant_key,
        'invoice_id': invoice_id,
        'total': total,
        'description': description,
        'name': customer_name,
        'email': customer_email,
        'number': customer_phone,
        'success_url': success_url,
        'cancelled_url': cancelled_url,
        'ipn_url': ipn_url,
        'generate_checkout_url': True,
        'secure_hash': secure_hash
    }

    try:
        # Send payment request to EcobankPay
        response = requests.post(
            'https://pgw.paywithonline.com/v1/mobile_agents_v2',
            json=payload,
            headers={'Content-Type': 'application/json'}
        )

        # Parse the response
        response_data = response.json()

        # Check if request was successful
        if response.status_code == 200 and response_data.get('success'):
            print('Payment request successful:')
            print(json.dumps(response_data, indent=2))
            print(f'Redirect customer to: {response_data["url"]}')

            # In a web application, you would redirect the user:
            # return redirect(response_data['url'])
        else:
            print('Payment request failed:')
            print(json.dumps(response_data, indent=2))

        return response_data

    except requests.exceptions.RequestException as e:
        print(f'Error creating payment request: {e}')
        raise

# Call the function
if __name__ == '__main__':
    try:
        result = create_payment_request()
    except Exception as e:
        print(f'Payment request failed: {e}')`}
            </pre>
          </TabsContent>
          <TabsContent value="java" className="rounded-md border p-4 mt-2">
            <h3 className="text-lg font-semibold mb-2">Java Example</h3>
            <p className="text-sm text-muted-foreground mb-4">Using HttpClient for HTTP requests</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.Date;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import org.json.JSONObject;

public class EcobankPayExample {

    public static void main(String[] args) {
        try {
            JSONObject response = createPaymentRequest();
            System.out.println("Response: " + response.toString(2));

            if (response.getBoolean("success")) {
                System.out.println("Redirect customer to: " + response.getString("url"));
                // In a web application, you would redirect the user:
                // response.sendRedirect(response.getString("url"));
            }
        } catch (Exception e) {
            System.err.println("Payment request failed: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public static JSONObject createPaymentRequest() throws Exception {
        // Your EcobankPay merchant credentials
        String merchantKey = "your-merchant-key";
        String secretKey = "your-secret-key"; // Provided by EcobankPay

        // Order details
        String invoiceId = "INV-" + new Date().getTime(); // Generate a unique invoice ID
        String total = "100.00";
        String description = "Payment for order #12345";

        // Customer information
        String customerName = "John Doe";
        String customerEmail = "john.doe@example.com";
        String customerPhone = "233201234567";

        // Callback URLs
        String successUrl = "https://your-website.com/success";
        String cancelledUrl = "https://your-website.com/cancel";
        String ipnUrl = "https://your-website.com/ipn-notification";

        // Create secure hash
        String dataToHash = String.format("invoice_id=%s&merchant_key=%s&total=%s",
                                         invoiceId, merchantKey, total);
        String secureHash = generateHmacSha256(dataToHash, secretKey);

        // Request payload
        JSONObject payload = new JSONObject();
        payload.put("merchant_key", merchantKey);
        payload.put("invoice_id", invoiceId);
        payload.put("total", total);
        payload.put("description", description);
        payload.put("name", customerName);
        payload.put("email", customerEmail);
        payload.put("number", customerPhone);
        payload.put("success_url", successUrl);
        payload.put("cancelled_url", cancelledUrl);
        payload.put("ipn_url", ipnUrl);
        payload.put("generate_checkout_url", true);
        payload.put("secure_hash", secureHash);

        // Create HTTP client
        HttpClient client = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_2)
                .connectTimeout(Duration.ofSeconds(10))
                .build();

        // Build request
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://pgw.paywithonline.com/v1/mobile_agents_v2"))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(payload.toString()))
                .build();

        // Send request and get response
        HttpResponse<String> response = client.send(request,
                                                  HttpResponse.BodyHandlers.ofString());

        // Parse and return the response
        return new JSONObject(response.body());
    }

    private static String generateHmacSha256(String data, String key) throws Exception {
        Mac sha256Hmac = Mac.getInstance("HmacSHA256");
        SecretKeySpec secretKey = new SecretKeySpec(key.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
        sha256Hmac.init(secretKey);

        byte[] hashBytes = sha256Hmac.doFinal(data.getBytes(StandardCharsets.UTF_8));

        StringBuilder hexString = new StringBuilder();
        for (byte b : hashBytes) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }

        return hexString.toString();
    }
}`}
            </pre>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Next Steps
        </h2>

        <p className="leading-7">
          After creating a payment request and receiving a successful response with a checkout URL, you should:
        </p>

        <ul className="ml-6 list-disc space-y-2">
          <li className="leading-7">
            Redirect the customer to the checkout URL to complete the payment
          </li>
          <li className="leading-7">
            Handle the callback when the customer is redirected back to your success or cancelled URL
          </li>
          <li className="leading-7">
            Set up your IPN endpoint to receive payment notifications
          </li>
          <li className="leading-7">
            Verify the payment status using the status check endpoint
          </li>
        </ul>

        <p className="leading-7">
          See the <Link href="/docs/sample-code/response" className="text-primary underline hover:text-primary/80">Sample Response Code</Link> page for examples of how to handle responses and payment verifications.
        </p>
      </div>

      <div className="flex justify-end">
        <Link href="/docs/sample-code/response" className="text-primary underline hover:text-primary/80">
          Next: Sample Response Code →
        </Link>
      </div>
    </div>
  )
}
