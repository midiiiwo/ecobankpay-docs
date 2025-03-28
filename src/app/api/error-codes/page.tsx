import { Metadata } from "next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Gateway Error Codes - EcobankPay API Documentation",
  description: "List of error codes and descriptions for EcobankPay API",
}

export default function ErrorCodesPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Gateway Error Codes
        </h1>
        <p className="text-lg text-muted-foreground">
          Reference list of error codes returned by the EcobankPay gateway
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          These error codes help you troubleshoot issues during integration and transaction processing.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Common Error Codes
        </h2>

        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="w-[100px]">Error</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">GW-001</TableCell>
                <TableCell>merchant_key missing or empty</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GW-002</TableCell>
                <TableCell>invoice_id missing or empty</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GW-003</TableCell>
                <TableCell>total/amount value missing or empty</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GW-009</TableCell>
                <TableCell>Merchant is deactivated from receiving payments</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GW-010</TableCell>
                <TableCell>Invalid secure_hash value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GW-011</TableCell>
                <TableCell>Merchant authentication failed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GW-020</TableCell>
                <TableCell>Transaction already processed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GW-030</TableCell>
                <TableCell>Payment method not supported</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GW-040</TableCell>
                <TableCell>Transaction timeout</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GW-050</TableCell>
                <TableCell>System error, please contact support</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Card Payment Specific Errors
        </h2>

        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="w-[100px]">Error</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">CP-001</TableCell>
                <TableCell>Invalid card number</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">CP-002</TableCell>
                <TableCell>Expired card</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">CP-003</TableCell>
                <TableCell>Insufficient funds</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">CP-004</TableCell>
                <TableCell>Invalid CVV</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">CP-005</TableCell>
                <TableCell>Transaction declined by issuer</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Mobile Money Specific Errors
        </h2>

        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="w-[100px]">Error</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">MM-001</TableCell>
                <TableCell>Invalid mobile number</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MM-002</TableCell>
                <TableCell>Mobile money account not found</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MM-003</TableCell>
                <TableCell>Insufficient balance</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MM-004</TableCell>
                <TableCell>Transaction limit exceeded</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MM-005</TableCell>
                <TableCell>Mobile money provider unavailable</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Handling Error Responses
        </h2>

        <p className="leading-7">
          When an error occurs, the API will return a JSON response with a <code className="bg-muted px-1 py-0.5 rounded text-sm">success</code> field set to <code className="bg-muted px-1 py-0.5 rounded text-sm">false</code> and an error object containing details of what went wrong.
        </p>

        <div className="bg-muted p-4 rounded-md">
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

        <p className="leading-7">
          Your application should handle these errors gracefully and provide appropriate feedback to the user.
        </p>
      </div>
    </div>
  )
}
