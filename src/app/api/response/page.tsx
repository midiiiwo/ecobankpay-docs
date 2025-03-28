import { Metadata } from "next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Code, InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Response Codes - EcobankPay API Documentation",
  description: "Detailed reference for EcobankPay API response codes",
}

export default function ResponseCodesPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Response Codes
        </h1>
        <p className="text-lg text-muted-foreground">
          Understanding responses returned by the EcobankPay API
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          Below are the general responses received after a payment transaction is initiated or for payment status requests.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Initial Transaction Response
        </h2>

        <p className="leading-7">
          Upon successful payment process initiated, the response received contains a JSON payload with the following parameters:
        </p>

        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="w-[150px]">Parameter</TableHead>
                <TableHead className="w-[150px]">Values</TableHead>
                <TableHead className="w-[100px]">Value Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">success</TableCell>
                <TableCell>True, False</TableCell>
                <TableCell>Boolean</TableCell>
                <TableCell>
                  <div>
                    <p><strong>True:</strong> request on transaction for payment successfully initiated to gateway</p>
                    <p><strong>False:</strong> request on transaction to gateway NOT successful.</p>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">url</TableCell>
                <TableCell>URL</TableCell>
                <TableCell>String</TableCell>
                <TableCell>The gateway checkout page URL specifically for the transaction in question. Load or pop-up this URL in a browser for customer to completed payment process</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">error</TableCell>
                <TableCell>Object</TableCell>
                <TableCell>Object</TableCell>
                <TableCell>Error details if success is False</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="bg-muted p-4 rounded-md">
          <p className="text-sm font-bold mb-2">Example Success Response:</p>
          <pre className="text-sm overflow-x-auto">
{`{
  "invoice_id": "invoice001",
  "tx_reference": "1",
  "url": "https://pgw.paywithonline.com/v1/7755055152595959",
  "success": true,
  "message": "Invoice created"
}`}
          </pre>
        </div>

        <div className="bg-muted p-4 rounded-md">
          <p className="text-sm font-bold mb-2">Example Error Response:</p>
          <pre className="text-sm overflow-x-auto">
{`{
  "success": false,
  "error": {
    "code": "GW-001",
    "message": "merchant_key missing or empty"
  }
}`}
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Payment Status Response
        </h2>

        <p className="leading-7">
          Below is the general response received for a payment status request.
        </p>

        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="w-[150px]">Parameter</TableHead>
                <TableHead className="w-[200px]">Values</TableHead>
                <TableHead className="w-[100px]">Value Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">status</TableCell>
                <TableCell>new, paid, cancelled, awaiting_payment, failed</TableCell>
                <TableCell>String</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p><strong>new:</strong> payment transaction is new, initiated to the respective payment network</p>
                    <p><strong>paid:</strong> payment made successfully by customer</p>
                    <p><strong>cancelled:</strong> payment cancelled by customer</p>
                    <p><strong>awaiting_payment:</strong> payment pending. Customer does not complete or cancel payment.</p>
                    <p><strong>failed:</strong> Transaction failed. Reason for failure is provided in status_reason parameter.</p>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">status_reason</TableCell>
                <TableCell>Free text</TableCell>
                <TableCell>String</TableCell>
                <TableCell>This parameter holds detail description for a Failed Transaction status. For other status values, it is empty.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">buyer_firstname</TableCell>
                <TableCell>Free text</TableCell>
                <TableCell>String</TableCell>
                <TableCell>First name of customer. Usually empty /null since no value is passed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">buyer_lastname</TableCell>
                <TableCell>Free text</TableCell>
                <TableCell>String</TableCell>
                <TableCell>Last name of customer. Usually empty / null</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">buyer_email</TableCell>
                <TableCell>Free text</TableCell>
                <TableCell>String</TableCell>
                <TableCell>Email address of customer. Usually empty / null</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">buyer_phone</TableCell>
                <TableCell>Free text</TableCell>
                <TableCell>String</TableCell>
                <TableCell>Phone number of customer. Usually empty / null</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">invoice_id</TableCell>
                <TableCell>Free text</TableCell>
                <TableCell>String</TableCell>
                <TableCell>Invoice Id of transaction</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">amount</TableCell>
                <TableCell></TableCell>
                <TableCell>Float</TableCell>
                <TableCell>Payment amount made</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">as_at</TableCell>
                <TableCell></TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Transaction timestamp on gateway</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">narration</TableCell>
                <TableCell>Free Text</TableCell>
                <TableCell>String</TableCell>
                <TableCell>Description of payment made</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Sample Status Response
        </h2>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm overflow-x-auto">
{`{
  "invoice_id": "invoice001",
  "tx_reference": "121a8wmy78TRANSACTION1234Q",
  "status": "paid",
  "status_reason": "",
  "amount": 25.00,
  "buyer_firstname": "John",
  "buyer_lastname": "Doe",
  "buyer_email": "john.doe@example.com",
  "buyer_phone": "233201234567",
  "narration": "Payment for order #invoice001",
  "as_at": "2023-08-15T14:22:45Z"
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
